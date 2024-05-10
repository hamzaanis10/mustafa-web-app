// components/app.cart.item/app.cart.item.tsx

import React from "react";
import { Sidebar } from "primereact/sidebar";
import { Checkbox } from "primereact/checkbox";
import { useState } from "react";
import { CART_LIST_ITEMS } from "../util/util";
import "./app.cart.item.css";
import AppCounterButton from "../app.counter.button/app.counter.button";

interface CartListViewProps {
  visibleRight: boolean;
  onHideSidebar: () => void; // Callback function to hide the sidebar
}

const CartListView: React.FC<CartListViewProps> = ({
  visibleRight,
  onHideSidebar,
}) => {
  const [checked, setChecked] = useState<boolean>(false);
  const [checkedItems, setCheckedItems] = useState<Set<string>>(new Set());

  const toggleItem = (itemId: string) => {
    const newCheckedItems = new Set(checkedItems);
    if (newCheckedItems.has(itemId)) {
      newCheckedItems.delete(itemId);
    } else {
      newCheckedItems.add(itemId);
    }
    setCheckedItems(newCheckedItems);
  };
  return (
    <Sidebar
      visible={visibleRight}
      position="right"
      onHide={onHideSidebar} // Call parent function to hide the sidebar
      showCloseIcon={false}
      className="w-23rem md:w-30rem"
      id="cart-items"
    >
      <div className="overflow-auto content-container" style={{height:"80vh"}}>
        <div
          className="flex justify-content-between  p-3 text-sm md:text-base"
          style={{ backgroundColor: "#FFF2E3", color: "#FFAD4C" }}
        >
          Buy €5.00 more to enjoy FREE Delivery!
          <span className="underline font-semibold text-sm md:text-base">Add more</span>
        </div>
        <div
          className="flex justify-content-between p-3 text-sm md:text-base"
          style={{ backgroundColor: "#E6FFED", color: "#009736" }}
        >
          Eligible to pick an add-on item
          <span className="underline font-semibold text-sm md:text-base">Pick</span>
        </div>

        <div>
          {CART_LIST_ITEMS.map((item) => (
            <>
              <div
                className="flex align-items-center gap-2 p-3"
                style={{ borderBottom: "1px solid #E9E9E9" }}
              >
                <Checkbox
                  onChange={(e) => setChecked(e.checked)}
                  checked={checked}
                ></Checkbox>{" "}
                <p className="m-0 font-semibold">SG Department (2)</p>
              </div>

              <div
                key={item.id}
                className="item-container"
                style={{ borderBottom: "1px solid #E9E9E9" }}
                
              >
                <div className="flex align-items-center gap-2 p-3 flex-wrap lg:flex-nowrap">
                  <Checkbox
                    onChange={(e) => toggleItem(item.id)}
                    checked={checkedItems.has(item.id)}
                    // className="w-1rem lg:w-2rem"
                    style={{width:"fit-content"}}
                  />
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
                  <AppCounterButton />
                </div>
                <div className="flex align-items-center gap-2 p-3 lg:pl-6 pr-5 pb-3 justify-content-between bg-white" >
                  <p
                    style={{ color: "#5A9429" }}
                    className="border-1 text-xs p-1 pr-3 p-1 pl-3 border-round-lg m-0"
                  >
                    Pick 1 more, get 20% off
                  </p>
                  <p
                    style={{ color: "#4C70FF" }}
                    className="underline text-xs m-0"
                  >
                    View Details
                  </p>
                </div>
              </div>
            </>
          ))}
        </div>
      </div>
      <div className="flex p-3 justify-content-between align-items-center fixed bottom-0 w-23rem md:w-29rem xl:w-3">
        <div className="flex flex-column">
          <p className="m-0 pb-2">Total: €999.99</p>
          <p className="m-0" style={{ color: "#FF4C72" }}>
            Saved: €999.99
          </p>
        </div>
        <button className="border-none border-round-3xl pt-3 pr-4 pb-3 pl-4 lg:pt-3 lg:pr-8 lg:pb-3 lg:pl-8 text-1xl text-50"  style={{backgroundColor:"#00CB56"}}>Check Out</button>
      </div>
    </Sidebar>
  );
};

export default CartListView;
