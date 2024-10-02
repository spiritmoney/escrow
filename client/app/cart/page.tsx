"use client";

import { useState } from "react";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import ProductsCart, { Negotiations, ServicesCart } from "../components/CartTabs";

export default function page() {

    const [activeTab, setActiveTab] = useState("products");

    const handleTabClick = (tab: "products" | "services" | "negotiations") => {
        setActiveTab(tab);
    };

    return (
        <>
            <Navbar />
            <div className="w-11/12 mx-auto">

                <h1 className="text-black text-2xl py-5 font-medium">My Cart</h1>

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
                        <button
                            className={`py-2 px-4 text-lg sm:text-xl font-semibold cursor-pointer transition-colors duration-200 ${activeTab === "negotiations"
                                ? "text-blue-600 border-b-2 border-blue-600"
                                : "text-black hover:text-blue-400"
                                }`}
                            onClick={() => handleTabClick("negotiations")}
                        >
                            Negotiations
                        </button>
                    </div>
                </div>

                <div className="mx-auto mt-4">
                    {activeTab === "products" && <ProductsCart />}
                    {activeTab === "services" && <ServicesCart />}
                    {activeTab === "negotiations" && <Negotiations />}
                </div>

            </div>
            <Footer />
        </>
    );
}