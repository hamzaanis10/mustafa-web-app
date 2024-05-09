"use client";
import React from "react";
import { Button } from "primereact/button";
import { Rating } from "primereact/rating";
import { Tag } from "primereact/tag";
import { Card } from "primereact/card";
import { getLanguageBaseName } from "../util/util";
import { useSystemConfig } from "@/app/hooks/fetch/app";
import AppCounterButton from "../app.counter.button/app.counter.button";

export default function ProductBox(props: any) {
  const { data: systemConfig, isLoading: systemConfigLoading } =
    useSystemConfig();

  const { product, index } = props;

  return (
    <div id={`listitem-${index + 1}`}>
      {systemConfig && product ? (
        <Card
          className="md:w-14rem xl:w-15rem border-round-3xl shadow-none"
          style={{ height: "fit-content" }}
          key={product.id}
        >
          <img
            className="block xl:block"
            src={`${
              systemConfig &&
              systemConfig.get("fileUploadBaseUrl") &&
              systemConfig.get("fileUploadBaseUrl")
            }${product.thumbnailImage}`}
            //alt={product.name}
            style={{ width: "100%" }}
          />
          <div>
            <div className="flex flex-row  align-items-center gap-2 pt-3">
              <span className="text-base font-medium">
                {product?.currency} {product?.basePrice}
              </span>
              {product.originalPrice && (
                <span className="text-xs" style={{ color: "#9D9D9D" }}>
                  <del>
                    {product?.currency} {product.originalPrice}
                  </del>
                </span>
              )}
            </div>
            <div className="flex flex-column gap-1">
              <div
                className="text-base font-medium pt-1 pb-1"
                style={{ color: "#555555" }}
              >
                {getLanguageBaseName(product.name)}
              </div>
              <div
                className="text-700 line-clamp-3 mb-2 text-sm"
                style={{ color: "#C4C4C4" }}
              >
                {getLanguageBaseName(product.description)}
              </div>
            </div>
            <div className="flex  flex-column gap-2 pb-2">
              <Rating value={1} readOnly cancel={false}></Rating>
            </div>
            {getLanguageBaseName(product?.tags[0]?.name) && (
              <div className="flex gap-2 flex-wrap">
                <Tag
                  className="pt-1 pr-2 pb-1 pl-2"
                  value={getLanguageBaseName(product?.tags[0]?.name)}
                  style={{ background: "#E6FFED", color: "#00CB56" }}
                ></Tag>
              </div>
            )}
          </div>

          <div className="flex flex-column lg:flex-row align-items-center xl:align-items-center justify-content-center lg:flex-1 gap-4">
            <div className="flex flex-row lg:flex-column align-items-center gap-4 lg:gap-2">
              <Button
                icon="pi pi-shopping-cart"
                label="Add to Cart"
                disabled={product.inventoryStatus === "OUTOFSTOCK"}
                className="border-none hover:border-none focus:border-none"
                style={{ background: "transparent", color: "#5A9429" }}
              ></Button>
            </div>
          </div>
          <AppCounterButton/>
        </Card>
      ) : null}
    </div>
  );
}
