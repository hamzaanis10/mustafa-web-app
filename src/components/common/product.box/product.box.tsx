"use client";
import React from "react";
import { Button } from "primereact/button";
import { Rating } from "primereact/rating";
import { Tag } from "primereact/tag";
import { Card } from "primereact/card";
import { getLanguageBaseName } from "../util/util";
import { useSystemConfig } from "@/app/hooks/fetch/app";

export default function ProductBox(props: any) {
    const { data: systemConfig, isLoading: systemConfigLoading } = useSystemConfig();
    const getSeverity = (product: any) => {
        switch (product.inventoryStatus) {
            case 'INSTOCK':
                return 'success';

            case 'LOWSTOCK':
                return 'warning';

            case 'OUTOFSTOCK':
                return 'danger';

            default:
                return null;
        }
    };
    const { product } = props;
    return (
        <>
            {
                systemConfig ?
                    <Card className="md:w-14rem xl:w-15rem border-round-3xl shadow-none" style={{ height: "fit-content" }} key={product.id}>
                        <img
                            className="shadow-2 block xl:block"
                            src={`${systemConfig &&
                                systemConfig.get("fileUploadBaseUrl") &&
                                systemConfig.get("fileUploadBaseUrl")
                                }${product.thumbnailImage}`}
                            //alt={product.name}
                            style={{ width: "100%" }}
                        />
                        <div>
                            <div className="flex flex-row  align-items-center gap-2 pt-3">
                                <span className="text-2xl font-medium">
                                    ${product?.discountedPrice}
                                </span>
                                <span className="text-base">
                                    <del>${product.price}</del>
                                </span>
                            </div>
                            <div className="flex flex-column gap-1">
                                <div className="text-2xl font-medium pt-1 pb-1">{getLanguageBaseName(product.name)}</div>
                                <div className="text-700 line-clamp-3 mb-2">{getLanguageBaseName(product.description)}</div>
                            </div>
                            <div className="flex flex-column gap-2 pb-2">
                                <Rating value={product.rating} readOnly cancel={false}></Rating>
                            </div>
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
                                <Tag
                                    value={product.inventoryStatus}
                                    severity={getSeverity(product)}
                                ></Tag>
                            </div>
                        </div>
                    </Card> : null
            }
        </>
    );
}
