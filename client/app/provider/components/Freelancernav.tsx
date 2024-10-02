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
    const [viewNotification, setViewNotification] = useState(false);
    const [negotiating, setNegotiating] = useState(false);
    const [hourlyRate, setHourlyRate] = useState(10); // Default hourly rate
    const gigs = [
        {
            client: 'Emmanuel Charles',
            gig: 'Build a Landing Page for my busin...',
            dueOn: 'Sep 30',
            total: '180 Espees',
        },
    ];

    function toggleNotify() {
        setViewNotification(!viewNotification);
    }
    function toggleNegotiate() {
        setNegotiating(!negotiating)
    }

    // Function to increment the rate
    const incrementRate = () => {
        setHourlyRate(prevRate => prevRate + 1);
    };

    // Function to decrement the rate
    const decrementRate = () => {
        if (hourlyRate > 1) { // Ensure the rate doesn't go below 1
            setHourlyRate(prevRate => prevRate - 1);
        }
    };

    return (
        <div className='w-full'>
            {viewNotification && <div className="fixed w-full h-full inset-0 bg-black bg-opacity-50 z-20"></div>}

            <h1 className='text-black text-2xl font-semibold'>My Notifications</h1>

            <div className='relative container w-full my-16 text-black bg-white'>
                {/* Table */}
                <div className="overflow-x-auto">
                    <h1 className="w-full text-lg font-semibold border-b border-gray-300 p-3">Notifications</h1>
                    <table className="min-w-full table-auto bg-white border-collapse">

                        <thead>
                            <tr className="bg-gray-100 text-left">
                                <th className="px-6 py-4 font-medium text-gray-400">CLIENT</th>
                                <th className="px-6 py-4 font-medium text-gray-400">GIG</th>
                                <th className="px-6 py-4 font-medium text-gray-400">DUE ON</th>
                                <th className="px-6 py-4 font-medium text-gray-400">TOTAL</th>
                                <th className="px-6 py-4 font-medium text-gray-400"> </th>
                            </tr>
                        </thead>

                        <tbody>
                            {gigs.map((gig, index) => (
                                <tr key={index} className={`border-b ${index % 2 === 0 ? 'bg-gray-50' : 'bg-white'}`}>
                                    <td className="px-6 py-4 flex items-center space-x-1">
                                        <img src="/images/profile2.png" alt="" />
                                        <p>{gig.client}</p>
                                    </td>
                                    <td className="px-6 py-4">{gig.gig}</td>
                                    <td className="px-6 py-4">{gig.dueOn}</td>
                                    <td className="px-6 py-4">{gig.total}</td>
                                    <td className="px-6 py-4">
                                        <button onClick={toggleNotify} className="bg-blue-600 py-1 px-5 text-white rounded-md">View</button>
                                    </td>
                                </tr>
                            ))}
                            {gigs.map((gig, index) => (
                                <tr key={index} className={`border-b ${index % 2 === 0 ? 'bg-gray-50' : 'bg-white'}`}>
                                    <td className="px-6 py-4 flex items-center space-x-1">
                                        <img src="/images/profile2.png" alt="" />
                                        <p>{gig.client}</p>
                                    </td>
                                    <td className="px-6 py-4">{gig.gig}</td>
                                    <td className="px-6 py-4">{gig.dueOn}</td>
                                    <td className="px-6 py-4">{gig.total}</td>
                                    <td className="px-6 py-4">
                                        <button onClick={toggleNotify} className="bg-blue-600 py-1 px-5 text-white rounded-md">View</button>
                                    </td>
                                </tr>
                            ))}
                            {gigs.map((gig, index) => (
                                <tr key={index} className={`border-b ${index % 2 === 0 ? 'bg-gray-50' : 'bg-white'}`}>
                                    <td className="px-6 py-4 flex items-center space-x-1">
                                        <img src="/images/profile2.png" alt="" />
                                        <p>{gig.client}</p>
                                    </td>
                                    <td className="px-6 py-4">{gig.gig}</td>
                                    <td className="px-6 py-4">{gig.dueOn}</td>
                                    <td className="px-6 py-4">{gig.total}</td>
                                    <td className="px-6 py-4">
                                        <button onClick={toggleNotify} className="bg-blue-600 py-1 px-5 text-white rounded-md">View</button>
                                    </td>
                                </tr>
                            ))}
                            {gigs.map((gig, index) => (
                                <tr key={index} className={`border-b ${index % 2 === 0 ? 'bg-gray-50' : 'bg-white'}`}>
                                    <td className="px-6 py-4 flex items-center space-x-1">
                                        <img src="/images/profile2.png" alt="" />
                                        <p>{gig.client}</p>
                                    </td>
                                    <td className="px-6 py-4">{gig.gig}</td>
                                    <td className="px-6 py-4">{gig.dueOn}</td>
                                    <td className="px-6 py-4">{gig.total}</td>
                                    <td className="px-6 py-4">
                                        <button onClick={toggleNotify} className="bg-blue-600 py-1 px-5 text-white rounded-md">View</button>
                                    </td>
                                </tr>
                            ))}
                            {gigs.map((gig, index) => (
                                <tr key={index} className={`border-b ${index % 2 === 0 ? 'bg-gray-50' : 'bg-white'}`}>
                                    <td className="px-6 py-4 flex items-center space-x-1">
                                        <img src="/images/profile2.png" alt="" />
                                        <p>{gig.client}</p>
                                    </td>
                                    <td className="px-6 py-4">{gig.gig}</td>
                                    <td className="px-6 py-4">{gig.dueOn}</td>
                                    <td className="px-6 py-4">{gig.total}</td>
                                    <td className="px-6 py-4">
                                        <button onClick={toggleNotify} className="bg-blue-600 py-1 px-5 text-white rounded-md">View</button>
                                    </td>
                                </tr>
                            ))}

                        </tbody>
                    </table>
                </div>

                {viewNotification &&
                    <div className='absolute w-[550px] top-5 inset-x-0 mx-auto z-30 bg-white p-5 rounded-lg shadow-lg flex flex-col space-y-2'>
                        {negotiating && <div className="fixed w-full h-full inset-0 bg-black bg-opacity-50 z-40"></div>}
                        <div className='relative'>
                            <div className="relative w-full flex items-center space-x-5 pb-3">
                                <img src="/images/profile2.png" alt="" />

                                <div>
                                    <p>Emmanuel Charles</p>
                                    <span className='flex items-center space-x-2'>
                                        <img src="/icons/location2.png" alt="" className='w-4' />
                                        <p className='text-gray-600'>Nigeria</p>
                                    </span>
                                </div>

                                <p onClick={toggleNotify} className='text-blue-600 text-3xl absolute top-0 right-0 cursor-pointer'>&times;</p>
                            </div>

                            <p className='font-semibold text-sm'>Service Description</p>
                            <p className='text-gray-600 text-sm'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod, ut dolorem esse quae, excepturi blanditiis sequi natus cumque, incidunt necessitatibus explicabo obcaecati veritatis dolor culpa officiis error libero dolorum! Quia.</p>

                            <div className='py-3 flex-col space-y-2'>
                                <p className='font-semibold text-sm'>Additional Documents</p>
                                <div className='flex items-center space-x-2'>
                                    <img src="/icons/docs.png" alt="" />
                                    <img src="/icons/docs.png" alt="" />
                                </div>
                            </div>

                            <div className='lex flex-col space-y-2'>
                                <p className='font-semibold text-sm'>Timeline</p>
                                <div className='flex items-center space-x-2'>
                                    <span className="w-24 text-sm font-medium"><p>Start Date</p></span>
                                    <span className="flex items-center space-x-2 text-sm">
                                        <img src="/icons/calender.png" alt="" />
                                        <p>24 September 2024</p>
                                    </span>
                                </div>

                                <div className='flex items-center space-x-2'>
                                    <span className="w-24 text-sm font-medium"><p>End Date</p></span>
                                    <span className="flex items-center space-x-2 text-sm">
                                        <img src="/icons/calender.png" alt="" />
                                        <p>05 November 2024</p>
                                    </span>
                                </div>
                            </div>

                            <div className='py-3 flex flex-col space-y-2'>
                                <p className='font-semibold text-sm'>Mile Stone</p>
                                <div className='flex items-center space-x-2'>
                                    <span className="w-24 text-sm font-medium"><p>Date</p></span>
                                    <span className="flex items-center space-x-2 text-sm">
                                        <img src="/icons/calender.png" alt="" />
                                        <p>24 September 2024</p>
                                    </span>
                                </div>
                                <div className='flex space-x-6'>
                                    <span className="w-24 text-sm font-medium"><p>Description</p></span>
                                    <span className="text-sm">
                                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit consectetur dicta officia sunt ipsa dolor dolorem</p>
                                    </span>
                                </div>
                            </div>

                            <p className='font-semibold text-sm'>Price</p>
                            <span className='flex text-sm items-center space-x-5'>
                                <p className='font-medium'>Amount Offer</p>
                                <p>400 Espees</p>
                            </span>

                            <div className='flex items-center justify-between py-5 space-x-2'>
                                <button
                                    onClick={toggleNotify}
                                    className="bg-red-700 py-2 px-5 w-40 text-sm text-white rounded-md">
                                    Decline
                                </button>
                                <button
                                    onClick={toggleNegotiate}
                                    className="bg-blue-600 py-2 px-5 w-40 text-sm text-white rounded-md">
                                    Negotiate
                                </button>
                                <button
                                    onClick={toggleNotify}
                                    className="bg-green-700 py-2 px-5 w-40 text-sm text-white rounded-md">
                                    Accept
                                </button>
                            </div>

                            {negotiating &&
                                <div className='absolute inset-0 mx-auto z-50 bg-white rounded-lg w-[500px] h-[450px] p-5 flex flex-col space-y-2'>
                                    <p onClick={toggleNegotiate} className='text-blue-600 text-3xl text-right cursor-pointer'>&times;</p>
                                    <p className='font-semibold text-center pb-3'>Negotiate Offer</p>

                                    <div>
                                        <p className='text-[12px] font-semibold'>Start Date</p>
                                        <input type="date" name="" className='w-full border-2 border-gray-400 rounded-lg p-2' />
                                    </div>

                                    <div>
                                        <p className='text-[12px] font-semibold'>Due Date</p>
                                        <input type="date" name="" className='w-full border-2 border-gray-400 rounded-lg p-2' />
                                    </div>

                                    <div className='pb-5'>
                                        <label htmlFor="hourly-rate" className='text-[12px] font-semibold'>Amount in Espees</label>
                                        <div className='flex items-center border-2 border-gray-400 rounded-lg'>

                                            {/* Rate Input */}
                                            <input
                                                id="hourly-rate"
                                                type="text"
                                                value={`${hourlyRate}`}
                                                readOnly
                                                className='w-full py-2 px-5 font-semibold outline-none rounded-lg'
                                            />

                                            <div className='flex flex-col items-end space-y-2 p-3'>
                                                {/* Increment Button */}
                                                <button onClick={incrementRate}>
                                                    <img src="/icons/calcUp.png" width={15} alt="" />
                                                </button>
                                                {/* Decrement Button */}
                                                <button onClick={decrementRate}>
                                                    <img src="/icons/calcDown.png" width={15} alt="" />
                                                </button>
                                            </div>

                                        </div>
                                    </div>

                                    <button 
                                    onClick={() => {toggleNotify(); toggleNegotiate();}}
                                    className='text-white rounded-lg bg-blue-600 w-full p-2'>
                                        Negotiate
                                    </button>
                                </div>
                            }
                        </div>
                    </div>
                }
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
