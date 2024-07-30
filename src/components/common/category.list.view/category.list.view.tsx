"use client";
import React from "react";
import "./category.list.view.css";
import { getLanguageBaseName } from "../util/util";
import Link from "next/link";

export default function CategoryListView(props: any) {
  const { product, index, systemConfig } = props;

  const dataToPars = product;

  return (
    <div
      className="w-9rem sm:w-12rem md:w-12rem xl:w12rem shadow-none"
      style={{ margin: "0 auto", textAlign: "center", background:"#fff", padding:"30px 0", borderRadius:"10px",minHeight:"216px" }}
      key={product.id}
    >
      {dataToPars ? (
        <Link href={`/category/${product.id}`} style={{textDecoration:"none"}}>
          <div>
            <div className="flex justify-content-center">
              <img
                className="block border-circle xl:block"
                src={`${
                  systemConfig &&
                  systemConfig.get("fileUploadBaseUrl") &&
                  systemConfig.get("fileUploadBaseUrl")
                }${dataToPars.thumbnailImage}`}
                //alt={product.name}
                width="90px"
                height="90px"
              />
            </div>
            <div
                className="text-sm md:text-base font-medium pt-4 pb-1 pl-3 pr-3"
                style={{ color: "#000000" }}
              >
                {getLanguageBaseName(dataToPars.name)}
              </div>
          </div>
        </Link>
      ) : null}
    </div>
  );
}
