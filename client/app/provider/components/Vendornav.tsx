"use client";

import React, { useState } from 'react'
import Products, { Active, Cancelled, Completed } from './ListingsTabs';
import Rating from '@/app/components/Rating';
import Heading from '@/app/components/Heading';
import Link from 'next/link';
import ProductCard from '@/app/components/ProductCard';
import { EditVendor } from './editProfile';

export default function Listings() {
    const [addNew, setAddNew] = useState(false);

    function toggleAddNew() {
        setAddNew(!addNew);
    }

    const [activeTab, setActiveTab] = useState("My Products");

    const handleTabClick = (tab: "My Products" | "Active Orders" | "Completed Orders" | "Cancelled Orders") => {
        setActiveTab(tab);
    };

    return (
        <>
            {addNew === false && <MyListings />}
            {addNew === true && <ListNew />}
        </>
    );

    function MyListings() {
        return (
            <div className='w-full flex flex-col items-center'>
                <div className='w-11/12 mx-auto flex items-center space-x-4 justify-between py-5'>
                    <h1 className='text-black text-3xl font-semibold'>Product Listings</h1>

                    <button
                        onClick={toggleAddNew}
                        className='bg-blue-600 p-2 rounded-md text-sm flex space-x-1 items-center justify-center'>
                        <img src="/icons/plus-circle.png" alt="" className='w-7 md:w-5' />
                        <p className='hidden md:block'>List Product</p>
                    </button>

                </div> 

                <div className="w-11/12 flex items-center mx-auto border-b border-gray-400 overflow-scroll"
                    style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}>

                    <button
                        className={`w-40 md:w-1/4 py-2 px-4 flex items-center justify-center text-sm text-left md:text-lg font-semibold cursor-pointer transition-colors duration-200 ${activeTab === "My Products"
                            ? "text-black border-b-2 border-blue-600"
                            : "text-gray-400 hover:text-blue-400"
                            }`}
                        onClick={() => handleTabClick("My Products")}
                    >
                        <p className='w-24 md:w-32'>My Products</p>
                        <span className={`text-white px-2 rounded-full 
                        ${activeTab === "My Products" ? "bg-blue-600" : "bg-gray-400"}`}>
                            7
                        </span>
                    </button>

                    <button
                        className={`w-44 md:w-1/4 py-2 px-4 flex items-center justify-center text-sm text-left md:text-lg font-semibold cursor-pointer transition-colors duration-200 ${activeTab === "Active Orders"
                            ? "text-black border-b-2 border-blue-600"
                            : "text-gray-400 hover:text-blue-400"
                            }`}
                        onClick={() => handleTabClick("Active Orders")}
                    >
                        <p className='w-32'>Active Orders</p>
                        <span className={`text-white px-2 rounded-full 
                        ${activeTab === "Active Orders" ? "bg-blue-600" : "bg-gray-400"}`}>
                            3
                        </span>
                    </button>

                    <button
                        className={`w-52 md:w-1/4 py-2 px-4 flex items-center justify-center text-sm text-left md:text-lg font-semibold cursor-pointer transition-colors duration-200 ${activeTab === "Completed Orders"
                            ? "text-black border-b-2 border-blue-600"
                            : "text-gray-400 hover:text-blue-400"
                            }`}
                        onClick={() => handleTabClick("Completed Orders")}
                    >
                        <p className='w-36 md:w-44'>Completed Orders</p>
                        <span className={`text-white px-2 rounded-full 
                        ${activeTab === "Completed Orders" ? "bg-blue-600" : "bg-gray-400"}`}>
                            5
                        </span>
                    </button>

                    <button
                        className={`w-52 md:w-1/4 py-2 px-4 flex items-center justify-center text-sm text-left md:text-lg font-semibold cursor-pointer transition-colors duration-200 ${activeTab === "Cancelled Orders"
                            ? "text-black border-b-2 border-blue-600"
                            : "text-gray-400 hover:text-blue-400"
                            }`}
                        onClick={() => handleTabClick("Cancelled Orders")}
                    >
                        <p className='w-36 md:w-44'>Cancelled Orders</p>
                        <span className={`text-white px-2 rounded-full 
                        ${activeTab === "Cancelled Orders" ? "bg-blue-600" : "bg-gray-400"}`}>
                            4
                        </span>
                    </button>
                </div>

                <div className="w-11/12 mx-auto mt-4">
                    {activeTab === "My Products" && <Products />}
                    {activeTab === "Active Orders" && <Active />}
                    {activeTab === "Completed Orders" && <Completed />}
                    {activeTab === "Cancelled Orders" && <Cancelled />}
                </div>

            </div>
        )
    }

    function ListNew() {
        const [firstStep, setFirstStep] = useState(false);

        function toggleFirstStep() {
            setFirstStep(!firstStep);
        }

        return (
            <>
                {firstStep === false && <ProductInfo />}
                {firstStep === true && <ProductInfo2 />}
            </>
        );

        function ProductInfo() {
            const [quantity, setQuantity] = useState(1); // Default quantity
            const [cost, setCost] = useState(1); // Default cost

            // increment the quantity
            const incrementQuantity = () => {
                setQuantity(prevQuantity => prevQuantity + 1);
            };
            // decrement the quantity
            const decrementQuantity = () => {
                if (quantity > 1) { // Ensure the quantity doesn't go below 1
                    setQuantity(prevQuantity => prevQuantity - 1);
                }
            };
            // increment the cost
            const incrementCost = () => {
                setCost(prevCost => prevCost + 1);
            };
            // decrement the cost
            const decrementCost = () => {
                if (cost > 1) { // Ensure the cost doesn't go below 1
                    setCost(prevCost => prevCost - 1);
                }
            };
            return (
                <div className='w-full bg-white pb-10'>
                    <div className='w-11/12 mx-auto flex items-center justify-between py-5'>
                        <h1 className='text-black text-3xl font-semibold'>List New Product</h1>

                        <button
                            onClick={toggleAddNew}
                            className='bg-blue-600 p-2 rounded-md text-sm flex items-center'>
                            Cancel
                        </button>
                    </div>

                    <div className='text-black md:border-2 border-gray-300 rounded-lg p-7 md:w-[550px] mx-auto flex flex-col space-y-3'>
                        <h1 className='text-xl text-center font-semibold'>Product Information</h1>

                        <div>
                            <span className='flex items-center justify-between pt-5'>
                                <p className='text-sm font-semibold'>Product Name</p>
                                <p className='text-gray-400 text-right'>Step 1/2</p>
                            </span>
                            <input type="text" className='w-full border-2 border-gray-400 rounded-lg p-2' />
                        </div>
                        <div>
                            <p className='text-sm font-semibold'>Product Categetory</p>
                            <input type="text" className='w-full border-2 border-gray-400 rounded-lg p-2' />
                        </div>

                        <div >
                            <p className='text-sm font-semibold'>Quantity Available</p>
                            <div className='flex items-center'>
                                <input
                                    id="hourly-rate"
                                    type="text"
                                    value={`${quantity}`}
                                    readOnly
                                    className='w-full py-2 px-5 border-y-2 border-l-2 border-gray-400 rounded-l-lg outline-none'
                                />

                                <div className='flex flex-col space-y-1 items-end w-40 py-2 px-4 border-y-2 border-r-2 border-gray-400 rounded-r-lg'>
                                    {/* Increment Button */}
                                    <button onClick={incrementQuantity}>
                                        <img src="/icons/calcUp.png" width={15} alt="" />
                                    </button>
                                    {/* Decrement Button */}
                                    <button onClick={decrementQuantity}>
                                        <img src="/icons/calcDown.png" width={15} alt="" />
                                    </button>
                                </div>
                            </div>
                        </div>
                        <div>
                            <p className='text-sm font-semibold'>Price (Espees)</p>
                            <div className='flex items-center'>
                                <input
                                    id="hourly-rate"
                                    type="text"
                                    value={`${cost}`}
                                    readOnly
                                    className='w-full py-2 px-5 border-y-2 border-l-2 border-gray-400 rounded-l-lg outline-none'
                                />

                                <div className='flex flex-col space-y-1 items-end w-40 py-2 px-4 border-y-2 border-r-2 border-gray-400 rounded-r-lg'>
                                    {/* Increment Button */}
                                    <button onClick={incrementCost}>
                                        <img src="/icons/calcUp.png" width={15} alt="" />
                                    </button>
                                    {/* Decrement Button */}
                                    <button onClick={decrementCost}>
                                        <img src="/icons/calcdown.png" width={15} alt="" />
                                    </button>
                                </div>
                            </div>
                        </div>

                        <div>
                            <p className='text-sm font-semibold'>Product Description</p>
                            <textarea name="Desc" rows={3} className='w-full border-2 border-gray-400 rounded-lg p-2'></textarea>
                        </div>

                        <div className='w-full flex items-center justify-center'>
                            <button
                                onClick={toggleFirstStep}
                                className='w-full p-3 text-sm rounded-lg bg-blue-600 text-white'>
                                Next
                            </button>
                        </div>

                    </div>
                </div>
            );
        }

        function ProductInfo2() {
            return (
                <div className='w-full bg-white pb-10'>
                    <div className='w-11/12 mx-auto flex items-center justify-between py-5'>
                        <h1 className='text-black text-3xl font-semibold'>List New Product</h1>

                        <button
                            onClick={toggleAddNew}
                            className='bg-blue-600 p-2 rounded-md text-sm flex items-center'>
                            Cancel
                        </button>
                    </div>

                    <div className='text-black md:border-2 border-gray-300 rounded-lg p-7 md:w-[550px] mx-auto flex flex-col space-y-3'>
                        <h1 className='text-xl text-center font-semibold'>Product Information</h1>

                        <div className='flex items-center justify-between pt-5'>
                            <p className='font-semibold'>Upload Images of your product</p>
                            <p className='text-gray-400 text-right'>Step 2/2</p>
                        </div>
                        <div className='w-full h-44 p-10 border-2 border-dashed rounded-lg mx-auto border-gray-400 flex flex-col items-center justify-center'>
                            <img src="/icons/upload.png" alt="" />
                            <p className='text-gray-500 text-center font-semibold'>
                                Add images or documents by dropping your file here or
                                <label htmlFor="selectFile" className='text-blue-700 cursor-pointer'> select file</label>
                                <input type="file" id='selectFile' className='hidden' accept="image/*" />
                            </p>
                        </div>
                        <label htmlFor="addImage" className='font-semibold text-left cursor-pointer text-blue-600 text-lg p-1'>+ Add Image</label>
                        <input type="file" accept="image/*" id="addImage" className='hidden' />

                        <div className='w-full flex items-center justify-center'>
                            <button
                                onClick={toggleAddNew}
                                className='w-full p-3 my-4 text-sm rounded-lg bg-blue-600 text-white'>
                                List Product
                            </button>
                        </div>
                    </div>
                </div>
            );
        }
    }

}

