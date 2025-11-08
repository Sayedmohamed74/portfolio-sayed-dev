import type { Metadata } from "next";
import { Lato, Orbitron, Saira_Semi_Condensed } from "next/font/google";
import "./globals.css";

import Header from "@/components/Header";
import ThemeToggle from "@/components/BtnDarkMode";
import Footer from "@/components/Footer";

const orbitrin = Orbitron({
  variable: "--font-orbitron",

  weight: ["400", "700", "900"],

  // Add desired weights here
});
const sairaSemi = Saira_Semi_Condensed({
  variable: "--font-sairaSemi",

  weight: ["400", "700", "900"],
  subsets: ["latin"],

  // Add desired weights here
});
export const metadata: Metadata = {
  title: "SAYEDEV",
  description: "This website is my portfolio ,that I can show at my project",
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon.ico",
    
  },
};
export const revalidate = 300;

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" data-scroll-behavior="smooth" data-theme="dark">
      <link rel="icon" href="/favicon.ico" type="image/x-icon" />
      <link rel="shortcut icon" href="/favicon.ico" type="image/x-icon" />

      <body
        className={` ${orbitrin.variable} ${sairaSemi.variable} antialiased`}
      >
        <Header />
        <main>{children}</main>
        <Footer />

        <ThemeToggle />
      </body>
    </html>
  );
}
