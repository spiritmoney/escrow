"use client";

import React, { useState } from 'react'
import Products, { Active, Cancelled, Completed } from './ListingsTabs';

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
            <div className='w-full'>
                <div className='w-11/12 mx-auto flex items-center justify-between py-5'>
                    <h1 className='text-black text-3xl font-semibold'>Product Listings</h1>

                    <button
                        onClick={toggleAddNew}
                        className='bg-blue-600 p-2 rounded-md text-sm flex items-center'>
                        <img src="/icons/plus-circle.png" alt="" className='pr-1 w-5' />
                        List Product
                    </button>

                </div>

                <div className="w-11/12 flex items-center mx-auto border-b border-gray-400">
                    <button
                        className={`w-1/4 py-2 px-4 text-lg font-semibold cursor-pointer transition-colors duration-200 ${activeTab === "My Products"
                            ? "text-black border-b-2 border-blue-600"
                            : "text-gray-400 hover:text-blue-400"
                            }`}
                        onClick={() => handleTabClick("My Products")}
                    >
                        My Products
                        <span className={`ml-2 text-white px-2 rounded-full 
                        ${activeTab === "My Products" ? "bg-blue-600" : "bg-gray-400"}`}>
                            7
                        </span>
                    </button>
                    <button
                        className={`w-1/4 py-2 px-4 text-lg font-semibold cursor-pointer transition-colors duration-200 ${activeTab === "Active Orders"
                            ? "text-black border-b-2 border-blue-600"
                            : "text-gray-400 hover:text-blue-400"
                            }`}
                        onClick={() => handleTabClick("Active Orders")}
                    >
                        Active Orders
                        <span className={`ml-2 text-white px-2 rounded-full 
                        ${activeTab === "Active Orders" ? "bg-blue-600" : "bg-gray-400"}`}>
                            3
                        </span>
                    </button>
                    <button
                        className={`w-1/4 py-2 px-4 text-lg font-semibold cursor-pointer transition-colors duration-200 ${activeTab === "Completed Orders"
                            ? "text-black border-b-2 border-blue-600"
                            : "text-gray-400 hover:text-blue-400"
                            }`}
                        onClick={() => handleTabClick("Completed Orders")}
                    >
                        Completed Orders
                        <span className={`ml-2 text-white px-2 rounded-full 
                        ${activeTab === "Completed Orders" ? "bg-blue-600" : "bg-gray-400"}`}>
                            5
                        </span>
                    </button>
                    <button
                        className={`w-1/4 py-2 px-4 text-lg font-semibold cursor-pointer transition-colors duration-200 ${activeTab === "Cancelled Orders"
                            ? "text-black border-b-2 border-blue-600"
                            : "text-gray-400 hover:text-blue-400"
                            }`}
                        onClick={() => handleTabClick("Cancelled Orders")}
                    >
                        Cancelled Orders
                        <span className={`ml-2 text-white px-2 rounded-full 
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
        );
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

                    <div className='text-black border-2 border-gray-300 rounded-lg p-7 w-[550px] mx-auto flex flex-col space-y-3'>
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
                                    className='w-96 py-2 px-5 border-y-2 border-l-2 border-gray-400 rounded-l-lg outline-none'
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
                                    className='w-96 py-2 px-5 border-y-2 border-l-2 border-gray-400 rounded-l-lg outline-none'
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

                    <div className='text-black border-2 border-gray-300 rounded-lg p-7 w-[550px] mx-auto flex flex-col space-y-3'>
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

export function Profile() {

    return (
        <div className='w-full '>
            <h1 className='text-black text-3xl py-3 font-semibold'>Profile</h1>
            <div className='w-full flex items-center justify-center'>
                <img src="/images/coming-soon.png" alt="" className='w-96 h-96' />
            </div>
        </div >
    )
}
