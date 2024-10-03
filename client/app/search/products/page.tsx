import Footer from "@/app/components/Footer";
import Heading from "@/app/components/Heading";
import Navbar from "@/app/components/Navbar";
import ProductCard from "@/app/components/ProductCard";
import Link from "next/link";

const products = [
    { id: 1, name: 'Nike Sneakers', price: '10.5 Espees', src: '/images/fashion.png' },
    { id: 2, name: 'Nike Sneakers', price: '10.5 Espees', src: '/images/fashion.png' },
    { id: 3, name: 'Nike Sneakers', price: '10.5 Espees', src: '/images/fashion.png' },
    { id: 4, name: 'Nike Sneakers', price: '10.5 Espees', src: '/images/fashion.png' },
    { id: 5, name: 'Nike Sneakers', price: '10.5 Espees', src: '/images/fashion.png' },
    { id: 6, name: 'Nike Sneakers', price: '10.5 Espees', src: '/images/fashion.png' },
    { id: 7, name: 'Nike Sneakers', price: '10.5 Espees', src: '/images/fashion.png' },
    { id: 8, name: 'Nike Sneakers', price: '10.5 Espees', src: '/images/fashion.png' },
    { id: 9, name: 'Nike Sneakers', price: '10.5 Espees', src: '/images/fashion.png' },
    { id: 10, name: 'Nike Sneakers', price: '10.5 Espees', src: '/images/fashion.png' },
    { id: 11, name: 'Nike Sneakers', price: '10.5 Espees', src: '/images/fashion.png' },
    { id: 12, name: 'Nike Sneakers', price: '10.5 Espees', src: '/images/fashion.png' }
];

const related = [
    { id: 1, name: 'Nike Sneakers', price: '10.5 Espees', src: '/images/fashion.png' },
    { id: 2, name: 'Nike Sneakers', price: '10.5 Espees', src: '/images/fashion.png' },
    { id: 3, name: 'Nike Sneakers', price: '10.5 Espees', src: '/images/fashion.png' },
    { id: 4, name: 'Nike Sneakers', price: '10.5 Espees', src: '/images/fashion.png' },
    { id: 5, name: 'Nike Sneakers', price: '10.5 Espees', src: '/images/fashion.png' }
];

export default function ProductsSearch() {

    return (
        <>
            <Navbar />
            <div className="w-11/12 my-10 mx-auto">
                <span className="w-full flex items-center justify-between pb-5">
                    <h1 className="text-2xl text-black font-medium">Search</h1>

                    <Link href={"/"}>
                        <button className="text-blue-600 p-2">Close</button>
                    </Link>
                </span>

                <Heading text="Results for Nike Sneakers" />
                <div className="mx-auto grid grid-cols-4 gap-6 mb-20 rounded-lg">
                    {products.map(product => (
                        <Link key={product.id} href={'/product/1'}>
                            <ProductCard product={product} />
                        </Link>
                    ))}
                </div>

                <Heading text="Related Products" />
                <div className="mx-auto grid grid-cols-5 gap-6 mb-20 rounded-lg">
                    {related.map(product => (
                        <Link key={product.id} href={'/product/1'}>
                            <ProductCard product={product} />
                        </Link>
                    ))}
                </div>

            </div>
            <Footer />
        </>
    );
}