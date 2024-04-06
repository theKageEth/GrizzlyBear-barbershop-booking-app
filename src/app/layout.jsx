import { Inter } from "next/font/google";
import "./globals.css";
import UIProvider from "@/components/providers/UIProvider";

import Footer from "@/components/layout/Footer";
import NavbarComponent from "@/components/layout/NavbarComponent";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "GrizzlyBeard",
  description: "Best barber shop in Birmingham book now",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="dark">
      <body className={inter.className}>
        <UIProvider>
          <NavbarComponent />
          {children}
          <Footer />
        </UIProvider>
      </body>
    </html>
  );
}