export function Messages() {
    return (
        <div className='w-full'>
            <h1 className='text-black text-2xl font-semibold'>Messages</h1>

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
        <div className='w-full'>
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

export function Profile() {
    const [editProfile, setEditProfile] = useState(false);

    function toggleEdit(){
        setEditProfile(!editProfile);
    }

    const vendor = [
        {
            id: '1',
            name: 'Kingsley Odim',
            storeName: "Vinick's Fashion Store",
            image: '/images/profile4.png',
        }
    ];

    const productList = [
        { id: 1, name: 'Nike Sneakers', price: '10.5 Espees', src: '/images/fashion.png' },
        { id: 2, name: 'Nike Sneakers', price: '10.5 Espees', src: '/images/fashion.png' },
        { id: 3, name: 'Nike Sneakers', price: '10.5 Espees', src: '/images/fashion.png' },
        { id: 4, name: 'Nike Sneakers', price: '10.5 Espees', src: '/images/fashion.png' },
        { id: 5, name: 'Nike Sneakers', price: '10.5 Espees', src: '/images/fashion.png' },
        { id: 6, name: 'Nike Sneakers', price: '10.5 Espees', src: '/images/fashion.png' },
        { id: 7, name: 'Nike Sneakers', price: '10.5 Espees', src: '/images/fashion.png' },
        { id: 8, name: 'Nike Sneakers', price: '10.5 Espees', src: '/images/fashion.png' },
    ];

    return (
        <div className='w-full relative'>
            {editProfile && <div className="fixed w-full h-full inset-0 bg-black bg-opacity-50 z-40"></div>}

            <h1 className='text-black text-3xl py-3 font-semibold'>Store</h1>

            <div>
                <div className="md:relative bg-white w-full rounded-lg flex items-start justify-between p-5 mb-10">

                    {vendor.map(detail => (
                        <div className="flex items-start md:items-center space-x-3 md:space-x-10">
                            <img src={detail.image} alt="image" className="w-16 md:w-24"/>

                            <div className="flex flex-col items-start space-y-1">
                                <h1 className="text-sm font-medium text-black">{detail.name}</h1>
                                <p className="font-semibold text-black hover:text-blue-600">{detail.storeName}</p>
                                <span className="flex items-center space-x-1 text-black">
                                    <img src="/icons/location2.png" alt="" className="w-5" />
                                    <p>Nigeria</p>
                                </span>
                                <Rating />
                            </div>
                        </div>
                    ))}

                    <div className='md:absolute md:top-8 md:right-10'>
                        <button 
                        onClick={toggleEdit}
                        className="px-3 md:px-6 py-2 mx-auto bg-blue-700 flex items-center space-x-2 text-white rounded-lg">
                            <img src="/icons/edit.png" alt="" className='w-6' />
                            <p className='hidden md:flex'>Edit Profile</p>
                        </button>
                    </div>
                </div>
                    {editProfile && 
                        <div className='absolute top-0 bg-white inset-x-0 rounded-2xl w-[400] md:w-[650px] mx-auto z-50'>
                            <EditVendor toggleEdit={toggleEdit}/>
                        </div>
                    }

                <Heading text="PRODUCTS" />
                <div className="mx-auto flex items-center overflow-scroll rounded-lg"
                    style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}>
                    {productList.map(product => (
                        <Link href={'/product/1'}>
                            <ProductCard key={product.id} product={product} />
                        </Link>
                    ))}
                </div>
            </div>
        </div >
    )
}
