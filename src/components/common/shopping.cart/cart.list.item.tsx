"use client";
import React from "react";
import AppCounterButton from "../app.counter.button/app.counter.button";
import { useProductDetails } from "@/app/hooks/fetch/products";
import { getLanguageBaseName } from "../util/util";
import CartBarSkeleton from "@/skeletons/horizontal.bars.skeleton/cart.skeleton";

export default function CartListItem(props: any) {
  const { item, cartProduct, systemConfig, userCart, dispatch, showCounterButton } = props;
  const { data: productDetails, isLoading: isLoadingProductDetails } =
    useProductDetails(
      {
        productId:
          cartProduct &&
          cartProduct.get("product") &&
          cartProduct.get("product").get("productId"),
      },
      {
        refreshInterval: 0,
        revalidateIfStale: false,
        //revalidateOnMount: false, // Do not revalidate data on component mount
        revalidateOnFocus: false, // Do not revalidate data on component focus
      }
    );

  return (
    <>
      {/* <div
            className="flex align-items-center gap-2 p-3"
            style={{ borderBottom: "1px solid #E9E9E9" }}
        >
            <Checkbox
                // onChange={(e) => setChecked(e.checked)}
                checked={true}
            ></Checkbox>{" "}
            <p className="m-0 font-semibold">SG Department (2)</p>
        </div> */}

      {isLoadingProductDetails ? (
        <CartBarSkeleton count={5} />
      ) : (
        <div
          key={item?.id}
          className="item-container"
          style={{ borderBottom: "1px solid #E9E9E9" }}
        >
          <div className="flex align-items-center gap-2 p-3 flex-wrap lg:flex-nowrap">
            {/* <Checkbox
                    // onChange={(e) => toggleItem(item?.id)}
                    checked={true}
                    // className="w-1rem lg:w-2rem"
                    style={{ width: "fit-content" }}
                /> */}
            <div className="w-3rem lg:w-4rem">
              {productDetails ? (
                <img
                  src={`${systemConfig &&
                    productDetails &&
                    systemConfig.get("fileUploadBaseUrl") &&
                    systemConfig.get("fileUploadBaseUrl")
                    }${productDetails.get("thumbnailImage")}`}
                  alt={item?.name}
                  className="dark:invert"
                  width={54}
                  height={54}
                />
              ) : null}
            </div>
            <div className={`w-10rem lg:${showCounterButton ? "w-15rem" : "w-full"}`}>
              <p className="m-0 font-medium text-sm">
                {getLanguageBaseName(
                  productDetails && productDetails.get("name")
                )}
              </p>
              <p
                className="m-0 line-clamp-3 text-sm pt-1 pb-1"
                style={{ color: "#9D9D9D",maxHeight:"60px" }}
              >
                {getLanguageBaseName(
                  productDetails && productDetails.get("description")
                )}
              </p>
              <p className="flex align-items-center gap-2 m-0">
                <span
                  className="text-xl font-medium"
                  style={{ color: "#009736" }}
                >
                  {productDetails && productDetails.get("basePrice")}
                </span>
                <span className="text-xs" style={{ color: "#9D9D9D" }}>
                  <del>
                    {" "}
                    {productDetails && productDetails.get("basePrice")}
                  </del>
                </span>
              </p>
            </div>
            {
             showCounterButton && productDetails && <AppCounterButton userCart={userCart} dispatch={dispatch} product={productDetails && productDetails.toJS()} cartProduct={cartProduct} />
            }
          </div>
          {/* <div className="flex align-items-center gap-2 p-3 lg:pl-6 pr-5 pb-3 justify-content-between bg-white" >
                <p
                    style={{ color: "#5A9429" }}
                    className="border-1 text-xs p-1 pr-3 p-1 pl-3 border-round-lg m-0">
                    Pick 1 more, get 20% off
                </p>
                <p
                    style={{ color: "#4C70FF" }}
                    className="underline text-xs m-0">
                    View Details
                </p>
            </div> */}
        </div>
      )}
    </>
  );
}
