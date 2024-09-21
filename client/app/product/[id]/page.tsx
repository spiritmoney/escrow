import { useRouter } from 'next/router';
import { products } from '../../data/Product';
import Navbar from '@/app/components/Navbar';
import Footer from '@/app/components/Footer';
import Rating from '@/app/components/Rating';
import Heading from '@/app/components/Heading';

export default function ProductPage({ params }: { params: { id: string } }) {
    const productId = params.id;
    const product = products.find((s) => parseInt(s.id) === parseInt(productId));

    if (!product) {
        return <div>Product not found</div>;
    }

    return (
        <>
            <Navbar />
            <div className="container mx-auto p-5">
                <div className=" bg-white flex justify-evenly items-center p-7 space-x-7 rounded-lg">
                    {/* Product Image */}
                    <div>
                        <img src={product.image} alt={product.name} width={1000} className="rounded-lg" />
                    </div>

                    {/* Product Info */}
                    <div className="flex flex-col items-start">
                        <h1 className="text-5xl text-black">{product.name}</h1>
                        <p className="font-semibold text-black">{product.storeName}</p>
                
                        <div className='py-2'>
                            <Rating />
                        </div>

                        <p className="font-semibold text-blue-600">{product.category}</p>
                        <p className="text-sm text-gray-500 py-4">{product.description}</p>
                        <p className="text-sm text-gray-800">Quantity Available: {product.stock}</p>
                        <p className="text-sm text-gray-800">Price: {product.price} Espres</p>

                        <div className="flex flex-col space-y-4 py-3">
                            <button className="bg-blue-600 text-white px-4 py-2 w-96 rounded-lg">Buy Product</button>
                            <button className="bg-blue-600 text-white px-4 py-2 w-96 rounded-lg">Add to Cart</button>
                        </div>
                    </div>
                </div>

                {/* Similar Products */}
                <Heading text="SIMILAR PRODUCTS" />
                <div className="mt-10">
                    <div className="grid grid-cols-4 gap-6">
                        {product.similarProducts.map(similar => (
                            <div key={similar.id} className="p-4 bg-white hover:bg-gray-100 rounded-lg">
                                <img src={similar.image} alt={similar.name} className="rounded-lg shadow-md mb-2" />
                                <p className="text-gray-700 font-semibold">{similar.name}</p>
                                <p className="text-sm text-gray-500 font-semibold">{similar.price} Espres</p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
            <Footer />
        </>
    );
}