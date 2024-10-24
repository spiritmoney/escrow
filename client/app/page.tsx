import React from "react";
import { GuestHeader } from "./components/Header";
import Footer from "./components/Footer";
import About from "./components/About";

const page = () => {
  return (
    <main className="w-full bg-white">
      <GuestHeader />
      <About />
      <Footer />
    </main>
  );
};

export default page;
