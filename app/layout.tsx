import type { Metadata } from "next";
import { Courier_Prime, DM_Serif_Display } from "next/font/google";
import "./globals.css";
import Header from "./components/Header"

const courier_prime = Courier_Prime({ weight: ["400", "700"], subsets: ["latin"], display: "swap" });
const dm_serif_display = DM_Serif_Display({weight: "400", subsets: ["latin"]})

export const metadata: Metadata = {
  title: "the dak0k0 chronicles",
  description: "indomie mi goreng appreciator",
  
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={courier_prime.className}>
        <Header />
        {children}
      </body>
    </html>
  );
}
