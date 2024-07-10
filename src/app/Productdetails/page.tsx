"use client";
import AppBreadCrumb from "@/components/common/app.breadcrumb/app.breadcrumb";
import AppProductColorVarients from "@/components/common/app.product.color.variants/app.product.color.varients";
import React, { useEffect, useState } from "react";
import {
  ProductDetail_BreadCrumb,
  colors,
  Sizes,
  PhotoService,
  ReviewTag,
  ProductReview,
} from "@/components/common/util/util";
import { MenuItem } from "primereact/menuitem";
import AppProductStarRating from "@/components/common/app.product.star.rating/app.product.star.rating";
import AppProductTag from "@/components/common/app.product.tag/app.product.tag";
import AppProductPicture from "@/components/common/app.product.picture/app.product.picture";
import AppButton from "@/components/common/app.button/app.button";
import "./page.css";
import AppCheckerBoard from "@/components/common/app.checker.board/app.checker.board";
import AppPagination from "@/components/common/app.pagination/app.pagination";
import { PaginatorPageChangeEvent } from "primereact/paginator";
import AppDialog from "@/components/common/app.dialog/app.dialog";
import AppCheckBox from "@/components/common/app.checkbox/app.checkbox";
import AppSuccessDialog from "@/components/common/app.success.dialog.content/app.success.dialog.content";
import AppRadioButton from "@/components/common/app.radio.button/app.radio.button";
import { RadioButtonChangeEvent } from "primereact/radiobutton";
import { ScrollTop } from "primereact/scrolltop";

