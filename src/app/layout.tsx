import type { Metadata } from "next";
import "./globals.css";

import Navbar from "@/components/Navbar"

export const metadata: Metadata = {
  title: "Portfolio Aurélia HEYMANN",
  description: "Portfolio CV Developper Web TS",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className="
        bg-gradient-to-bl 
        from-indigo-900 
        via-indigo-400 
        to-indigo-900 
        text-yellow-500
        h-[500px]
        "
      >
        <Navbar />
        {children}
        </body>
    </html>
  );
}
