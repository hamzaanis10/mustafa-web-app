"use client";

import ErrorMessages from "@/components/common/app.alert.messages/error.messages/error.messages";
import HomeBanner from "@/components/common/home.page.banner/home.page.banner";
import { isActionLoading } from "@/components/common/util/util";
import { doLogin } from "@/store/actions/auth.actions";
import { useAppDispatch } from "@/store/store";
import { Skeleton } from "primereact/skeleton";

export default function Home() {
  const dispatch = useAppDispatch();
  const testCall = () => {
    dispatch(doLogin({
      identifier: 'muhammad.hamza501@yahoo.com',
      password: 'Tester@2'
    }))
  }
  return (
    <main className="lg:w-9 xl:w-10">
      {
        isActionLoading("LOGIN") ?
        <Skeleton size={"20"} height="200px" width="200px" /> :   <HomeBanner />
      }
      <ErrorMessages />
      <div className="p-5">
        <h1 onClick={testCall}>Trending at the moment</h1>
      </div>
    </main>
  );
}
