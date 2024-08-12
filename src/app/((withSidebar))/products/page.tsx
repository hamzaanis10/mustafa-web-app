"use client";
import React from "react";
import { authSelector } from "@/store/selectors/auth.selectors";

const Page = () => {
//  const authState = authSelector();
  return (
    <>
    <div className="flex gap border border-1 border-black p-20">
      {/* You are now {authState ? "Logged  In" : "Logged Out"} */}
    </div>
    </>
  );
};
export default Page;