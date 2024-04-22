// components/MyCart.tsx

import React from "react";

const MyCart: React.FC = () => {
  return (
    <div className="flex gap-2 align-items-center ">
      <i className="pi pi-shopping-cart text-base lg:text-2xl"></i>
      <span>My Cart</span>
    </div>
  );
};

export default MyCart;
