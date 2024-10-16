"use client";

import { useState } from "react";
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import "../../styles/globals.css";
import 'swiper/css/pagination';
import { Navigation, Pagination } from 'swiper/modules';
import Maintenance from "@/app/components/Maintenance";

interface listtingProps {
    toggleAddNew: () => void;
    staticState: boolean;
}
interface productProps {
    staticState: boolean;
}


const listings = [
    {
        product: 'Nike Shoes',
        src: '/images/fashion.png',
        category: 'Fashion',
        quantity: '120',
        price: '20 Espees',
    },
    {
        product: 'Rolex Smart Watch',
        src: '/images/watch.png',
        category: 'Fashion',
        quantity: '15',
        price: '150 Espees',
    },
    {
        product: 'Nike Shoes',
        src: '/images/fashion.png',
        category: 'Fashion',
        quantity: '120',
        price: '20 Espees',
    },
    {
        product: 'Rolex Smart Watch',
        src: '/images/watch.png',
        category: 'Fashion',
        quantity: '15',
        price: '150 Espees',
    },
    {
        product: 'Nike Shoes',
        src: '/images/fashion.png',
        category: 'Fashion',
        quantity: '120',
        price: '20 Espees',
    },
    {
        product: 'Rolex Smart Watch',
        src: '/images/watch.png',
        category: 'Fashion',
        quantity: '15',
        price: '150 Espees',
    },
];
const active = [
    {
        product: 'Nike Shoes',
        category: 'Fashion',
        quantity: '2',
        price: '20 Espees',
    },
    {
        product: 'Nike Shoes',
        category: 'Fashion',
        quantity: '2',
        price: '20 Espees',
    },
    {
        product: 'Nike Shoes',
        category: 'Fashion',
        quantity: '2',
        price: '20 Espees',
    },
];
const completed = [
    {
        product: 'Nike Shoes',
        category: 'Fashion',
        quantity: '2',
        price: '20 Espees',
    },
    {
        product: 'Nike Shoes',
        category: 'Fashion',
        quantity: '2',
        price: '20 Espees',
    },
    {
        product: 'Nike Shoes',
        category: 'Fashion',
        quantity: '2',
        price: '20 Espees',
    },
    {
        product: 'Nike Shoes',
        category: 'Fashion',
        quantity: '2',
        price: '20 Espees',
    },
    {
        product: 'Nike Shoes',
        category: 'Fashion',
        quantity: '2',
        price: '20 Espees',
    },
];
const cancelled = [
    {
        product: 'Nike Shoes',
        category: 'Fashion',
        quantity: '2',
        price: '20 Espees',
    },
    {
        product: 'Nike Shoes',
        category: 'Fashion',
        quantity: '2',
        price: '20 Espees',
    },
    {
        product: 'Nike Shoes',
        category: 'Fashion',
        quantity: '2',
        price: '20 Espees',
    },
    {
        product: 'Nike Shoes',
        category: 'Fashion',
        quantity: '2',
        price: '20 Espees',
    },
];

