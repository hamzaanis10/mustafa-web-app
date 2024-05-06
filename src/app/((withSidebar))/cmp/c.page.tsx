"use client";
import { PRODUCTS_PAGE_SIZE } from "@/components/common/util/util";
// import ErrorMessages from "@/components/common/app.alert.messages/error.messages/error.messages";
// import HomeBanner from "@/components/common/home.page.banner/home.page.banner";
// import { isActionLoading } from "@/components/common/util/util";
// import { doLogin } from "@/store/actions/auth.actions";
//import ReduxProvider from "@/store/redux-provider";
import AppHomeBanner from "./c.page/app.home.banner/app.home.banner";
import { useProductList } from "@/app/hooks/fetch/products";
// import { useAppDispatch } from "@/store/store";
// import { Skeleton } from "primereact/skeleton";
//import Link from "next/link";

export default function CPage() {
  // const dispatch = useAppDispatch();
  const testCall = () => {
    // dispatch(doLogin({
    //   identifier: 'muhammad.hamza501@yahoo.com',
    //   password: 'Tester@2'
    // }))
  }
  const {
    mutate,
    data: products,
    isLoading: productsLoading,
    error,
  } = useProductList({
    page: 0,
    size: PRODUCTS_PAGE_SIZE,
    sortBy: "total_sale_count",
    sortDir: "desc",
    // sortBy2: "",
    // sortDir2: "",
    // keyword: "",
    //categoryId: "",
    categoryIds: [],// TODO to be user selec4ed cateogories
  });

  return (
    // <ReduxProvider>
    <div>
      {/* {
          isActionLoading("LOGIN") ?
            <Skeleton size={"20"} height="200px" width="200px" /> : <HomeBanner />
        }
        <ErrorMessages /> */}
      <AppHomeBanner />
      <div className="p-5">
        <h1
          onClick={testCall}
        >
          Trending at the moment
        </h1>
      </div>
    </div>
    //</ReduxProvider>
  );
}
