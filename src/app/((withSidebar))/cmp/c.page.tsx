"use client";
import ReduxProvider from "@/store/redux-provider";
// import ErrorMessages from "@/components/common/app.alert.messages/error.messages/error.messages";
// import HomeBanner from "@/components/common/home.page.banner/home.page.banner";
// import { isActionLoading } from "@/components/common/util/util";
// import { doLogin } from "@/store/actions/auth.actions";
//import ReduxProvider from "@/store/redux-provider";
import AppHomeBanner from "./c.page/app.home.banner/app.home.banner";
import ProductListing from "./c.page/product.listing/product.listing";
// import { useEffect } from "react";
// import { resetTesting } from "@/store/actions/app.actions";
import { useAppDispatch } from "@/store/store";
// import { doLogin } from "@/store/actions/auth.actions";
// import { useAppDispatch } from "@/store/store";
// import { Skeleton } from "primereact/skeleton";
//import Link from "next/link";

export default function CPage() {
  const dispatch = useAppDispatch();
  const testCall = () => {
    // dispatch(doLogin({
    //   identifier: 'muhammad.hamza501@yahoo.com',
    //   password: 'Tester@2'
    // }))
  }
 

  return (
    <ReduxProvider>
    <div>
      {/* {
          isActionLoading("LOGIN") ?
            <Skeleton size={"20"} height="200px" width="200px" /> : <HomeBanner />
        }
        <ErrorMessages /> */}
      <AppHomeBanner />
      <div className="md:p-5 pt-3 pr-1 pl-4">
        <h1 onClick={testCall} className="text-xl pb-2 md:text-3xl font-medium md:pb-0" style={{ color: "#009736" }}>Trending at the moment</h1>
        <ProductListing />
      </div>
    </div>
    </ReduxProvider>
  );
}
