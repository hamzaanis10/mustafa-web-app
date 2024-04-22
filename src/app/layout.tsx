"use client";
//import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { PrimeReactProvider, PrimeReactContext } from 'primereact/api';
import './theme.css'
//import 'primereact/resources/themes/lara-light-green/theme.css';
//import 'primereact/resources/primereact.min.css';
import 'primeicons/primeicons.css';
import 'primeflex/primeflex.css';
import "./globals.css";
import ReduxProvider from "@/store/redux-provider";
import Header from "@/components/common/header/header";

const inter = Inter({ subsets: ["latin"] });

// export const metadata: Metadata = {
//   title: "Create Next App",
//   description: "Generated by create next app",
// };

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <ReduxProvider>
          <PrimeReactProvider>
            <Header />
            {children}
          </PrimeReactProvider>
        </ReduxProvider>
      </body>
    </html>
  );
}
