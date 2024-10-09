import Footer from "@/app/components/Footer";
import Heading from "@/app/components/Heading";
import Navbar from "@/app/components/Navbar";
import ProductCard from "@/app/components/ProductCard";
import { products } from '../../../data/Product';
import Link from "next/link";
import Rating from "@/app/components/Rating";

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

export default function VenoreProfle({ params }: { params: { id: string } }) {
    const productId = params.id;
    const product = products.find((s) => parseInt(s.id) === parseInt(productId));

    if (!product) {
        return <div>Product not found</div>;
    }

    return (
        <>
            <Navbar />

            <div className="p-10">
                <div className="md:relative bg-white w-full rounded-lg flex items-start justify-between p-5 mb-10">

                    <div className="flex items-start md:items-center space-x-3 md:space-x-10">
                        <img src="/images/profile4.png" alt="" className="w-16 md:w-24"/>

                        <div className="flex flex-col items-start space-y-1">
                            <h1 className="text-sm font-medium text-black">{product.vendor}</h1>
                            <p className="font-semibold text-black hover:text-blue-600">{product.storeName}</p>
                            <span className="flex items-center space-x-1 text-black">
                                <img src="/icons/location2.png" alt="" className="w-5" />
                                <p>Nigeria</p>
                            </span>
                            <Rating />
                        </div>
                    </div>

                    <div className='md:absolute md:top-8 md:right-10'>
                        <button className="px-3 md:px-6 py-2 mx-auto bg-blue-700 flex items-center space-x-2 text-white rounded-lg">
                            <img src="/icons/chat.png" alt="" className='w-6' />
                            <p className='hidden md:flex'>Send a Message</p>
                        </button>
                    </div>
                </div>

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

            <Footer />
        </>
    );
}