"use client";
import { useAppDispatch } from "@/store/store";
import { useSystemConfig } from "@/app/hooks/fetch/app";
import { useCartsList } from "@/app/hooks/fetch/cart";
import { useProductDetails } from "@/app/hooks/fetch/products";
import AppProductPicture from "@/components/common/app.product.picture/app.product.picture";
import ProductSizeSelector from "@/components/common/app.product.variance/app.product.size.variance/app.product.size.variance";
import CartBarSkeleton from "@/skeletons/horizontal.bars.skeleton/cart.skeleton";
import { Button } from "primereact/button";
import { Rating } from "primereact/rating";
import { Tag } from "primereact/tag";
import { useState, useEffect } from "react";
import AppCounterButton from "@/components/common/app.counter.button/app.counter.button";
import { createAction } from "@reduxjs/toolkit";
// import { ProgressBar } from "primereact/progressbar";
import {
  findCartItem,
  getLanguageBaseName,
  // isActionLoading,
} from "@/components/common/util/util";
import ProductDetailBarSkeleton from "@/skeletons/horizontal.bars.skeleton/product.detail.bar.skeleton";

interface ProductDetail {
  params: {
    id: string;
  };
}

export default function Home({ params }: ProductDetail, props: any) {
  const { item } = props;
  const { data: systemConfig } = useSystemConfig();
  const [showConfirmDialog, setShowConfirmDialog] = useState(false);
  const dispatch = useAppDispatch();

  const {
    mutate: cartsMutate,
    data: userCart,
    isLoading: isCartsLoading,
    error: cartsListError,
  } = useCartsList();

  const { data: productDetails, isLoading: isLoadingProductDetails } =
    useProductDetails(
      {
        productId: params && params.id,
      },
      {
        refreshInterval: 0,
        revalidateIfStale: false,
        revalidateOnFocus: false, // Do not revalidate data on component focus
      }
    );

  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const [selectedSize, setSelectedSize] = useState<string>("");

  useEffect(() => {
    if (productDetails) {
      const weight = productDetails.get("weight");
      setSelectedSize(`Weight: ${weight}`);
    }
  }, [productDetails]);

  const productWeight = productDetails && productDetails.get("weight");
  const sizes = [
    {
      name: `Weight: ${productWeight} KG`,
      weight: productWeight,
      // dimension: productDimension ? productDimension.toJS() : null,
    },
  ];

  const InLargeImage = (item: any) => {
    const imageSrc = selectedImage
      ? selectedImage
      : `${systemConfig?.get("fileUploadBaseUrl")}${productDetails?.get(
          "thumbnailImage"
        )}`;

    return (
      <img
        src={imageSrc}
        alt={getLanguageBaseName(productDetails && productDetails.get("name"))}
        style={{ maxWidth: "100%", height: "auto" }}
      />
    );
  };

  const images = productDetails
    ? productDetails.get("images").map((image: string) => ({
        alt: productDetails.get("nameSearch"),
        itemImageSrc: `${systemConfig?.get("fileUploadBaseUrl")}${image}`,
        thumbnailImageSrc: `${systemConfig?.get("fileUploadBaseUrl")}${image}`,
      }))
    : [];

  const thumbnailTemplate = (item: any) => {
    return (
      <img
        src={item.thumbnailImageSrc}
        alt={
          getLanguageBaseName(productDetails && productDetails.get("name")) ||
          "Product Thumbnail"
        }
        style={{ maxWidth: "100px", height: "auto", cursor: "pointer" }}
        onClick={() => setSelectedImage(item.itemImageSrc)}
      />
    );
  };

  const tags = productDetails?.get("tags");
  const tagsArray = tags ? (tags.toJS ? tags.toJS() : tags) : [];
  const tagNames = Array.isArray(tagsArray)
    ? tagsArray.map((tag: any) => getLanguageBaseName(tag.name))
    : [];

  const productDimension = productDetails && productDetails.get("size");

  const viewToCartITem = () => {
    console.log("redirect");
  };

  const customDialogStyle = {
    marginLeft: "10px",
    color: "#ff4c72", // Color of the close icon
  };

  const addToCart = () => {
    if (productDetails) {
      const addTProductToCart = createAction(
        `ADD_PRODUCT_TO_CART_${productDetails?.get("id")}`,
        (dataR: any = {}, dt: any = {}) => ({
          payload: {
            data: dataR,
            details: dt,
            url: `v1/cart?id=${dataR.productId}`,
            method: "PUT",
          },
        })
      );
      dispatch(
        addTProductToCart(
          {
            productId: productDetails && productDetails.get("id"),
            quantity: 1,
          },
          {
            //userCart: userCart,
            productId: productDetails && productDetails.get("id"),
            quantity: 1,
            cartsMutate: cartsMutate,
            mutationKeys: [
              "v1/cart/count",
              "v1/cart",
              "v1/order/calculate-price",
            ],
          }
        )
      );
    }
  };

  const cartProduct: any = findCartItem(
    userCart && userCart.get("packages"),
    productDetails && productDetails.get("id")
  );
  return (
    <main
      className="pt-1 pr-2 pb-9 pl-2 md:pl-9 md:pr-9 lg:pl-9 lg:pr-9 xl:pl-8 xl:pr-8"
      id="ProductDetail-Page"
      style={{ backgroundColor: "#F5F5F5" }}
    >
      {isLoadingProductDetails ? (
        <ProductDetailBarSkeleton />
      ) : (
        <div
          className="bg-white mt-4 xl:w-9 mx-auto border-round-2xl p-4"
          key={item?.id}
        >
          {/* <div className="w-full">
            <AppBreadCrumb model={items} />
          </div> */}

          <div className="flex flex-wrap  align-items-start gap-4 ">
            {productDetails ? (
              <AppProductPicture
                value={images}
                numVisible={4}
                item={InLargeImage}
                thumbnail={thumbnailTemplate}
                thumbnailsPosition={"left"}
                showThumbnailNavigators={false}
              />
            ) : null}
            <div className="detail_product w-12 lg:w-4 xl:w-30rem">
              <div className="">
                <div className="mb-2">
                  <span className="lg:w-4 xl:text-4xl  font-semibold">
                    {getLanguageBaseName(
                      productDetails && productDetails.get("name")
                    )}
                  </span>
                </div>
                <div className="mb-3 mt-2">
                  <span
                    className="text-lg font-semibold"
                    style={{ color: "#9D9D9D" }}
                  >
                    Brand name
                  </span>
                </div>
                {/* Tags Components */}

                <div className="flex gap-2">
                  {productDetails &&
                    productDetails.get("returnable") === false && (
                      <Tag
                        className="pt-1 pr-4 pb-1 pl-4"
                        value="No Return"
                        style={{
                          background: "transparent",
                          color: "#FF4C72",
                          border: "1px solid #FF4C72",
                          borderRadius: "8px",
                        }}
                      />
                    )}

                  {tagNames &&
                    tagNames.length > 0 &&
                    tagNames.map((tagName, index) => (
                      <Tag
                        key={index} // Make sure to provide a unique key for each tag
                        className="pt-1 pr-4 pb-1 pl-4"
                        value={tagName}
                        style={{
                          background: "transparent",
                          color: "#5A9429", // Conditionally set color based on tag name
                          border: "1px solid",
                          borderColor: "#5A9429", // Conditionally set border color
                          borderRadius: "8px",
                          // marginRight: "8px", // Optional: Adjust spacing between tags
                          // marginBottom: "8px", // Optional: Adjust spacing between tags// Optional: Adjust spacing between tags
                        }}
                      />
                    ))}
                </div>
                {/* StarRating Components */}
                <div
                  className="flex mb-3 mt-3 font-semibold text-md mx-1 align-items-center"
                  style={{ color: "#9D9D9D" }}
                >
                  1k+ Sold{" "}
                  <Rating
                    value={1}
                    readOnly
                    cancel={false}
                    style={{ marginLeft: "5px" }}
                  ></Rating>
                  {/* <AppProductStarRating value={4} stars={5} /> */}
                  <span
                    className="font-normal text-md mx-1"
                    style={{ color: "#9D9D9D" }}
                  >
                    (1)
                  </span>
                </div>
              </div>
              {/* Color Variants component */}

              {/* Size Variants component */}
              <div className="">
                <div className="mb-2">
                  <ProductSizeSelector
                    sizes={sizes}
                    varianceAttribute={"Weight:"}
                    selectedSize={selectedSize}
                    // onSizeSelect={handleSizeSelect}
                  />
                </div>
                <div className="mb-2">
                  <ProductSizeSelector
                    dimensions={[
                      {
                        name: "Length",
                        value: `${productDimension?.get("length")} cm` || "N/A",
                      },
                      {
                        name: "Width",
                        value: `${productDimension?.get("width")} cm` || "N/A",
                      },
                      {
                        name: "Height",
                        value: `${productDimension?.get("height")} cm` || "N/A",
                      },
                    ]}
                    selectedSize={selectedSize}
                    varianceAttribute={"Dimensions:"}
                    // onSizeSelect={handleSizeSelect} // Implement this if needed
                  />
                </div>
              </div>
              {/* Price Tag */}
              <div className="mb-3 w-20rem">
                <span
                  className="font-semibold text-3xl "
                  style={{ color: "#009736" }}
                >
                  {productDetails.get("currency")}
                  {productDetails.get("basePrice")}
                </span>

                {productDetails.get("originalPrice") && (
                  <del
                    className="font-normal text-3xl ml-1 "
                    style={{ color: "#9D9D9D" }}
                  >
                    {productDetails.get("currency")}
                    {productDetails.get("originalPrice")}
                  </del>
                )}
              </div>
              {/* Add to cart button */}

              {cartProduct &&
              cartProduct.get("product") &&
              cartProduct.get("product").get("productId") ? (
                <AppCounterButton
                  dispatch={dispatch}
                  product={productDetails && productDetails?.toJS()}
                  userCart={userCart}
                  cartProduct={cartProduct}
                />
              ) : isCartsLoading ? null : (
                <div className="flex w-22rem">
                  <Button
                    onClick={addToCart}
                    icon="pi pi-shopping-cart"
                    label="Add to Cart"
                    disabled={
                      productDetails &&
                      productDetails.get("inventoryStatus") === "OUTOFSTOCK"
                    }
                    rounded
                    style={{ width: "90%" }}
                  />
                  <div className="mt-1 mx-1">
                    <i
                      className="pi pi-heart text-4xl"
                      style={{ color: "#434343" }}
                    />
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      )}

      <div className="bg-white mt-4 xl:w-9 mx-auto border-round-2xl p-4">
        <h2 style={{ color: "#262626", fontWeight: "500" }}>Description</h2>
        <p className="text-base" style={{ lineHeight: "1.5" }}>
          {getLanguageBaseName(
            productDetails && productDetails.get("description")
          )}
        </p>

        <div className="flex gap-3 flex-wrap">
          {productDetails
            ? productDetails
                .get("images")
                .map((image: string, index: number) => (
                  <div className="w-10rem md:w-13rem xl:w-15rem" style={{boxShadow: 'rgba(0, 0, 0, 0.15) 1.95px 1.95px 2.6px'}}>
                    <img
                      key={index}
                      // src={image}
                      src={`${
                        systemConfig &&
                        systemConfig.get("fileUploadBaseUrl") &&
                        systemConfig.get("fileUploadBaseUrl")
                      }${image}`}
                      alt={`Product Image ${index + 1}`}
                      width={'100%'}
                    />
                  </div>
                ))
            : null}
        </div>
      </div>
    </main>
  );
}
