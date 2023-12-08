import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/header";
import { ActiveSectionContextProvider } from "@/contexts/active-section-context";
import { Toaster } from "react-hot-toast";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Natalia Ustinova | Frontend Developer",
  description: "Natalia Ustinova is a frontend developer based in Cyprus.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="!scroll-smooth">
      <body
        className={`${inter.className} bg-gray-50 text-gray-950 relative pt-28 sm:pt-36 px-5`}
      >
        <div
          className="bg-[#fbe2e3] -z-10 absolute top-[-6rem] right-[11rem] h-[31.25rem] w-[31.25rem]
      rounded-full blur-[10rem] sm:h-[68.75rem]"
        ></div>
        <div
          className="bg-[#dbd7fb] -z-10 absolute top-[-1rem] left-[-35rem] h-[31.25rem] w-[50rem]
      rounded-full blur-[10rem] sm:h-[68.75rem] md:left-[-33rem] lg:left-[-28rem] xl:left-[-15rem] 2xl:left-[-5rem]"
        ></div>
        <ActiveSectionContextProvider>
          <Header />
          {children}
          <Toaster position="top-right" />
        </ActiveSectionContextProvider>
      </body>
    </html>
  );
}
