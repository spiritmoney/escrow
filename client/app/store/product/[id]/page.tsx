"use client";

import { products } from '../../../data/Product';
import Navbar from '@/app/components/Navbar';
import Footer from '@/app/components/Footer';
import Rating from '@/app/components/Rating';
import Heading from '@/app/components/Heading';
import { useState } from 'react';
import Checkout from '@/app/components/Checkout';
import Link from 'next/link';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export default function ProductPage({ params }: { params: { id: string } }) {
    const productId = params.id;
    const product = products.find((s) => parseInt(s.id) === parseInt(productId));
    const [checkout, setCheckout] = useState(false);

    function toggleCheckout() {
        setCheckout(!checkout);
    }

    const addToCart = () => {
        toast.success("Product Added Successfully!", {
            // className: "text-white bg-blue-600",
            position: "top-right",
            autoClose: 3000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
          });
    }

    if (!product) {
        return <div>Product not found</div>; 
    }

    return (
        <>
            <Navbar />
            <div className="relaive container mx-auto p-5">
                {checkout && <div className="fixed w-full h-full inset-0 bg-black bg-opacity-50 z-40"></div>}
                <div className=" bg-white md:flex justify-evenly items-center p-7 space-y-3 md:space-x-7 rounded-lg">
                    {/* Product Image */}
                    <div>
                        <img src={product.image} alt={product.name} width={1000} className="rounded-lg" />
                    </div>

                    {/* Product Info */}
                    <div className="w-full flex flex-col items-start">
                        <h1 className="text-3xl md:text-5xl text-black">{product.name}</h1>

                        <Link href={'/store/1'}>
                            <p className="font-semibold text-black hover:text-blue-600">{product.storeName}</p>
                        </Link>

                        <div className='py-2'>
                            <Rating />
                        </div>

                        <p className="font-semibold text-blue-600">{product.category}</p>
                        <p className="text-sm text-gray-500 py-4">{product.description}</p>
                        <p className="text-sm text-gray-800">Quantity Available: {product.stock}</p>
                        <p className="text-sm text-gray-800">Price: {product.price} Espres</p>

                        <div className="w-full flex flex-col space-y-4 py-3">
                            <button onClick={toggleCheckout} className="bg-blue-600 text-white px-4 py-2 w-full md:w-96 rounded-lg">Buy Product</button>
                            <button 
                            onClick={addToCart}
                            className="bg-blue-600 text-white px-4 py-2 w-full md:w-96 rounded-lg">
                                Add to Cart
                            </button>
                        </div>
                    </div>

                    {checkout &&
                        <div>
                            <Checkout toggleCheckout={toggleCheckout} />
                        </div>
                    }
                </div>

                {/* Similar Products */}
                <Heading text="SIMILAR PRODUCTS" />
                <div className="mt-3">
                    <div className="mx-auto flex items-center overflow-scroll rounded-lg"
                    style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}>
                        {product.similarProducts.map(similar => (
                            <div key={similar.id} className="min-w-52 p-4 mr-4 bg-white hover:bg-gray-100 rounded-lg">
                                <img src={similar.image} alt={similar.name} className="rounded-lg shadow-md mb-2" />
                                <p className="text-gray-700 font-semibold">{similar.name}</p>
                                <p className="text-sm text-gray-500 font-semibold">{similar.store}</p>
                                <p className="text-sm text-gray-700 font-semibold">{similar.price}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
            <Footer />
        </>
    );
}