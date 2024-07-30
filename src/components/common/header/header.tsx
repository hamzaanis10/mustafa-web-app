"use client";
import { useState } from "react";
import AppSearch from "../app.serach/app.serach";
import MyCart from "../shopping.cart/shopping.cart";
import Image from "next/image";
import UserProfile from "../user.profile/user.profile";
import { Sidebar } from "primereact/sidebar";
import ReduxProvider from "@/store/redux-provider";
import { useTotalCartItems } from "@/app/hooks/fetch/cart";
import Link from "next/link";
import AppCategories from "@/app/((withSidebar))/cmp/c.layout/menu.category/menu.catrgory";

const Header = () => {
  const {
    mutate: totalCartItemsMutate,
    data: totalCartItems,
    isLoading: isLoadingTotalCartItems,
  } = useTotalCartItems();

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
            <AppCategories />
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
          <Link href='/'>
            <Image
              src="/assets/images/must-logo.png"
              alt="Must Logo"
              className="dark:invert"
              width={81}
              height={48}
              priority
            />
          </Link>
        </div>
        <ReduxProvider>
          <div className="flex flex-initial align-items-center pl-2 gap-4 text-sm font-medium lg:flex-order-4 lg:text-base lg:pl-4">
            {/* {totalCartItems && totalCartItems.get("count") > 0 ? (
              <MyCart totalCartItems={totalCartItems} />
            ) : null} */}
             <MyCart totalCartItems={totalCartItems} />
            <UserProfile />
          </div>
        </ReduxProvider>
        <AppSearch />
      </header>
    </>
  );
};
export default Header;
