import type { Metadata } from "next";
import localFont from "next/font/local";
import "./styles/globals.css";
import { Poppins } from "next/font/google"
import Navbar from './components/Navbar';
import Header from "./components/Header";
import Tabs from "./components/Tabs";
import Footer from "./components/Footer";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

// const geistSans = localFont({
//   src: "./fonts/GeistVF.woff",
//   variable: "--font-geist-sans",
//   weight: "100 900",
// });
// const geistMono = localFont({
//   src: "./fonts/GeistMonoVF.woff",
//   variable: "--font-geist-mono",
//   weight: "100 900",
// });

export const metadata: Metadata = {
  title: "Escrow",
  description: "Created by Debug",
  icons: {
    icon: '/icons/favicon.ico',
  }
};



export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={poppins.className}>{children}</body>
    </html>
  );
}




// Updates_ Features
// - Search Results page
// - Navbar Dropdowns
// - Connect Wallet popup
// .