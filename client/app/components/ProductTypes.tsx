"use client";

import { useState } from "react";

export default function ProductTypes() {
    const [selectedOption, setSelectedOption] = useState("All Categories");
    const [isDropdownVisible, setIsDropdownVisible] = useState(false);

    function toggleDropdown() {
        setIsDropdownVisible(!isDropdownVisible);
    }
    function handleSelect(option: string) {
        setSelectedOption(option);
        setIsDropdownVisible(false);
    }

    return (
        <div className="relative inline-block">
            <div className="flex items-center space-x-3">
                <p className="text-gray-600 font-semibold">Category</p>
                <button
                    onClick={toggleDropdown}
                    className="inline-flex items-center justify-center px-4 py-2 text-sm font-medium 
                text-blue-600 bg-white border border-gray-300 rounded-lg hover:bg-gray-100 
                hover:text-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
                    <span className="pr-2">{selectedOption}</span>
                    <img className="border-l border-blue-600 py-1 pl-2" src="/icons/bluearrdown.png" alt="" />
                </button>
            </div>

            {isDropdownVisible && (
                <div>
                    <ul className="absolute right-0 mt-2 w-60 rounded-lg shadow-lg bg-white ring-1 ring-black ring-opacity-5">
                        <li className="border cursor-pointer block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 rounded-t-lg" onClick={() => handleSelect("All Categories")}>
                            All Categories
                        </li>
                        <li className="border cursor-pointer block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100" onClick={() => handleSelect("Gadgets")}>
                            Gadgets
                        </li>
                        <li className="border cursor-pointer block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100" onClick={() => handleSelect("Electronics")}>
                            Electronics
                        </li>
                        <li className="border cursor-pointer block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100" onClick={() => handleSelect("Fashion")}>
                            Fashion
                        </li>
                        <li className="border cursor-pointer block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100" onClick={() => handleSelect("Beauty")}>
                            Beauty
                        </li>
                        <li className="border cursor-pointer block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100" onClick={() => handleSelect("Baby Products")}>
                            Baby Products
                        </li>
                        <li className="border cursor-pointer block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100" onClick={() => handleSelect("Gaming")}>
                            Gaming
                        </li>
                        <li className="border cursor-pointer block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 rounded-b-lg" onClick={() => handleSelect("Appliances")}>
                            Appliances
                        </li>
                    </ul>
                </div>
            )}
        </div>
    );
}