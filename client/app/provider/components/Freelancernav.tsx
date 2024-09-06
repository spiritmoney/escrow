"use client";

import Rating from '@/app/components/Rating';
import { services } from '@/app/data/Service';
import React, { useState } from 'react'
import NewOrders, { Active, Cancelled, Completed } from './OrdersTabs';

export default function Orders() {
    const [activeTab, setActiveTab] = useState("New Orders");

    const handleTabClick = (tab: "New Orders" | "Active" | "Completed" | "Cancelled") => {
        setActiveTab(tab);
    };
    return (
        <div className='w-full'>
            <h1 className='w-11/12 mx-auto text-black text-3xl py-3 font-semibold'>Orders</h1>

            <div className="w-11/12 flex items-center mx-auto border-b border-gray-400">
                <button
                    className={`w-1/4 py-2 px-4 text-lg font-semibold cursor-pointer transition-colors duration-200 ${activeTab === "New Orders"
                            ? "text-black border-b-2 border-blue-600"
                            : "text-gray-400 hover:text-blue-400"
                        }`}
                    onClick={() => handleTabClick("New Orders")}
                >
                    New Orders
                    <span className={`ml-2 text-white px-2 rounded-full 
                        ${activeTab === "New Orders" ? "bg-blue-600" : "bg-gray-400"}`}>
                            7
                    </span>
                </button>
                <button
                    className={`w-1/4 py-2 px-4 text-lg font-semibold cursor-pointer transition-colors duration-200 ${activeTab === "Active"
                            ? "text-black border-b-2 border-blue-600"
                            : "text-gray-400 hover:text-blue-400"
                        }`}
                    onClick={() => handleTabClick("Active")}
                >
                    Active
                    <span className={`ml-2 text-white px-2 rounded-full 
                        ${activeTab === "Active" ? "bg-blue-600" : "bg-gray-400"}`}>
                            3
                    </span>
                </button>
                <button
                    className={`w-1/4 py-2 px-4 text-lg font-semibold cursor-pointer transition-colors duration-200 ${activeTab === "Completed"
                            ? "text-black border-b-2 border-blue-600"
                            : "text-gray-400 hover:text-blue-400"
                        }`}
                    onClick={() => handleTabClick("Completed")}
                >
                    Completed
                    <span className={`ml-2 text-white px-2 rounded-full 
                        ${activeTab === "Completed" ? "bg-blue-600" : "bg-gray-400"}`}>
                            5
                    </span>
                </button>
                <button
                    className={`w-1/4 py-2 px-4 text-lg font-semibold cursor-pointer transition-colors duration-200 ${activeTab === "Cancelled"
                            ? "text-black border-b-2 border-blue-600"
                            : "text-gray-400 hover:text-blue-400"
                        }`}
                    onClick={() => handleTabClick("Cancelled")}
                >
                    Cancelled
                    <span className={`ml-2 text-white px-2 rounded-full 
                        ${activeTab === "Cancelled" ? "bg-blue-600" : "bg-gray-400"}`}>
                            4
                    </span>
                </button>
            </div>

            <div className="w-11/12 mx-auto mt-4">
                {activeTab === "New Orders" && <NewOrders />}
                {activeTab === "Active" && <Active />}
                {activeTab === "Completed" && <Completed />}
                {activeTab === "Cancelled" && <Cancelled />}
            </div>

        </div>
    )
}

export function Messages() {
    return (
        <div className='w-full'>
            <h1 className='text-black text-2xl font-semibold'>Messages</h1>

            <div className='w-full flex items-center justify-center'>
                <img src="/images/coming-soon.png" alt="" className='w-96 h-96' />
            </div>
        </div>
    )
}

export function Analytics() {
    return (
        <div className='w-full'>
            <h1 className='text-black text-2xl font-semibold'>Analytics</h1>

            <div className='w-full flex items-center justify-center'>
                <img src="/images/coming-soon.png" alt="" className='w-96 h-96' />
            </div>

        </div>
    )
}

export function Earnings() {
    return (
        <div className='w-full'>
            <h1 className='text-black text-2xl font-semibold'>Earnings</h1>

            <div className='w-full flex items-center justify-center'>
                <img src="/images/coming-soon.png" alt="" className='w-96 h-96' />
            </div>
        </div>
    )
}

