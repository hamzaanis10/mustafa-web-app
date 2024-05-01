"use client";
import ReduxProvider from "@/store/redux-provider";
import CPage from "./c.page";

export default function CPageMain() {
  return (<ReduxProvider>
      <CPage />
    </ReduxProvider>
  );
}
