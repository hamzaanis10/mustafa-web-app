// components/MyCart.tsx

import React, { useState } from "react";
import CartsListSidebar from "./carts.list.siderbar";
import { Badge } from "primereact/badge";

export default function MyCart(props: any) {
  const { totalCartItems } = props;
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const onHideSidebar = () => {
    setIsOpen(false);
  };
  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  }
  return (
    <>
      <div
        className="flex gap-2 align-items-center cursor-pointer p-3"
        onClick={toggleSidebar}>
        <i className="pi pi-shopping-cart text-base lg:text-3xl p-overlay-badge" style={{ fontSize: '1rem' }}>
          <Badge value={totalCartItems && totalCartItems.get('count')} severity="danger"></Badge>
        </i>
        <span className="pl-3">My Cart</span>
      </div>
      <CartsListSidebar isOpen={isOpen} onHideSidebar={onHideSidebar} />
    </>
  );
};
