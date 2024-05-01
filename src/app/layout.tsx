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

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Mustafa Web App",
  description: "Mustafa Web App",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <SWRProvider>
          <PrimeReactProvider>
            <Header />
            {children}
          </PrimeReactProvider>
        </SWRProvider>
      </body>
    </html>
  );
}
