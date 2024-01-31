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
      <body className="
        bg-gradient-to-bl 
        from-indigo-900 
        via-indigo-400 
        to-indigo-900 
        text-yellow-500
        h-screen
        "
      >
        <PortfolioContextProvider>
          <Navbar />
          <div className="flex flex-col justify-center text-indigo-600 mt-16"
          // min-h-[90vh]
          // sm:min-h-screen
          >
            <div className="
                    relative 
                    sm:mx-auto
                    sm:w-full 
                    sm:max-w-4xl 
                "
            >
              {/* A voir si mieux ORANGE ou BLEU ??? et ROTATE 6 ou 12 ??? */}
              {/* inset-0 définit top, right, bottom, et left à 0. */}
              <div className="absolute inset-0 bg-gradient-to-r from-yellow-400 to-orange-500 shadow-lg transform -skew-y-6 sm:skew-y-0 sm:rotate-6 sm:rounded-3xl sm:p-12 max-w-xl md:max-w-2xl lg:max-w-4xl mx-auto"></div>
              {/* <div className="absolute inset-0 bg-gradient-to-r from-blue-300 to-blue-400 shadow-lg transform -skew-y-6 sm:skew-y-0 sm:rotate-6 sm:rounded-3xl"></div> */}
              {/* <div className="absolute inset-0 bg-gradient-to-r from-blue-200 to-blue-300 shadow-lg transform -skew-y-6 sm:skew-y-0 sm:rotate-6 sm:rounded-3xl"></div> */}
              <div
                // shadow-lg 
                className="
                        relative 
                        px-4
                        py-10 
                        bg-white
                        sm:rounded-3xl sm:p-12 lg:px-32 lg:py-24
                        max-w-xl md:max-w-2xl lg:max-w-4xl
                        mx-auto">
                {/* <div className="relative px-4 py-10 bg-white shadow-lg sm:rounded-3xl sm:p-12"> */}
                {/* <div className="max-w-xl mx-auto"> */}
                {children}
              </div>
            </div>
          </div>
        </PortfolioContextProvider>
      </body>
    </html>
  );
}
