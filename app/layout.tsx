import type { Metadata } from "next";
import { Geist } from "next/font/google";
import { geistVF } from "./fonts";
import "./globals.css";
import { Toaster } from "@/components/ui/sonner"
import Script from "next/script";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Ghost Wallet",
  description: "Web Based Wallet for your Crypto Accounts",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/favicon_io/favicon.ico" sizes="any" />
        <Script async src="https://www.googletagmanager.com/gtag/js?id=G-ST7N2THFTP"></Script>
        <Script id="google-analytics">
          {`window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', 'G-ST7N2THFTP');`}
        </Script>
      </head>
      <body
        className={`${geistSans.variable} ${geistVF.className} antialiased`}
      >
        {children}
        <Toaster />
      </body>
    </html>
  );
}
