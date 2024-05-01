import { PrimeReactProvider, PrimeReactContext } from "primereact/api";
import "../theme.css";
//import 'primereact/resources/themes/lara-light-green/theme.css';
//import 'primereact/resources/primereact.min.css';
import "primeicons/primeicons.css";
import "primeflex/primeflex.css";
import "../globals.css";
import CategoryMenuItems from "@/components/common/menu.category/menu.catrgory";
import { Metadata } from "next";
// const inter = Inter({ subsets: ["latin"] });

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
      <body >
          <PrimeReactProvider>
            <div className="flex" style={{ backgroundColor: "#F5F5F5" }}>
              <div className="hidden lg:flex w-9 lg:w-3 lg:relative xl:w-3 z-2 menu-container">
                <CategoryMenuItems />
              </div>
              {children}
            </div>
          </PrimeReactProvider>
      </body>
    </html>
  );
}
