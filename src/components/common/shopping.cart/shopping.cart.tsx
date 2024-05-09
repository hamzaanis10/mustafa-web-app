// components/MyCart.tsx

import React, { useState } from "react";
import CartListView from "../app.cart.item/app.cart.item";

const MyCart: React.FC = () => {
  const [visibleRight, setVisibleRight] = useState<boolean>(false);

  const onHideSidebar = () => {
    setVisibleRight(false);
  };

  return (
    <>
      <div
        className="flex gap-2 align-items-center cursor-pointer p-3"
        onClick={() => setVisibleRight(true)}
      >
        <i className="pi pi-shopping-cart text-base lg:text-2xl"></i>
        <span>My Cart</span>
      </div>

      <CartListView visibleRight={visibleRight} onHideSidebar={onHideSidebar} />
    </>
  );
};

export default MyCart;
