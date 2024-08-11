"use client";
import { MyOrder, Step_Menu } from "@/components/common/util/util";
import React, { useState } from "react";
import "./page.css";
import AppPagination from "@/components/common/app.pagination/app.pagination";
import { PaginatorPageChangeEvent } from "primereact/paginator";
import AppStepMenu from "@/components/common/app.step.menu/app.step.menu";
import { MenuItem } from "primereact/menuitem";
import AppButton from "@/components/common/app.button/app.button";
import AppCategories from "../((withsidebar))/cmp/c.layout/menu.category/menu.catrgory";

function page() {
  const [first, setFirst] = useState<number>(0);
  const [rows, setRows] = useState<number>(10);
  const [currentState, setCurrentState] = useState<string>("To deliver");

  const handleStateChange = (label: string) => {
    setCurrentState(label);
  };

  const items: MenuItem[] = Step_Menu(handleStateChange);

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
  return (
    <div id="My_order" className="flex">
      <div className="hidden lg:flex lg:w-3 lg:relative  z-2 menu-container">
        <AppCategories />
      </div>
      <div className="pt-6  m-auto flex flex-column align-items-center">
        <div className="text-center mb-3">
          <span className="text-4xl font-semibold"> My Orders </span>
        </div>
        <div className="flex md:m-auto my-3 Card">
          <AppStepMenu model={items}/>
        </div>
        <div className="Card">
          {MyOrder.map((item, index) => {
            return (
              <div className="bg-white p-2 my-2" key={index}>
                <div className="flex justify-content-between">
                  <div className="flex gap-1">
                    <span
                      className="border-circle m-auto"
                      style={{
                        width: 8,
                        height: 8,
                        backgroundColor:
                          currentState === "Completed" ||
                          (currentState === "Refund" &&
                            item.orderStatus === "Completed")
                            ? "#00CB56"
                            : "#FFAD4C",
                      }}
                    ></span>
                    <span
                      className="text-base font-semibold "
                      style={{ color: "#000000" }}
                    >
                      {currentState === "To deliver" ||
                      currentState === "Delivering" ||
                      currentState === "Completed"
                        ? currentState
                        : item.orderStatus}
                    </span>
                  </div>
                  <span
                    className="text-sm"
                    style={{ color: "#7B7B7B", fontWeight: 500 }}
                  >
                    id:{item.id}
                  </span>
                </div>
                <div className="order-container my-2">
                  {item.image?.map((subImg, index) => (
                    <div key={index} className="order-item">
                      {subImg.img ? (
                        <img
                          src={`https://primefaces.org/cdn/primereact/images/product/${subImg.img}`}
                          alt={""}
                          className="dark:invert mb-2 shadow-1 border-round"
                          width={76}
                          height={76}
                        />
                      ) : (
                        <div>
                          <p>Checkbox</p>
                        </div>
                      )}
                    </div>
                  ))}
                </div>
                <div className="flex justify-content-between">
                  <div className="flex flex-column gap-1 ">
                    <span
                      className="text-sm"
                      style={{ color: "#7B7B7B", fontWeight: 500 }}
                    >
                      Total
                    </span>
                    <span
                      className="text-base font-semibold "
                      style={{ color: "#555555" }}
                    >
                      ${item.price}
                    </span>
                  </div>
                  <div className="flex flex-column gap-1 ">
                    {currentState === "To deliver" ||
                    currentState === "Delivering" ? (
                      <>
                        <span
                          className="text-sm"
                          style={{ color: "#7B7B7B", fontWeight: 500 }}
                        >
                          Schedule
                        </span>
                        <span
                          className="text-base font-semibold"
                          style={{ color: "#555555" }}
                        >
                          26 July 8 - 12 am
                        </span>
                      </>
                    ) : null}
                    {currentState === "Completed" && (
                      <div className="flex gap-1">
                        <AppButton
                          label="Review"
                          style={{
                            backgroundColor: "#E6FFED",
                            color: "#00CB56",
                          }}
                        />
                        <AppButton
                          label="Refund"
                          style={{
                            backgroundColor: "transparent",
                            color: "#00CB56",
                          }}
                        />
                      </div>
                    )}
                    {currentState === "Refund" &&
                    item.orderStatus === "Pending" ? (
                      <div>
                        <AppButton
                          label="Cancel Refund"
                          style={{
                            backgroundColor: "transparent",
                            color: "#00CB56",
                          }}
                        />
                      </div>
                    ) : null}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
        <div className="Card">
          <AppPagination
            first={first}
            rows={rows}
            totalRecords={120}
            onPageChange={onPageChange}
            template={customTemplate}
          />
        </div>
      </div>
    </div>
  );
}

export default page;
