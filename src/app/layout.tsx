//import type { Metadata } from "next";
// import { Inter } from "next/font/google";
import { PrimeReactProvider } from "primereact/api";
import "./theme.css";
import "primeicons/primeicons.css";
import "primeflex/primeflex.css";
import "./globals.css";
import Header from "@/components/common/header/header";
import { SWRProvider } from "./swr-provider";
import { Metadata } from "next";
import { RefToastProvider } from "./toast.wrapper";
import AppClient from "./app.client";

// const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Mustafa App",
  description: "Mustafa Web app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <link rel="icon" href="../../../assets/images/must-fav-icon-32-32.png" />
      <link
        rel="apple"
        sizes="180x180"
        href="../../../assets/images/must-fav-icon-180-180.png"
      />
      <body>
        <PrimeReactProvider>
          <AppClient />
          {children}
        </PrimeReactProvider>
      </body>
    </html>
  );
}
