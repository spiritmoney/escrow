import type { Metadata } from "next";
import "./styles/globals.css";
import { Poppins } from "next/font/google"
import { ToastContainer } from "react-toastify";

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
      <body className={poppins.className}>
        {children}
        <div className="z-50"><ToastContainer position="top-right" autoClose={5000} hideProgressBar={false}/>  </div>
      </body>
    </html>
  );
}




// Future_Updates_
// - Custom Popup notifications
// .