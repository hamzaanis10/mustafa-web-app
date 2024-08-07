import React from "react";
import AppDeliveryMethod from "../app.delivery.method/app.delivery.method";
// import { CATEGORY_ORDER_LIST, CATEGORY_ORDER_LIST1 } from "../util/util";

interface AppOrderDetailProps {
  AppDeliveryAddress?: boolean;
}

const AppOrderDetail: React.FC<AppOrderDetailProps> = (props: any) => {
  const { AppDeliveryAddress } = props
  return (
    <div
      className="p-4 bg-white border-round"
      style={{ width: "100%", maxWidth: "800px" }}
    >
      <span className="text-2xl font-semibold ml-2"> Order details</span>
      <div className="flex align-items-center gap-2 p-3">
        <p
          className="m-0 font-semibold  border-round w-full px-2 py-2"
          style={{ backgroundColor: "#E6FFED" }}
        >
          SG Department (2)
        </p>
      </div>
      {/* {CATEGORY_ORDER_LIST1.map((item) => (
        <>
          <div
            key={item.id}
            className="item-container flex justify-content-between"
            style={{ borderBottom: "1px solid #E9E9E9" }}
          >
            <div className="flex align-items-center gap-2 p-3 flex-wrap lg:flex-nowrap">
              <div className="w-3rem lg:w-4rem">
                <img
                  src={`https://primefaces.org/cdn/primereact/images/product/${item.image}`}
                  alt={item.name}
                  className="dark:invert"
                  width={54}
                  height={54}
                />
              </div>
              <div className="w-10rem lg:w-15rem">
                <p className="m-0 font-medium text-sm">{item.name}</p>
                <p
                  className="m-0 text-sm pt-1 pb-1"
                  style={{ color: "#9D9D9D" }}
                >
                  {item.description}
                </p>
                <p className="flex align-items-center gap-2 m-0">
                  <span
                    className="text-xl font-medium"
                    style={{ color: "#009736" }}
                  >
                    ${item.discountedPrice}
                  </span>
                  <span className="text-xs" style={{ color: "#9D9D9D" }}>
                    <del>${item.price}</del>
                  </span>
                </p>
              </div>
            </div>
            <div className="flex align-items-end lg:pl-6  pb-3  bg-white" >
              <span
                style={{ color: "#00CB56" }}
                className=" text-xl m-0"
              >
                X 1
              </span>
            </div>
          </div>

        </>
      ))} */}
      <div className="flex align-items-center gap-2 p-3">
        <p
          className="m-0 font-semibold border-round w-full px-2 py-2"
          style={{ backgroundColor: "#E6FFED" }}
        >
          MY Department (2)
        </p>
      </div>
      {/* {CATEGORY_ORDER_LIST.map((item) => (
        <>
          <div
            key={item.id}
            className="item-container flex justify-content-between"
            style={{ borderBottom: "1px solid #E9E9E9" }}
          >
            <div className="flex align-items-center gap-2 p-3 flex-wrap lg:flex-nowrap">
              <div className="w-3rem lg:w-4rem">
                <img
                  src={`https://primefaces.org/cdn/primereact/images/product/${item.image}`}
                  alt={item.name}
                  className="dark:invert"
                  width={54}
                  height={54}
                />
              </div>
              <div className="w-10rem lg:w-15rem">
                <p className="m-0 font-medium text-sm">{item.name}</p>
                <p
                  className="m-0 text-sm pt-1 pb-1"
                  style={{ color: "#9D9D9D" }}
                >
                  {item.description}
                </p>
                <p className="flex align-items-center gap-2 m-0">
                  <span
                    className="text-xl font-medium"
                    style={{ color: "#009736" }}
                  >
                    ${item.discountedPrice}
                  </span>
                  <span className="text-xs" style={{ color: "#9D9D9D" }}>
                    <del>${item.price}</del>
                  </span>
                </p>
              </div>
            </div>
            <div className="lg:pl-6 pb-3 flex align-items-end bg-white" >
              <span
                style={{ color: "#00CB56" }}
                className="text-xl m-0"
              >
                X 1
              </span>
            </div>
          </div>
        </>
      ))} */}

      {AppDeliveryAddress ? (
        <div className="mt-4">
          <AppDeliveryMethod
            title="Delivery Address"
            label="Standard delivery -"
            description="100% shipping fee off for order over 1000MYR"
            arrivalDate="(Arrives between Saturdays, Jun 24 - Wednesday, Jun 28.)"
          />
        </div>
      ):null}

    </div>
  );
};

export default AppOrderDetail;