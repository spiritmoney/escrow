"use client";

import Footer from '@/app/components/Footer'
import Navbar from '@/app/components/Navbar'
import React, { useState } from 'react'
import Orders, { Analytics, Earnings, Messages, Profile } from '../../components/Freelancernav';
import Link from 'next/link';

const page = () => {

    const [activeTab, setActiveTab] = useState("Orders");
    const [hamburgerMenu, setHamburgerMenu] = useState(false);

    function toggleMenu() {
      setHamburgerMenu(!hamburgerMenu);
    }

    const handleTabClick = (tab: "Orders" | "Messages" | "Analytics" | "Earnings" | "Profile") => {
        setActiveTab(tab);
    };

    return (
        <div className='w-screen'>
            <Navbar />

            <div className='relative bg-white w-full h-20 flex items-center justify-center'>
                <button onClick={toggleMenu} className='absolute left-3 lg:hidden'>
                    <img src="/icons/menu.png" alt="" className='w-8' />
                </button>

                {/* Hamburger Menu */}
                <div className={`absolute top-1 left-0 w-72 h-screen bg-white p-4 z-50 transform transition-transform duration-300 ease-in-out ${hamburgerMenu ? 'translate-x-0' : '-translate-x-full'}`}>
                    <ul>
                        <li onClick={toggleMenu} className='w-full flex items-end justify-end'>
                            <p className='text-3xl text-blue-600 text-center font-semibold cursor-pointer bg-blue-100 border px-3 py-1 w-12 rounded-lg'>&times;</p>
                        </li>
                        <li onClick={toggleMenu} className='py-2'>
                            <Link href={'/'}>
                                <button
                                    className="py-2 px-4 m-1 rounded-lg text-lg sm:text-xl font-semibold cursor-pointer text-white bg-blue-600"
                                // onClick={() => handleTabClick("home")}
                                >
                                    Home
                                </button>
                            </Link>
                        </li>
                        <li onClick={toggleMenu} className='py-2 border-b'>
                            <button
                                className={`py-2 px-4 text-lg sm:text-xl font-semibold cursor-pointer transition-colors duration-200 ${activeTab === "Orders"
                                    ? "text-blue-600"
                                    : "text-gray-600 hover:text-blue-400"
                                    }`}
                                onClick={() => handleTabClick("Orders")}
                            >
                                Orders
                            </button>
                        </li>
                        <li onClick={toggleMenu} className='py-2 border-b'>
                            <button
                                className={`py-2 px-4 text-lg sm:text-xl font-semibold cursor-pointer transition-colors duration-200 ${activeTab === "Messages"
                                    ? "text-blue-600"
                                    : "text-gray-600 hover:text-blue-400"
                                    }`}
                                onClick={() => handleTabClick("Messages")}
                            >
                                Messages
                            </button>
                        </li>
                        {/* <li onClick={toggleMenu} className='py-2 border-b'>
                            <button
                                className={`py-2 px-4 text-lg sm:text-xl font-semibold cursor-pointer transition-colors duration-200 ${activeTab === "Analytics"
                                    ? "text-blue-600"
                                    : "text-gray-600 hover:text-blue-400"
                                    }`}
                                onClick={() => handleTabClick("Analytics")}
                            >
                                Analytics
                            </button>
                        </li> */}
                        <li onClick={toggleMenu} className='py-2 border-b'>
                            <button
                                className={`py-2 px-4 text-lg sm:text-xl font-semibold cursor-pointer transition-colors duration-200 ${activeTab === "Earnings"
                                    ? "text-blue-600"
                                    : "text-gray-600 hover:text-blue-400"
                                    }`}
                                onClick={() => handleTabClick("Earnings")}
                            >
                                Earnings
                            </button>
                        </li>
                        <li onClick={toggleMenu} className='py-2'>
                            <button
                                className={`py-2 px-4 text-lg sm:text-xl font-semibold cursor-pointer transition-colors duration-200 ${activeTab === "Profile"
                                    ? "text-blue-600"
                                    : "text-gray-600 hover:text-blue-400"
                                    }`}
                                onClick={() => handleTabClick("Profile")}
                            >
                                Profile
                            </button>
                        </li>
                    </ul>
                </div>

                <div className="hidden lg:flex items-center justify-center space-x-20">
                    <Link href={'/'}>
                        <button
                            className="py-2 px-4 m-1 rounded-lg text-lg sm:text-xl font-semibold cursor-pointer text-white bg-blue-600"
                        // onClick={() => handleTabClick("home")}
                        >
                            Home
                        </button>
                    </Link>
                    <button
                        className={`py-2 px-4 text-lg sm:text-xl font-semibold cursor-pointer transition-colors duration-200 ${activeTab === "Orders"
                                ? "text-blue-600"
                                : "text-black hover:text-blue-400"
                            }`}
                        onClick={() => handleTabClick("Orders")}
                    >
                        Orders
                    </button>
                    <button
                        className={`py-2 px-4 text-lg sm:text-xl font-semibold cursor-pointer transition-colors duration-200 ${activeTab === "Messages"
                                ? "text-blue-600"
                                : "text-black hover:text-blue-400"
                            }`}
                        onClick={() => handleTabClick("Messages")}
                    >
                        Messages
                    </button>
                    <button
                        className={`py-2 px-4 text-lg sm:text-xl font-semibold cursor-pointer transition-colors duration-200 ${activeTab === "Analytics"
                                ? "text-blue-600"
                                : "text-black hover:text-blue-400"
                            }`}
                        onClick={() => handleTabClick("Analytics")}
                    >
                        Analytics
                    </button>
                    <button
                        className={`py-2 px-4 text-lg sm:text-xl font-semibold cursor-pointer transition-colors duration-200 ${activeTab === "Earnings"
                                ? "text-blue-600"
                                : "text-black hover:text-blue-400"
                            }`}
                        onClick={() => handleTabClick("Earnings")}
                    >
                        Earnings
                    </button>
                    <button
                        className={`py-2 px-4 text-lg sm:text-xl font-semibold cursor-pointer transition-colors duration-200 ${activeTab === "Profile"
                                ? "text-blue-600"
                                : "text-black hover:text-blue-400"
                            }`}
                        onClick={() => handleTabClick("Profile")}
                    >
                        Profile
                    </button>
                </div>
            </div>

            <div className="w-11/12 md:w-full md:px-8 mx-auto mt-4">
                {activeTab === "Orders" && <Orders />}
                {activeTab === "Messages" && <Messages />}
                {activeTab === "Analytics" && <Analytics />}
                {activeTab === "Earnings" && <Earnings />}
                {activeTab === "Profile" && <Profile params={{
                    id: '1'
                }} />}
            </div>


            <Footer />
        </div>
    );
}

export default page