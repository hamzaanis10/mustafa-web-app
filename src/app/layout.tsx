//import type { Metadata } from "next";
"use client"
// import { Inter } from "next/font/google";
import { PrimeReactProvider } from "primereact/api";
import "./theme.css";
import "primeicons/primeicons.css";
import "primeflex/primeflex.css";
import "./globals.css";
import Header from "@/components/common/header/header";
// import { SWRProvider } from "./swr-provider";
// import { Metadata } from "next";
import { RefToastProvider } from "./toast.wrapper";
import AppClient from "./app.client";
import ReduxProvider from "@/store/redux-provider";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { AppDispatch } from "@/store/store";
import { loadUser } from "@/store/reducers/loginSlice";

// const inter = Inter({ subsets: ["latin"] });

// export const metadata: Metadata = {
//   title: "Mustafa App",
//   description: "Mustafa Web app",
// };

const AppInitializer: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const dispatch = useDispatch<AppDispatch>();

  useEffect(() => {
    dispatch(loadUser());
  }, [dispatch]);

  return <>{children}</>;
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <link rel="icon" href="../../../assets/images/must-fav-icon-32-32.png" />
      <link rel="apple" sizes="180x180" href="../../../assets/images/must-fav-icon-180-180.png" />
      <body>
        <ReduxProvider>
        {/* <RefToastProvider> */}
          <AppInitializer>
          {/* <SWRProvider> */}
            <PrimeReactProvider>
              {/* <Header /> */}
              <AppClient />
              {children}
            </PrimeReactProvider>
          {/* </SWRProvider> */}
          </AppInitializer>
        {/* </RefToastProvider> */}
        </ReduxProvider>
      </body>
    </html>
  );
}