export function Profile({ params }: { params: { id: string } }) {
    const serviceId = params.id;
    const service = services.find((s) => s.id === parseInt(serviceId));

    if (!service) {
        return <div>Service not found</div>;
    }
    return (
        <div className='w-full '>
            <h1 className='text-black text-3xl py-3 font-semibold'>Profile</h1>
            <div className="container bg-white rounded-xl mt-10 mx-auto w-full text-black">
                <div className="relative bg-white w-full p-7 rounded-xl flex items-center space-x-8">
                    <div className='relative flex items-center justify-center w-32 h-w-32'>
                        <img src={service.src} alt={service.name} className="rounded-full w-28 h-28" />
                        <label htmlFor="profile-edit">
                            <img src="/icons/changedp.png" alt="" className='absolute bottom-0 right-0 w-12 h-w-12 cursor-pointer' />
                        </label>
                        <input className='hidden' type="file" id="profile-edit" accept="image/*" />
                    </div>

                    <div className='flex flex-col items-start justify-center h-36'>
                        <h2 className="text-sm font-semibold">{service.name}</h2>
                        <p className="text-black text-2xl font-medium">{service.service}</p>
                        <span className='flex items-center py-2 space-x-1'>
                            <img src="/icons/location2.png" alt="" width={15} />
                            <p>Nigeria</p>
                        </span>
                        <Rating />
                    </div>
                    <div className='absolute top-5 right-10'>
                        <button className="m-6 px-6 py-2 mx-auto w-40 bg-blue-700 flex items-center text-white rounded-lg">
                            <img src="/icons/edit.png" alt="" />
                            Edit Profile
                        </button>
                    </div>
                </div>

                <div className='px-7 mb-7'>
                    <div className="flex space-x-2 mt-2">
                        {service.tags.map((tag, index) => (
                            <span key={index} className="text-sm bg-gray-200 px-2 py-1 rounded-2xl">{tag}</span>
                        ))}
                    </div>
                    <p className="text-blue-600 font-semibold text-xl mt-3">{service.rate} /hr</p>
                </div>

                <p className='px-7'>Lorem ipsum dolor sit amet consectetur. Pellentesque mattis facilisis id porttitor tincidunt. Parturient praesent velit amet sed dapibus. Commodo nunc fermentum sit eget. Leo nunc tempus pellentesque pharetra porttitor et eget quisque. Egestas non bibendum cras pharetra lacinia in dis posuere at. Ultrices in nibh cursus scelerisque dui quisque felis. Et enim nisl velit mattis cum cursus. Tristique aliquam enim ac ipsum pulvinar mi purus. Dignissim suspendisse quisque arcu turpis a tempus vel dictum. Amet pellentesque nisl amet platea malesuada. Vitae habitant tortor auctor fringilla mattis. Cras nullam mattis volutpat nibh tortor risus purus. Sed rhoncus sagittis iaculis viverra tortor velit adipiscing metus ornare. Nisi ultrices nulla orci sed mi ultrices. Sed sed viverra a scelerisque pretium cursus nibh. Maecenas nunc sagittis malesuada elementum mi quam massa feugiat. Nulla quis leo purus nibh sit ac sed est. Fermentum ut blandit faucibus ligula mauris est lacus eget tincidunt. Nibh diam pharetra ornare egestas duis lacus id vitae lectus. Imperdiet in semper rutrum volutpat pharetra. Ultrices at in mi ut tincidunt. Egestas morbi lectus fusce leo. Dignissim consequat diam mi malesuada scelerisque. Sollicitudin gravida neque consectetur tincidunt tristique et dictum nunc. Pharetra amet suscipit purus eu. Pellentesque nisl velit eget condimentum facilisi nullam in volutpat. In porta suspendisse semper amet etiam vitae. Sed sit est at feugiat mi consectetur</p>

                <p className='p-7'>mi purus at. Nunc faucibus malesuada nunc ac. In faucibus aenean elementum vitae lobortis diam. Sapien nulla senectus vitae enim pellentesque consequat in tortor ut. Nec orci interdum aliquam pellentesque amet sed praesent euismod. Et id a aliquet est turpis. Sapien pulvinar etiam semper et tincidunt semper aliquet sed. Eget eu nibh nulla sapien tortor. Magna ut lacinia arcu maecenas nec mollis. Nulla erat nunc diam proin. Rhoncus erat vitae molestie tempor vitae ipsum est non est. Neque curabitur imperdiet congue vitae mattis. Donec eget bibendum fames odio velit ut in vel leo. Volutpat vestibulum imperdiet risus etiam at sed at morbi. Duis potenti hac aliquet aliquam mauris netus facilisi sed. At morbi sit lorem diam hendrerit ac odio sit. Aliquam nisl laoreet nisi ultrices massa rhoncus faucibus. Mattis eu vel at nulla suscipit at nec sed purus. Vel iaculis massa volutpat suspendisse massa purus amet. Integer sit ut velit id in diam in pulvinar posuere. Sit lacinia consectetur volutpat nunc. Leo pharetra lacinia auctor orci nibh massa nisi sem cursus. Cursus vitae commodo eget dolor in neque. Velit netus etiam diam eget.</p>

                {/* Projects Section */}
                <div className="p-6">
                    <h3 className="text-xl font-semibold">PROJECTS</h3>
                    <div className="grid grid-cols-5 gap-4 mt-4">
                        {service.projects.map((project, index) => (
                            <div key={index} className="bg-gray-100 p-4 rounded-lg shadow">
                                <img src="/images/portfolio.png" alt={project.name} />
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div >
    )
}