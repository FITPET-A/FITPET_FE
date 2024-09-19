import Providers from "@utils/Providers";
import "@styles/globals.css";
import type { Metadata } from "next";
import React from "react";
import Header from "@components/Header";
import Footer from "@components/Footer";
import FloatingButton from "@components/FloatingButton";
import localFont from "next/font/local";

export const metadata: Metadata = {
  title: "스마트커버인슈어런스",
  description: "1분만에 신청하는 펫보험 비교 견적서",
};

const pretendard = localFont({
  src: "../public/font/PretendardVariable.woff2",
  display: "swap",
  weight: "45 920",
  variable: "--font-pretendard",
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${pretendard.variable}`}>
      <head>
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/favicon-32x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/favicon-16x16.png"
        />
        <meta
          httpEquiv="Content-Security-Policy"
          content="upgrade-insecure-requests"
        />
      </head>
      <body className="min-w-[390px] font-pretendard font-medium desktop:min-w-[1080px]">
        <Providers>
          <Header />
          {children}
          <Footer />
          <FloatingButton />
        </Providers>
      </body>
    </html>
  );
}