export default function Products({ toggleAddNew, staticState }: listtingProps) {
    const [productView, setProductView] = useState(false);

    function toggleView() {
        setProductView(!productView);
    }

    function ProductsTable() {
        return (
            <>
                {staticState ?
                    <div className="flex items-center justify-center">
                        <div className="bg-white w-96 text-center p-10 rounded-lg my-8">
                            <img src="/images/basket.png" alt="Empty State" className="w-64 mx-auto mb-4" />
                            <h2 className="text-lg font-semibold text-gray-700">Oops! You don't have any Product Listed</h2>
                            <button onClick={toggleAddNew} className="w-full bg-blue-600 text-white text-sm px-4 py-2 my-5 rounded-md">
                                List New Product
                            </button>
                        </div>
                    </div>
                    :
                    <div>
                        <div className="w-full text-black opacity-50">
                            {/* Table */}
                            <div className="overflow-x-auto">
                                <h1 className="w-full text-lg font-semibold bg-white border-b border-gray-300 p-3">My Products</h1>

                                {/* Table for medium to large screens */}
                                <table className="min-w-full table-auto bg-white border-collapse hidden md:table">
                                    <thead>
                                        <tr className="bg-gray-100 text-left">
                                            <th className="px-6 py-4 font-medium text-gray-400">PRODUCT NAME</th>
                                            <th className="px-6 py-4 font-medium text-gray-400">CATEGORY</th>
                                            <th className="px-6 py-4 font-medium text-gray-400">QUANTITY</th>
                                            <th className="px-6 py-4 font-medium text-gray-400">PRICE</th>
                                        </tr>
                                    </thead>

                                    <tbody>
                                        {listings.map((listing, index) => (
                                            <tr key={index} className={`border-b ${index % 2 === 0 ? 'bg-gray-50' : 'bg-white'}`}>
                                                <td className="px-6 py-4 flex items-center space-x-2">

                                                    <img onClick={toggleView} src={listing.src} alt="" className="w-10 rounded-md cursor-pointer" />
                                                    <p>{listing.product}</p>
                                                </td>
                                                <td className="px-6 py-4">{listing.category}</td>
                                                <td className="px-6 py-4">
                                                    <button className="bg-blue-600 w-24 py-1 px-2 text-white rounded-md">{listing.quantity}</button>
                                                </td>
                                                <td className="px-6 py-4">{listing.price}</td>
                                            </tr>
                                        ))}
                                    </tbody>
                                </table>

                                {/* Card layout for small screens */}
                                <div className="grid grid-cols-1 gap-4 md:hidden">
                                    {listings.map((listing, index) => (
                                        <div onClick={toggleView} key={index} className={`border p-4 rounded-lg shadow-sm ${index % 2 === 0 ? 'bg-gray-50' : 'bg-white'}`}>
                                            <div className="flex items-center space-x-2">

                                                <img src={listing.src} alt="" className="w-10 rounded-md cursor-pointer" />
                                                <p className="font-medium">{listing.product}</p>
                                            </div>
                                            <p className="text-gray-500 mt-2">Category: {listing.category}</p>
                                            <p className="text-gray-500 mt-2">Quantity: {listing.quantity}</p>
                                            <p className="text-gray-500 mt-2">Price: {listing.price}</p>
                                        </div>
                                    ))}
                                </div>
                            </div>

                        </div>
                    </div>
                }
            </>
        );
    }

    function ProductView() {
        const images = [
            '/images/fashion.png',
            '/images/watch.png',
            '/images/fashion.png',
            '/images/watch.png',
        ];
        const [construction, setConstruction] = useState(false);

        function toggleConstruction() {
            setConstruction(!construction);
        }

        return (
            <>
                <div className="relative w-full p-8 text-black flex items-center justify-center">
                    {construction && <div className="w-full h-full fixed inset-0 z-40 bg-black bg-opacity-90"></div>}
                    <div className="bg-white flex flex-col md:flex-row space-x-2 items-center p-3 rounded-lg">
                        {/* <img src="/images/watch.png" alt="" className="w-96 rounded-lg" /> */}
                        <div className="w-80 mx-auto">
                            <Swiper
                                modules={[Navigation, Pagination]}
                                navigation
                                pagination={{ clickable: true }}
                                spaceBetween={10}
                                slidesPerView={1}
                                loop={true}
                            >
                                {images.map((image, index) => (
                                    <SwiperSlide key={index}>
                                        <img src={image} alt={`Product Image ${index + 1}`} className="rounded-lg w-full h-full" />
                                    </SwiperSlide>
                                ))}
                            </Swiper>
                        </div>

                        <div className="flex flex-col items-center space-y-2 w-80 p-2">
                            <h1 className="text-lg font-semibold">Rolex Smart Watch</h1>
                            <p className="text-sm text-gray-500">Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt ipsa exercitationem sed, quo tempora vel suscipit sequi omnis delectus dicta!</p>
                            <p>Quantity Available: 15</p>
                            <p className="pb-3">Price: 150 Espees</p>

                            <button onClick={toggleView} className="bg-blue-600 w-56 p-2 rounded-lg text-sm text-white">Save Product</button>
                            <button
                                onClick={toggleConstruction}
                                className="bg-blue-600 w-56 p-2 rounded-lg text-sm text-white">
                                Edit Product
                            </button>
                            <button className="bg-red-700 w-56 p-2 rounded-lg text-sm text-white">Delete Product</button>
                        </div>
                    </div>

                    {construction &&
                        <Maintenance toggleConstruction={toggleConstruction} />
                    }
                </div>


            </>
        );
    }

    return (
        <>
            {productView ? <ProductView /> : <ProductsTable />}
        </>
    );
}

