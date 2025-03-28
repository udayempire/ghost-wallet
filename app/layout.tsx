import type { Metadata } from "next";
import { Geist } from "next/font/google";
import { geistVF } from "./fonts";
import "./globals.css";
import { Toaster } from "@/components/ui/sonner"

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
      <link rel="icon" href="/favicon_io/favicon.ico" sizes="any" />
      <body
        className={`${geistSans.variable} ${geistVF.className} antialiased`}
      >
        {children}
        <Toaster />
      </body>
    </html>
  );
}
