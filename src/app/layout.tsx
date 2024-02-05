import type { Metadata } from "next";
import "./globals.css";
import React from "react";

import Navbar from "@/components/Navbar"
import { PortfolioContextProvider } from "@/context/portfolioContext"
//import { Context } from "@/context/Context";

export const metadata: Metadata = {
  title: "Portfolio Aurélia HEYMANN",
  description: "Portfolio CV Developper Web TS",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {

  const links = [
    { name: "My Work", link: "/work" },
    { name: "About Me", link: "/about" },
    { name: "Recommendations", link: "/recommendations" },
    { name: "Contact", link: "/contact" },
  ];


  return (
    <html lang="en">
      <body
        // bg-gradient-to-r 
        // from-indigo-900 
        // via-indigo-400 
        // to-indigo-900 
        className="bg-gradient-radial from-indigo-900 to-indigo-600
        h-screen
        "
      >
        <PortfolioContextProvider>
          <Navbar />
          <div
            // shadow-lg 
            className="
                        relative 
                        px-4 mt-4
                        py-2 sm:py-6 md:py-8 lg:py-12
                        max-w-xl md:max-w-2xl lg:max-w-4xl
                        mx-auto">
            {children}
          </div>
        </PortfolioContextProvider>
      </body>
    </html>
  );
}