export function Active({ staticState }: productProps) {
    return (
        <>
            {staticState ?
                <div className="flex items-center justify-center">
                    <div className="bg-white w-96 text-center p-10 rounded-lg my-8">
                        <img src="/icons/listicon.png" alt="Empty State" className="w-64 mx-auto mb-4" />
                        <h2 className="text-lg font-semibold text-gray-700">Oops! You currently do not have any Active Orders</h2>
                    </div>
                </div>
                :
                <div className="w-full text-black opacity-50">
                    {/* Table */}
                    <div className="overflow-x-auto">
                        <h1 className="w-full text-lg font-semibold bg-white border-b border-gray-300 p-3">My Products</h1>

                        {/* Table for medium to large screens */}
                        <table className="min-w-full table-auto bg-white border-collapse hidden md:table">
                            <thead>
                                <tr className="bg-gray-100 text-left">
                                    <th className="px-6 py-4 font-medium text-gray-400">PRODUCT NAME</th>
                                    <th className="px-6 py-4 font-medium text-gray-400">CATEGORY</th>
                                    <th className="px-6 py-4 font-medium text-gray-400">QUANTITY</th>
                                    <th className="px-6 py-4 font-medium text-gray-400">PRICE</th>
                                </tr>
                            </thead>

                            <tbody>
                                {active.map((active, index) => (
                                    <tr key={index} className={`border-b ${index % 2 === 0 ? 'bg-gray-50' : 'bg-white'}`}>
                                        <td className="px-6 py-4 flex items-center space-x-2">

                                            <img src="/images/fashion.png" alt="" className="w-10 rounded-md" />
                                            <p>{active.product}</p>
                                        </td>
                                        <td className="px-6 py-4">{active.category}</td>
                                        <td className="px-6 py-4">
                                            <button className="bg-blue-600 w-24 py-1 px-2 text-white rounded-md">{active.quantity}</button>
                                        </td>
                                        <td className="px-6 py-4">{active.price}</td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>

                        {/* Card layout for small screens */}
                        <div className="grid grid-cols-1 gap-4 md:hidden">
                            {active.map((active, index) => (
                                <div key={index} className={`border p-4 rounded-lg shadow-sm ${index % 2 === 0 ? 'bg-gray-50' : 'bg-white'}`}>
                                    <div className="flex items-center space-x-2">

                                        <img src="/images/fashion.png" alt="" className="w-10 rounded-md" />
                                        <p className="font-medium">{active.product}</p>
                                    </div>
                                    <p className="text-gray-500 mt-2">Category: {active.category}</p>
                                    <p className="text-gray-500 mt-2">Quantity: {active.quantity}</p>
                                    <p className="text-gray-500 mt-2">Price: {active.price}</p>
                                </div>
                            ))}
                        </div>
                    </div>

                </div>
            }
        </>
    );
}

export function Completed({ staticState }: productProps) {
    return (
        <>
            {staticState ?
                <div className="flex items-center justify-center">
                    <div className="bg-white w-96 text-center p-10 rounded-lg my-8">
                        <img src="/icons/listicon.png" alt="Empty State" className="w-64 mx-auto mb-4" />
                        <h2 className="text-lg font-semibold text-gray-700">Oops! You currently do not have any Completed Orders</h2>
                    </div>
                </div>
                :
                <div className="w-full text-black opacity-50">
                    {/* Table */}
                    <div className="overflow-x-auto">
                        <h1 className="w-full text-lg font-semibold bg-white border-b border-gray-300 p-3">My Products</h1>

                        {/* Table for medium to large screens */}
                        <table className="min-w-full table-auto bg-white border-collapse hidden md:table">
                            <thead>
                                <tr className="bg-gray-100 text-left">
                                    <th className="px-6 py-4 font-medium text-gray-400">PRODUCT NAME</th>
                                    <th className="px-6 py-4 font-medium text-gray-400">CATEGORY</th>
                                    <th className="px-6 py-4 font-medium text-gray-400">QUANTITY</th>
                                    <th className="px-6 py-4 font-medium text-gray-400">PRICE</th>
                                </tr>
                            </thead>

                            <tbody>
                                {completed.map((completed, index) => (
                                    <tr key={index} className={`border-b ${index % 2 === 0 ? 'bg-gray-50' : 'bg-white'}`}>
                                        <td className="px-6 py-4 flex items-center space-x-2">

                                            <img src="/images/fashion.png" alt="" className="w-10 rounded-md" />
                                            <p>{completed.product}</p>
                                        </td>
                                        <td className="px-6 py-4">{completed.category}</td>
                                        <td className="px-6 py-4">
                                            <button className="bg-blue-600 w-24 py-1 px-2 text-white rounded-md">{completed.quantity}</button>
                                        </td>
                                        <td className="px-6 py-4">{completed.price}</td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>

                        {/* Card layout for small screens */}
                        <div className="grid grid-cols-1 gap-4 md:hidden">
                            {completed.map((completed, index) => (
                                <div key={index} className={`border p-4 rounded-lg shadow-sm ${index % 2 === 0 ? 'bg-gray-50' : 'bg-white'}`}>
                                    <div className="flex items-center space-x-2">

                                        <img src="/images/fashion.png" alt="" className="w-10 rounded-md" />
                                        <p className="font-medium">{completed.product}</p>
                                    </div>
                                    <p className="text-gray-500 mt-2">Category: {completed.category}</p>
                                    <p className="text-gray-500 mt-2">Quantity: {completed.quantity}</p>
                                    <p className="text-gray-500 mt-2">Price: {completed.price}</p>
                                </div>
                            ))}
                        </div>
                    </div>

                </div>
            }
        </>
    );
}
export function Cancelled({ staticState }: productProps) {
    return (
        <>
            {staticState ?
                <div className="flex items-center justify-center">
                    <div className="bg-white w-96 text-center p-10 rounded-lg my-8">
                        <img src="/icons/listicon.png" alt="Empty State" className="w-64 mx-auto mb-4" />
                        <h2 className="text-lg font-semibold text-gray-700">Oops! You currently do not have any Cancelled Orders</h2>
                    </div>
                </div>
                :
                <div className="w-full text-black opacity-50">
                    {/* Table */}
                    <div className="overflow-x-auto">
                        <h1 className="w-full text-lg font-semibold bg-white border-b border-gray-300 p-3">My Products</h1>

                        {/* Table for medium to large screens */}
                        <table className="min-w-full table-auto bg-white border-collapse hidden md:table">
                            <thead>
                                <tr className="bg-gray-100 text-left">
                                    <th className="px-6 py-4 font-medium text-gray-400">PRODUCT NAME</th>
                                    <th className="px-6 py-4 font-medium text-gray-400">CATEGORY</th>
                                    <th className="px-6 py-4 font-medium text-gray-400">QUANTITY</th>
                                    <th className="px-6 py-4 font-medium text-gray-400">PRICE</th>
                                </tr>
                            </thead>

                            <tbody>
                                {cancelled.map((cancelled, index) => (
                                    <tr key={index} className={`border-b ${index % 2 === 0 ? 'bg-gray-50' : 'bg-white'}`}>
                                        <td className="px-6 py-4 flex items-center space-x-2">

                                            <img src="/images/fashion.png" alt="" className="w-10 rounded-md" />
                                            <p>{cancelled.product}</p>
                                        </td>
                                        <td className="px-6 py-4">{cancelled.category}</td>
                                        <td className="px-6 py-4">
                                            <button className="bg-blue-600 w-24 py-1 px-2 text-white rounded-md">{cancelled.quantity}</button>
                                        </td>
                                        <td className="px-6 py-4">{cancelled.price}</td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>

                        {/* Card layout for small screens */}
                        <div className="grid grid-cols-1 gap-4 md:hidden">
                            {cancelled.map((cancelled, index) => (
                                <div key={index} className={`border p-4 rounded-lg shadow-sm ${index % 2 === 0 ? 'bg-gray-50' : 'bg-white'}`}>
                                    <div className="flex items-center space-x-2">

                                        <img src="/images/fashion.png" alt="" className="w-10 rounded-md" />
                                        <p className="font-medium">{cancelled.product}</p>
                                    </div>
                                    <p className="text-gray-500 mt-2">Category: {cancelled.category}</p>
                                    <p className="text-gray-500 mt-2">Quantity: {cancelled.quantity}</p>
                                    <p className="text-gray-500 mt-2">Price: {cancelled.price}</p>
                                </div>
                            ))}
                        </div>
                    </div>

                </div>
            }
        </>
    );
}   