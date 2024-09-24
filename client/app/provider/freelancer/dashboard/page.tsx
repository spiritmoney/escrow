"use client";

import Footer from '@/app/components/Footer'
import Navbar from '@/app/components/Navbar'
import React, { useState } from 'react'
import Orders, { Analytics, Earnings, Messages, Profile } from '../../components/Freelancernav';
import Link from 'next/link';

const page = () => {

    const [activeTab, setActiveTab] = useState("Orders");

    const handleTabClick = (tab: "Orders" | "Messages" | "Analytics" | "Earnings" | "Profile") => {
        setActiveTab(tab);
    };

    return (
        <div className='w-screen'>
            <Navbar />

            <div className='bg-white w-full flex items-center justify-center'>
                <div className="flex items-center justify-center space-x-20">
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

            <div className="max-w-full px-14 mx-auto mt-4">
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