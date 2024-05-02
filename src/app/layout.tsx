//import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { PrimeReactProvider } from 'primereact/api';
import './theme.css'
//import 'primereact/resources/themes/lara-light-green/theme.css';
//import 'primereact/resources/primereact.min.css';
import 'primeicons/primeicons.css';
import 'primeflex/primeflex.css';
import "./globals.css";
import Header from "@/components/common/header/header";
import { SWRProvider } from "./swr-provider";
import { Metadata } from "next";
import { RefToastProvider } from "./toast.wrapper";


const inter = Inter({ subsets: ["latin"] });

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
      <body className={inter.className}>
        <RefToastProvider>
        <SWRProvider>
          <PrimeReactProvider>
            <Header />
            {children}
          </PrimeReactProvider>
        </SWRProvider>
        </RefToastProvider>
      </body>
    </html>
  );
}
