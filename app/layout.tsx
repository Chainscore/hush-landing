import type { Metadata } from "next";
import { Bricolage_Grotesque, Fragment_Mono, Inter } from "next/font/google";
import "./globals.css";

const bric = Bricolage_Grotesque({
  variable: "--font-bricolage",
  weight: "variable",
  style: "normal",
  subsets: ["latin"],
  axes: ["opsz", "wdth"],
  display: "swap",
});

const fragment = Fragment_Mono({
  variable: "--font-fragment",
  weight: "400",
  style: "normal",
  subsets: ["latin"],
  display: "swap",
});

const inter = Inter({
  variable: "--font-inter",
  weight: "variable",
  style: "normal",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "hush — Confidential execution for open markets",
  description:
    "Hush privately finds competing quotes, sponsors the network fee, and settles directly from your wallet.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${bric.variable} ${fragment.variable} ${inter.variable}`}>{children}</body>
    </html>
  );
}
