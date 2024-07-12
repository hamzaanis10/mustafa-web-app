"use client";
import "./page.css";
import React, {  useState } from "react";
import {  ProductFilter } from "@/components/common/util/util";
import AppButton from "@/components/common/app.button/app.button";
import AppSideBar from "@/components/common/app.sidebar/app.side.bar";
import AppCheckBox from "@/components/common/app.checkbox/app.checkbox";
import ProductListing from "../((withSidebar))/cmp/c.page/product.listing/product.listing";
import ReduxProvider from "@/store/redux-provider";
import AppCategories from "../((withsidebar))/cmp/c.layout/menu.category/menu.catrgory";
import { ScrollTop } from "primereact/scrolltop";
import CategoryListing from "../((withSidebar))/cmp/c.page/category.listing/category.listing";

function page() {
  const [visibleRight, setVisibleRight] = useState<boolean>(false);
  const [checkedItem, setCheckedItem] =useState<{ [key: string]: boolean }>({});
  const [filterCount, setFilterCount] = useState(0);
  
  const handleCheckBoxChange = (key: string, isChecked: boolean) => {
    setCheckedItem(prev => ({
      ...prev,
      [key]: isChecked,
    }));
    setFilterCount(prev => isChecked ? prev + 1 : prev - 1);
  };
  

  return (
    <ReduxProvider>
      <div id="productFilter" className="block md:flex" style={{backgroundColor:"#F5F5F5"}}>
      <div className="hidden lg:flex w-9 lg:w-3 lg:relative z-2 menu-container">
        <AppCategories />
      </div>
    <div className="flex flex-column w-12 sm:w-12 md:w-12 lg:w-9 xl:w-9 p-5">
       <div>
           <CategoryListing/> 
       </div>
      <div className="mainButtonCont" style={{ position: "relative" }}>
        <AppButton
          label="Filter"
          style={{
            backgroundColor: "#fff",
            color: "#000",
            borderRadius: "none",
          }}
          onClick={() => setVisibleRight(true)}
        />
        {
         filterCount > 0 && 
          <span className="badge text-sm text-white pt-1 pb-1 pr-2 pl-2 border-circle">
             {filterCount}
          </span>
        }
      </div>
      <div className="mt-3 flex flex-wrap justify-content-center gap-4">
         <ProductListing/>
      </div>
      <AppSideBar
        visible={visibleRight}
        onHide={() => setVisibleRight(false)}
        position={"right"}
        className="w-18rem"
        id="productFilter"
      >
        <div className="content-container" style={{ height: "100vh" }}>
          {ProductFilter &&
            ProductFilter?.map((data, index) => {
              
              return (
                <>
                  <div
                    key={index}
                    className="p-2 mb-1 "
                    style={{ borderBottom: "1px solid #D9D9D9" }}
                  >
                    <div className="my-2">
                      <span className="text-base font-semibold" style={{color:'#000000'}}>
                        Brand
                      </span>
                    </div>
                    {data &&
                      data.brand.map((item: any, index: any) => {
                        const key = `brand-${index}`;
                        return (
                          <div
                            className="flex align-items-center gap-2 mb-3 "
                            key={index}
                          >
                            <AppCheckBox
                               checked={checkedItem[key] || false}
                               onChange={(e: any) => handleCheckBoxChange(key, e.target.checked)}
                              style={{ borderColor: "#E0E0E0" }}
                            />
                            <span
                              className="pt-2 text-base font-normal"
                              style={{ color: "#434343" }}
                            >
                              {" "}
                              {item.name}{" "}
                            </span>
                            <span className="pt-2" style={{color:'#9D9D9D'}}>
                              ( {item.quantity}){" "}
                            </span>
                          </div>
                        );
                      })}
                  </div>
                  <div className="p-2">
                    <div className="my-2">
                      <span className="text-base font-semibold " style={{color:'#000000'}}>
                      Dietary attributes
                      </span>
                    </div>
                    {data &&
                      data.Dietary_attributes.map((item: any, index: any) => {
                        const key = `Dietary_attributes-${index}`;
                        return (
                          <div
                            className="flex align-items-center gap-2 mb-3 "
                            key={index}
                          >
                            <AppCheckBox
                             checked={checkedItem[key] || false}
                             onChange={(e: any) => handleCheckBoxChange(key, e.target.checked)}
                              style={{ borderColor: "#E0E0E0" }}
                            />
                            <span
                              className="pt-2 text-base font-normal"
                              style={{ color: "#434343" }}
                            >
                              {" "}
                              {item.name}{" "}
                            </span>
                            <span className="pt-2" style={{color:'#9D9D9D'}}>
                              ( {item.quantity}){" "}
                            </span>
                          </div>
                        );
                      })}
                  </div>
                </>
              );
            })}
        </div>
      </AppSideBar>
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
    </ReduxProvider>
  );
}

export default page;