function page() {
  const [selectcolor, setSelectColor] = useState(colors[0].name);
  const [clickButtonIndex, setClickButtonIndex] = useState(-1);
  const [images, setImages] = useState([]);
  const [first, setFirst] = useState<number>(0);
  const [rows, setRows] = useState<number>(10);
  const [reportDialog, setReportDialog] = useState(false);
  const [successDialog, setSuccessDialog] = useState(false);
  const [ingredient, setIngredient] = useState<string>("");
  const items: MenuItem[] = ProductDetail_BreadCrumb;

  useEffect(() => {
    PhotoService.getImages()
      .then((item: any) => setImages(item))
      .catch((error) => console.error("Error fetching images:", error));
  }, []);

  const openReportDialog = () => {
    setReportDialog(true);
    setSuccessDialog(false);
  };

  const verifyDialog = () => {
    setReportDialog(false);
    setSuccessDialog(true);
  };

  const closeDialog = () => {
    setSuccessDialog(false);
    setReportDialog(false);
  };

  const onPageChange = (e: PaginatorPageChangeEvent) => {
    setFirst(e.first);
    setRows(e.rows);
  };

  const customTemplate = {
    layout: "PrevPageLink PageLinks NextPageLink RowsPerPageDropdown",
    PrevPageLink: (options: any) => {
      return (
        <button
          type="button"
          className={options.className}
          onClick={options.onClick}
          disabled={options.disabled}
        >
          <i className="pi pi-chevron-left mr-3"></i> <span>Previous</span>
        </button>
      );
    },
    NextPageLink: (options: any) => {
      return (
        <button
          type="button"
          className={options.className}
          onClick={options.onClick}
          disabled={options.disabled}
        >
          <span> Next</span> <i className="pi pi-chevron-right ml-3"></i>
        </button>
      );
    },
  };

  const itemTemplate = (item: any) => {
    return (
      <img src={item.itemImageSrc} alt={item.alt} style={{ width: "100%" }} />
    );
  };

  const thumbnailTemplate = (item: any) => {
    return <img src={item.thumbnailImageSrc} alt={item.alt} />;
  };

  const handleClick = (index: any) => {
    setClickButtonIndex(index);
  };

  const hndleColorChange = (ColorName: any) => {
    setSelectColor(ColorName);
  };

  return (
    <div
      className="pt-9 pr-2 pb-9 pl-2 md:pl-9 md:pr-9 lg:pl-9 lg:pr-9 xl:pl-8 xl:pr-8"
      id="ProductDetail-Page"
    >
      <div className="bg-white mt-4">
        {/* breadcrumb component */}
        <div className="w-full">
          <AppBreadCrumb model={items} />
        </div>
        <div className="flex flex-wrap  align-items-center gap-4 ">
          {/*Picture Component */}
          <AppProductPicture
            value={images}
            numVisible={4}
            item={itemTemplate}
            thumbnail={thumbnailTemplate}
            thumbnailsPosition={"left"}
            showThumbnailNavigators={false}
          />
          <div
            className="detail_product w-12 lg:w-4 xl:w-3
        "
          >
            <div className="">
              <div className="mb-2">
                <span className="text-3xl font-semibold">
                  Product name here likDriscoll’s Blueberri{" "}
                </span>
              </div>
              <div className="mb-2">
                <span
                  className="text-lg font-semibold"
                  style={{ color: "#9D9D9D" }}
                >
                  Brand name
                </span>
              </div>
              {/* Tags Components */}
              <div className="flex gap-2 ">
                <AppProductTag
                  className="border-1 border-red-500 border-round text-red-600 "
                  value="No Return"
                />
                <AppProductTag
                  className="border-1 border-green-500 border-round text-green-600"
                  value="Breakfast"
                />
                <AppProductTag
                  className="border-1 border-green-500 border-round text-green-600"
                  value="Family Choice"
                />
              </div>
              {/* StarRating Components */}
              <div className="flex mb-3 ">
                <span
                  className="font-semibold text-md mx-1"
                  style={{ color: "#9D9D9D" }}
                >
                  5k+ Sold
                </span>
                <AppProductStarRating value={4} stars={5} />
                <span
                  className="font-normal text-md mx-1"
                  style={{ color: "#9D9D9D" }}
                >
                  (999)
                </span>
              </div>
            </div>
            {/* Color Variants component */}
            <div className="w-22rem">
              <span className="font-semibold text-lg ">
                Color:
                <span className=""> {selectcolor} </span>
              </span>
              <div className="grid col-12 mt-1">
                {colors.map((color: any, index: any) => (
                  <div
                    key={index}
                    className={`mx-1 my-1 ${
                      selectcolor === color.name ? "selected-color-item" : ""
                    }`}
                    style={{ cursor: "pointer" }}
                    onClick={() => hndleColorChange(color.name)}
                  >
                    <AppProductColorVarients color={color.code} />
                  </div>
                ))}
              </div>
            </div>
            {/* Size Variants component */}
            <div className="">
              <div className="mb-2">
                <span className="font-semibold text-lg ">Size</span>
              </div>
              <div className="flex align-items-center gap-2 ">
                {Sizes.map((item, index) => (
                  <div key={index} className="text-center">
                    <AppButton
                      label={item.name}
                      className="font-light text-xl"
                      style={{
                        backgroundColor:
                          clickButtonIndex === index ? "green" : "transparent",
                        color: clickButtonIndex === index ? "white" : "Black",
                      }}
                      onClick={() => handleClick(index)}
                    />
                  </div>
                ))}
              </div>
            </div>
            {/* Price Tag */}
            <div className="mb-3 w-20rem">
              <span
                className="font-semibold text-3xl "
                style={{ color: "#009736" }}
              >
                €399999.29
              </span>
              <del
                className="font-normal text-3xl ml-1 "
                style={{ color: "#9D9D9D" }}
              >
                €399999.29
              </del>
            </div>
            {/* Add to cart button */}
            <div className="flex w-22rem">
              <div style={{ width: "90%" }}>
                <AppButton label="Add to cart" className="w-full" />
              </div>
              <div className="mt-1 mx-1">
                <i
                  className="pi pi-heart text-4xl"
                  style={{ color: "#434343" }}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* {Review Part} */}
      <div className="my-3 bg-white">
        <div className="p-4">
          <span
            className="text-2xl"
            style={{ color: "#262626", fontWeight: 500 }}
          >
            Review
          </span>
          <div
            className="mt-2 pt-6 pr-2 pb-6 pl-2 md:pr-5 md:pl-5 lg:pr-5 lg:pl-5 xl:pr-5 xl:pl-5"
            style={{ backgroundColor: "#EFF6E7", borderRadius: "6px" }}
          >
            <div className="flex justify-content-center align-items-center gap-2">
              <div className="flex flex-column align-items-center ">
                <span>
                  <span className="font-semibold text-lg my-1"> 4.7/</span>
                  <span className="text-md my-1">5</span>
                </span>
                <AppProductStarRating value={4} stars={5} />
                <span
                  className="font-semibold text-sm my-1"
                  style={{ color: "#7B7B7B" }}
                >
                  {" "}
                  (493 reviews){" "}
                </span>
              </div>
              <div
                style={{ borderLeft: "2px solid #7CB73A", height: "100px" }}
              ></div>
              <div className="flex flex-column justify-content-center">
                <span>
                  <span
                    className="font-semibold text-xs md:text-sm lg:text-sm xl:text-sm "
                    style={{ color: "#61646B" }}
                  >
                    Value of product
                  </span>
                  <span className="font-semibold ml-2">4.5</span>
                </span>
                <span>
                  <span
                    className="font-semibold text-xs md:text-sm lg:text-sm xl:text-sm "
                    style={{ color: "#61646B" }}
                  >
                    Quality of product
                  </span>
                  <span className="font-semibold ml-2">4.8</span>
                </span>
              </div>
            </div>
          </div>
          <div className="flex flex-wrap gap-2 md:flex align-items-center mt-3">
            {ReviewTag.map((item, index) => (
              <div
                className="pt-1 pr-3 pb-1 pl-3 "
                key={index}
                style={{ border: "1px solid #9D9D9D", borderRadius: "28px" }}
              >
                <span
                  className="text-base flex "
                  style={{ color: "#555555", fontWeight: 600 }}
                >
                  {item.name}
                  <span className="ml-2"> {item.star && item.star} </span>
                </span>
              </div>
            ))}
          </div>
          {ProductReview.map((item, index) => (
            <div
              className="pb-3 mt-3"
              key={index}
              style={{ borderBottom: "1px solid #E9E9E9" }}
            >
              <div className="flex justify-content-between">
                <div className="flex align-items-center gap-1">
                  <span className="text-sm" style={{ fontWeight: 500 }}>
                    {" "}
                    {item.name}{" "}
                  </span>
                  <AppProductStarRating value={item.rating} stars={5} />
                </div>
                <div>
                  <span style={{ color: "#9D9D9D" }}>{item.date}</span>
                </div>
              </div>
              <div className="text-base font-normal my-3">
                <p className="text-black line-height-3"> {item.comment} </p>
              </div>
              <div className="flex gap-2">
                {item.image?.map((imgobj, index) => (
                  <div key={index}>
                    <img
                      src={`https://primefaces.org/cdn/primereact/images/product/${imgobj.img}`}
                      alt={item.name}
                      className="dark:invert mb-2"
                      width={76}
                      height={76}
                    />
                  </div>
                ))}
              </div>
              <div className="flex justify-content-end align-items-center gap-2">
                <span className="pi pi-thumbs-up"></span>
                <span style={{ color: "#9D9D9D" }}>Helpful (120)</span>
                <span
                  className="pi pi-minus-circle"
                  onClick={openReportDialog}
                ></span>
                {reportDialog && (
                  <AppDialog
                    header="Report and Block this review"
                    visible={reportDialog}
                    onHide={() => setReportDialog(false)}
                    modal
                    className="w-22rem"
                    id="ReportPageDialog"
                  >
                    <div className="flex flex-column gap-2">
                      <AppRadioButton
                        label="The review image does not match the product."
                        value="The review image does not match the product."
                        onChange={(e: RadioButtonChangeEvent) =>
                          setIngredient(e.value)
                        }
                        checked={
                          ingredient ===
                          "The review image does not match the product."
                            ? true
                            : false
                        }
                      />
                      <AppRadioButton
                        label="Contains nudity or erotic meddages."
                        value="Contains nudity or erotic meddages."
                        onChange={(e: RadioButtonChangeEvent) =>
                          setIngredient(e.value)
                        }
                        checked={
                          ingredient === "Contains nudity or erotic meddages."
                            ? true
                            : false
                        }
                      />
                      <AppRadioButton
                        label="Contains advertisement."
                        value="Contains advertisement."
                        onChange={(e: RadioButtonChangeEvent) =>
                          setIngredient(e.value)
                        }
                        checked={
                          ingredient === "Contains advertisement."
                            ? true
                            : false
                        }
                      />
                      <AppRadioButton
                        label=" Harmful information involving minors."
                        value="Harmful information involving minors."
                        onChange={(e: RadioButtonChangeEvent) =>
                          setIngredient(e.value)
                        }
                        checked={
                          ingredient === "Harmful information involving minors."
                            ? true
                            : false
                        }
                      />
                      <AppRadioButton
                        label="Other violations."
                        value="Other violations."
                        onChange={(e: RadioButtonChangeEvent) =>
                          setIngredient(e.value)
                        }
                        checked={
                          ingredient === "Other violations." ? true : false
                        }
                      />
                    </div>
                    <div className="mt-3">
                      <AppButton
                        className="text-base"
                        label="Submit"
                        style={{
                          backgroundColor: "transparent",
                          color: "#00CB56",
                          fontWeight: 600,
                        }}
                        onClick={verifyDialog}
                      />
                      <AppButton
                        className="text-base"
                        label="Cancle"
                        style={{
                          backgroundColor: "transparent",
                          color: "#00CB56",
                          fontWeight: 600,
                        }}
                        onClick={closeDialog}
                      />
                    </div>
                  </AppDialog>
                )}
                {successDialog && (
                  <AppDialog
                    visible={successDialog}
                    onHide={closeDialog}
                    modal
                    className="w-22rem"
                  >
                    <AppSuccessDialog
                      title="Thanks for your feedback!"
                      label="Close"
                      onClick={closeDialog}
                      style={{
                        backgroundColor: "transparent",
                        color: "#00CB56",
                      }}
                    />
                  </AppDialog>
                )}
              </div>
            </div>
          ))}
          <AppPagination
            first={first}
            rows={rows}
            totalRecords={120}
            onPageChange={onPageChange}
            template={customTemplate}
          />
        </div>
      </div>

      {/* Description */}
      <div className="my-3 bg-white">
        <div className="p-5">
          <span
            className="text-2xl"
            style={{ color: "#262626", fontWeight: 500 }}
          >
            {" "}
            Description{" "}
          </span>
          <p className="text-sm font-normal ">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum.
          </p>
          <div className="mt-4">
            <AppCheckerBoard className=" cell" rows={2} cols={4} />
          </div>
        </div>
      </div>
      <div className="card flex flex-column align-items-center">
          <ScrollTop
            icon={"pi pi-arrow-up"}
            style={{
              padding: "30px",
              color: "#00CB56",
              background: "#FFFFFF",
              boxShadow: "rgba(99, 99, 99, 0.2) 0px 2px 8px 0px",
            }}
          />
        </div>
    </div>
  );
}

export default page;
