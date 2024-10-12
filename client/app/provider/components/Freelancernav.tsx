"use client";

import Rating from '@/app/components/Rating';
import { services } from '@/app/data/Service';
import React, { useState } from 'react'
import NewOrders, { Active, Cancelled, Completed } from './OrdersTabs';
import { EditFreelancer } from './editProfile';

export default function Orders() {
    const [activeTab, setActiveTab] = useState("New Orders");

    const handleTabClick = (tab: "New Orders" | "Active" | "Completed" | "Cancelled") => {
        setActiveTab(tab);
    };
    return (
        <div className='w-full'>
            <h1 className='w-11/12 mx-auto text-black text-3xl py-3 font-semibold'>Orders</h1>

            <div className="mx-4 md:w-11/12 h-14 flex items-center md:mx-auto border-b border-gray-400 overflow-scroll"
                style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}>

                <button
                    className={`w-40 md:w-1/4 h-full py-2 px-4 text-sm flex items-center text-left md:text-lg font-semibold cursor-pointer transition-colors duration-200 ${activeTab === "New Orders"
                        ? "text-black border-b-2 border-blue-600"
                        : "text-gray-400 hover:text-blue-400"
                        }`}
                    onClick={() => handleTabClick("New Orders")}
                >
                    <p className='w-24 md:w-28'>New Orders</p>
                    <span className={`text-white px-2 rounded-full 
                        ${activeTab === "New Orders" ? "bg-blue-600" : "bg-gray-400"}`}>
                        7
                    </span>
                </button>
                <button
                    className={`w-36 md:w-1/4 h-full py-2 px-4 text-sm md:text-lg font-semibold cursor-pointer transition-colors duration-200 ${activeTab === "Active"
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
                    className={`w-36 md:w-1/4 h-full py-2 px-4 text-sm md:text-lg font-semibold cursor-pointer transition-colors duration-200 ${activeTab === "Completed"
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
                    className={`w-36 md:w-1/4 h-full py-2 px-4 text-sm md:text-lg font-semibold cursor-pointer transition-colors duration-200 ${activeTab === "Cancelled"
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
            <h1 className='text-black text-2xl font-semibold'>My Messages</h1>

            <a href="">
                <div className='w-[320px] md:w-[500px] bg-white mx-auto p-10 my-16 flex flex-col items-center justify-center rounded-2xl shadow-lg'>
                    <img src="/icons/comingsoon.png" alt="" className='w-52' />
                    <p className='text-black text-2xl'>Coming Soon!</p>
                    <button className='bg-blue-600 text-white w-full text-center p-2 my-7 rounded-lg'>
                        Back
                    </button>
                </div>
            </a>
        </div>
    )
}

export function Analytics() {

    return (
        <div className='w-full '>
            <h1 className='text-black text-2xl font-semibold'>Analytics</h1>

            <div className='w-[320px] md:w-[500px] bg-white mx-auto p-10 my-16 flex flex-col items-center justify-center rounded-2xl shadow-lg'>
                <img src="/icons/comingsoon.png" alt="" className='w-52' />
                <p className='text-black text-2xl'>Coming Soon!</p>
                <button className='bg-blue-600 text-white w-full text-center p-2 my-7 rounded-lg'>
                    Back
                </button>
            </div>

        </div>
    )
}

export function Earnings() {
    return (
        <div className='w-full'>
            <h1 className='text-black text-2xl font-semibold'>Earnings</h1>

            <a href="">
                <div className='w-[320px] md:w-[500px] bg-white mx-auto p-10 my-16 flex flex-col items-center justify-center rounded-2xl shadow-lg'>
                    <img src="/icons/comingsoon.png" alt="" className='w-52' />
                    <p className='text-black text-2xl'>Coming Soon!</p>
                    <button className='bg-blue-600 text-white w-full text-center p-2 my-7 rounded-lg'>
                        Back
                    </button>
                </div>
            </a>
        </div>
    )
}

export function Profile({ params }: { params: { id: string } }) {
    const serviceId = params.id;
    const service = services.find((s) => s.id === parseInt(serviceId));
    const [editProfile, setEditProfile] = useState(false);


    if (!service) {
        return <div>Service not found</div>;
    }

    function toggleEdit() {
        setEditProfile(!editProfile);
    }

    return (
        <div className='w-full relative'>
            {editProfile && <div className="fixed w-full h-full inset-0 bg-black bg-opacity-50 z-40"></div>}
            <h1 className='text-black text-3xl py-3 font-semibold'>Profile</h1>
            <div className="container bg-white rounded-xl mx-auto w-full text-black">
                <div className="relative bg-white w-full pt-5 md:p-7 rounded-xl flex items-start space-x-4 md:space-x-8">
                    <div className='relative flex items-center justify-center w-24 h-24  md:w-32 md:h-32'>
                        <img src={service.src} alt={service.name} className="rounded-full w-20 h-20 md:w-28 md:h-28" />
                        <label htmlFor="profile-edit">
                            <img src="/icons/changedp.png" alt="" className='absolute bottom-0 right-0 w-8 h-8 md:w-12 md:h-12 cursor-pointer' />
                        </label>
                        <input className='hidden' type="file" id="profile-edit" accept="image/*" />
                    </div>

                    <div className='mr-3'>
                        <h2 className="text-sm font-semibold">{service.name}</h2>
                        <p className="text-gray-700 text-sm md:text-2xl font-medium">{service.service}</p>
                        <div className='flex flex-col items-start space-y-1 justify-center'>
                            <span className='flex items-center pt-2 space-x-2'>
                                <img src="/icons/location2.png" alt="" width={15} />
                                <p className='text-[10px] md:text-sm'>Nigeria</p>
                            </span>
                            <span className='flex items-center space-x-1 -ml-[2px] text-blue-600'>
                                <img src="/icons/globelink.png" alt="" width={20} />
                                <a href="" className='text-[10px] md:text-sm'>https://kingsleyodim.tech/</a>
                            </span>
                            <span className='flex items-center pb-2 space-x-2 text-blue-600'>
                                <img src="/icons/resume.png" alt="" width={15} />
                                <button className='text-[10px] md:text-sm'>Resume</button>
                            </span>
                            <Rating />

                            <div className='md:absolute md:top-7 md:right-10'>
                                <button
                                    onClick={toggleEdit}
                                    className="m-6 px-3 py-2 mx-auto bg-blue-700 flex items-center text-white rounded-lg">
                                    <img src="/icons/edit.png" alt="" className='w-6' />
                                    <p>Edit Profile</p>
                                </button>
                            </div>
                        </div>

                    </div>
                </div>

                {editProfile &&
                    <div className='absolute top-0 bg-white inset-x-0 rounded-2xl w-390 md:w-[650px] mx-auto z-50'>
                        <EditFreelancer toggleEdit={toggleEdit}/>
                    </div>
                }

                <div className='px-7 mb-7'>
                    <div className="flex text-[10px] md:text-sm space-x-2 mt-2 overflow-scroll"
                        style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}>
                        {service.tags.map((tag, index) => (
                            <span key={index} className="text-sm bg-gray-200 px-2 py-1 rounded-2xl">{tag}</span>
                        ))}
                    </div>
                    <p className="text-blue-600 font-semibold text-xl mt-3">{service.rate} /hr</p>
                </div>

                <p className='px-7'>Lorem ipsum dolor sit amet consectetur. Pellentesque mattis facilisis id porttitor tincidunt. Parturient praesent velit amet sed dapibus. Commodo nunc fermentum sit eget. Leo nunc tempus pellentesque pharetra porttitor et eget quisque. Egestas non bibendum cras pharetra lacinia in dis posuere at. Ultrices in nibh cursus scelerisque dui quisque felis. Et enim nisl velit mattis cum cursus. Tristique aliquam enim ac ipsum pulvinar mi purus. Dignissim suspendisse quisque arcu turpis a tempus vel dictum. Amet pellentesque nisl amet platea malesuada. Vitae habitant tortor auctor fringilla mattis. Cras nullam mattis volutpat nibh tortor risus purus. Sed rhoncus sagittis iaculis viverra tortor velit adipiscing metus ornare. Nisi ultrices nulla orci sed mi ultrices. Sed sed viverra a scelerisque pretium cursus nibh. Maecenas nunc sagittis malesuada elementum mi quam massa feugiat. Nulla quis leo purus nibh sit ac sed est. Fermentum ut blandit faucibus ligula mauris est lacus eget tincidunt. Nibh diam pharetra ornare egestas duis lacus id vitae lectus. Imperdiet in semper rutrum volutpat pharetra. Ultrices at in mi ut tincidunt.</p>

                <p className='p-7'>mi purus at. Nunc faucibus malesuada nunc ac. In faucibus aenean elementum vitae lobortis diam. Sapien nulla senectus vitae enim pellentesque consequat in tortor ut. Nec orci interdum aliquam pellentesque amet sed praesent euismod. Et id a aliquet est turpis. Sapien pulvinar etiam semper et tincidunt semper aliquet sed. Eget eu nibh nulla sapien tortor. Magna ut lacinia arcu maecenas nec mollis. Nulla erat nunc diam proin. Rhoncus erat vitae molestie tempor vitae ipsum est non est. Neque curabitur imperdiet congue vitae mattis. Donec eget bibendum fames odio velit ut in vel leo. Volutpat vestibulum imperdiet risus etiam at sed at morbi. Duis potenti hac aliquet aliquam mauris netus facilisi sed. At morbi sit lorem diam hendrerit ac odio sit. Aliquam nisl laoreet nisi ultrices massa rhoncus faucibus. Mattis eu vel at nulla suscipit at nec sed purus. Vel iaculis massa volutpat suspendisse massa purus amet. Integer sit ut velit id in diam in pulvinar posuere. Sit lacinia consectetur volutpat nunc. Leo pharetra lacinia auctor orci nibh massa nisi sem cursus. Cursus vitae commodo eget dolor in neque. Velit netus etiam diam eget.</p>

                {/* Projects Section
                <div className="p-6">
                    <h3 className="text-xl font-semibold">PROJECTS</h3>
                    <div className="grid grid-cols-5 gap-4 mt-4">
                        {service.projects.map((project, index) => (
                            <div key={index} className="bg-gray-100 p-4 rounded-lg shadow">
                                <img src="/images/portfolio.png" alt={project.name} />
                            </div>
                        ))}
                    </div>
                </div> */}
            </div>
        </div >
    )
}
