import React from "react";
import Header from "./components/Header";
import Navbar from "./components/Navbar";
import Tabs from "./components/Tabs";
import Footer from "./components/Footer";

const page = () => {
  return (
    <main className="w-screen h-screen">
      <Navbar />
      <Header />
      <Tabs />
      <Footer />
    </main>
  );
};

export default page;
