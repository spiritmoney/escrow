"use client";

import { useState } from "react";

export default function ServiceTypes() {
    const [selectedOption, setSelectedOption] = useState("All Services");
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
                    {/* <span className="ml-2">&#x25BC;</span> */}
                    <img className="border-l border-blue-600 py-1 pl-2" src="/icons/bluearrdown.png" alt="" />
                </button>
            </div>

            {isDropdownVisible && (
                <div> 
                    <ul className="absolute right-0 mt-2 w-60 rounded-lg shadow-lg bg-white ring-1 ring-black ring-opacity-5">
                        <li className="border cursor-pointer block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 rounded-t-lg" onClick={() => handleSelect("All Services")}>
                            All Services
                        </li>
                        <li className="border cursor-pointer block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100" onClick={() => handleSelect("Programming")}>
                            Programming
                        </li>
                        <li className="border cursor-pointer block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100" onClick={() => handleSelect("Graphic Design")}>
                            Graphic Design
                        </li>
                        <li className="border cursor-pointer block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100" onClick={() => handleSelect("Digital Marketing")}>
                            Digital Marketing
                        </li>
                        <li className="border cursor-pointer block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100" onClick={() => handleSelect("Video Animation")}>
                            Video Animation
                        </li>
                        <li className="border cursor-pointer block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100" onClick={() => handleSelect("Social Media Marketing")}>
                            Social Media Marketing
                        </li>
                        <li className="border cursor-pointer block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100" onClick={() => handleSelect("SEO")}>
                            SEO
                        </li>
                        <li className="border cursor-pointer block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 rounded-b-lg" onClick={() => handleSelect("Web Development")}>
                            Web Development
                        </li>
                    </ul>
                </div>
            )}
        </div>
    );
}