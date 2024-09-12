"use client";

import { useState } from "react";
import ProductsTab from "./ProductsTab";
import ServicesTab from "./ServicesTab";


export default function Tabs() {
    const [activeTab, setActiveTab] = useState('products');

    const handleTabClick = (tab: 'products' | 'services') => {
        setActiveTab(tab);
    };
    return (
        <>
            <div className="flex mx-14 mb-4 border-b border-gray-400">
                <button
                    className={`pb-5 pr-5 pl-2 text-2xl font-semibold cursor-pointer ${activeTab === 'products' ? 'text-blue-600 border-b-4 border-blue-600' : 'text-black'}`}
                    onClick={() => handleTabClick('products')}>
                    Products
                </button>
                <button
                    className={`pb-5 pl-2 pr-3 text-2xl font-semibold cursor-pointer ${activeTab === 'services' ? 'text-blue-600 border-b-4 border-blue-600' : 'text-black'}`}
                    onClick={() => handleTabClick('services')}>
                    Services
                </button>

            </div>

            <div>
                {activeTab === 'products' ? <ProductsTab /> : <ServicesTab />}
            </div>
        </>

    );
}