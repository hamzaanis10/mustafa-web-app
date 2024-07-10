// components/app.cart.item/app.cart.item.tsx

import React from "react";
import { Sidebar } from "primereact/sidebar";
import { Checkbox } from "primereact/checkbox";
import { useState } from "react";
import { CART_LIST_ITEMS, getAllCartProducts } from "../util/util";
import "./carts.list.sidebar.css";
import AppCounterButton from "../app.counter.button/app.counter.button";
import { useCartsList } from "@/app/hooks/fetch/cart";
import CartListItem from "./cart.list.item";
import { useProductDetails } from "@/app/hooks/fetch/products";
import { useSystemConfig } from "@/app/hooks/fetch/app";

const CartsListSidebar: React.FC<any> = (props: any) => {
  const { isOpen } = props;
  const { mutate: cartsMutate, data: userCart, isLoading: isCartsLoading, error: cartsListError } = useCartsList();
  const { data: systemConfig, isLoading: systemConfigLoading } =
  useSystemConfig();
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

  const cartProducts = getAllCartProducts(userCart && userCart.get('packages'));


  return (
    <Sidebar
      visible={isOpen}
      position="right"
      onHide={props.onHideSidebar} // Call parent function to hide the sidebar
      showCloseIcon={false}
      className="w-23rem md:w-30rem"
      id="cart-items">
      <div className="overflow-auto content-container" style={{ height: "80vh" }}>
        {/* <div
          className="flex justify-content-between  p-3 text-sm md:text-base"
          style={{ backgroundColor: "#FFF2E3", color: "#FFAD4C" }}>
          Buy €5.00 more to enjoy FREE Delivery!
          <span className="underline font-semibold text-sm md:text-base">Add more</span>
        </div>
        <div
          className="flex justify-content-between p-3 text-sm md:text-base"
          style={{ backgroundColor: "#E6FFED", color: "#009736" }}>
          Eligible to pick an add-on item
          <span className="underline font-semibold text-sm md:text-base">Pick</span>
        </div> */}
        {
          cartProducts && cartProducts.map((product: any, index: number) => {
            const prod = product && product.get('product');
            const isAvailable = prod && prod.get('available');
            return <CartListItem
              {...props}
              systemConfig={systemConfig}
              key={index}
              isAvailable={isAvailable}
              cartProduct={product}
            //productDetails={productDetails}
            />

          })
        }
      </div>
      <div className="flex p-3 justify-content-between align-items-center fixed bottom-0 w-23rem md:w-29rem">
        <div className="flex flex-column">
          <p className="m-0 pb-2">Total: €999.99</p>
          <p className="m-0" style={{ color: "#FF4C72" }}>
            Saved: €999.99
          </p>
        </div>
        <button className="border-none border-round-3xl pt-3 pr-4 pb-3 pl-4 lg:pt-3 lg:pr-8 lg:pb-3 lg:pl-8 text-1xl text-50" style={{ backgroundColor: "#00CB56" }}>Check Out</button>
      </div>
    </Sidebar>
  );
};

export default CartsListSidebar;
