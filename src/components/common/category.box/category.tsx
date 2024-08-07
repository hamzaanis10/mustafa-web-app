"use client";
import React from "react";
import { Button } from "primereact/button";
import { Rating } from "primereact/rating";
import { Tag } from "primereact/tag";
import { Card } from "primereact/card";
import {
  findCartItem,
  getLanguageBaseName,
  isActionLoading,
} from "../util/util";
import AppCounterButton from "../app.counter.button/app.counter.button";
//import { addProductToCart } from "@/store/actions/cart.actions";
import { createAction } from "@reduxjs/toolkit";
import { ProgressBar } from "primereact/progressbar";

export default function CategoryBox(props: any) {
  const {  product, index, systemConfig, } = props;

  const dataToPars = product;
  console.log(dataToPars,'dataToPars')
  
  return (
    <Card
    className="w-10rem sm:w-10rem md:w-10rem xl:w10rem shadow-none  "
    style={{ height: "180px", margin:"auto"}}  
      key={product.id}
    >
     
      {dataToPars ? (
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
            <div className="flex flex-column align-items-center gap-1">
              <div
                className="text-xs md:text-sm font-medium pt-1 pb-1"
                style={{ color: "#000000" }}
              >
                {getLanguageBaseName(dataToPars.name)}
              </div>
            </div>
        </div>
      ) : null}
    </Card>
  );
}
