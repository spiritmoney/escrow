"use client";

import { useState } from "react";
import ProductsTab from "./ProductsTab";
import ServicesTab from "./ServicesTab";

export default function Tabs() {
  const [activeTab, setActiveTab] = useState("products");

  const handleTabClick = (tab: "products" | "services") => {
    setActiveTab(tab);
  };

  return (
    <div className="w-full mx-auto px-4 sm:px-6 lg:px-8">
      <div className="relative">

        {/* <div className="absolute inset-x-0 bottom-0 border-b border-gray-400" /> */}

        <div className="relative max-w-[1485px] mx-auto flex">
          <div className="flex">
            <button
              className={`py-2 px-4 text-lg sm:text-xl font-semibold cursor-pointer transition-colors duration-200 ${activeTab === "products"
                  ? "text-blue-600 border-b-2 border-blue-600"
                  : "text-black hover:text-blue-400"
                }`}
              onClick={() => handleTabClick("products")}
            >
              Products
            </button>
            <button
              className={`py-2 px-4 text-lg sm:text-xl font-semibold cursor-pointer transition-colors duration-200 ${activeTab === "services"
                  ? "text-blue-600 border-b-2 border-blue-600"
                  : "text-black hover:text-blue-400"
                }`}
              onClick={() => handleTabClick("services")}
            >
              Services
            </button>
          </div>
        </div>
      </div>

      <div className="w-full mx-auto mt-4">
        {activeTab === "products" ? <ProductsTab /> : <ServicesTab />}
      </div>
    </div>
  );
}
