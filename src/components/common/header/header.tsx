"use client";
import { useState } from "react";
import SearchInput from "../serach/serach";
import MyCart from "../shopping.cart/shopping.cart";
import Image from "next/image";
import UserProfile from "../user.profile/user.profile";
import CategoryMenuItems from "../menu.category/menu.catrgory";
import { Sidebar } from "primereact/sidebar";

const Header = () => {
  const [isCategoryMenuVisible, setIsCategoryMenuVisible] =
    useState<boolean>(false);


  const customHeader = <p className="font-bold">Categories</p>;

  return (
    <>
      {isCategoryMenuVisible && (
        <div className="fixed z-5 bg-white h-screen card flex justify-content-center">
          <Sidebar
            visible={isCategoryMenuVisible}
            onHide={() => setIsCategoryMenuVisible(false)}
            header={customHeader}
          >
            <CategoryMenuItems />
          </Sidebar>
        </div>
      )}
      
      <header
        className="z-4 sticky top-0 flex flex-wrap align-items-center justify-content-between p-3 lg:flex-nowrap xl:pl-6 xl:pr-6"
        style={{ backgroundColor: "#fff" }}
      >
        <div
          className="pr-3 lg:hidden"
          onClick={() => setIsCategoryMenuVisible(true)}
        >
          <i className="pi pi-bars"></i>
        </div>
        <div className="flex-initial lg:flex-1">
          <Image
            src="/assets/images/must-logo.png"
            alt="Must Logo"
            className="dark:invert"
            width={81}
            height={48}
            priority
          />
        </div>
        <div className="flex flex-initial align-items-center pl-2 gap-4 text-sm font-medium lg:flex-order-4 lg:text-base lg:pl-4">
          <MyCart />
          <UserProfile />
        </div>
        <SearchInput />
      </header>
    </>
  );
};
export default Header;
