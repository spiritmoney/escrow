import ProductCard, { ProductTypeCard } from '../components/ProductCard';
import ProductTypes from '../components/ProductTypes';
import Heading from '../components/Heading';
import Link from 'next/link';

const productTypes = [
    { id: 1, name: 'GADGETS', src: '/images/gadgets.png' },
    { id: 2, name: 'APPLIANCES', src: '/images/appliances.png' },
    { id: 3, name: 'GAMING', src: '/images/gaming.png' },
    { id: 4, name: 'FASHION', src: '/images/fashion.png' },
    { id: 5, name: 'GADGETS', src: '/images/gadgets.png' },
    { id: 6, name: 'APPLIANCES', src: '/images/appliances.png' },
    { id: 7, name: 'GAMING', src: '/images/gaming.png' },
    { id: 8, name: 'FASHION', src: '/images/fashion.png' },
    { id: 9, name: 'GADGETS', src: '/images/gadgets.png' },
    { id: 10, name: 'APPLIANCES', src: '/images/appliances.png' },
    { id: 11, name: 'GAMING', src: '/images/gaming.png' },
    { id: 12, name: 'FASHION', src: '/images/fashion.png' },
];

const products = [
    { id: 1, name: 'Nike Sneakers', store: 'Vinicks Fashion Store', price: '10.5 Espees', src: '/images/fashion.png' },
    { id: 2, name: 'Nike Sneakers', store: 'Vinicks Fashion Store', price: '10.5 Espees', src: '/images/fashion.png' },
    { id: 3, name: 'Nike Sneakers', store: 'Vinicks Fashion Store', price: '10.5 Espees', src: '/images/fashion.png' },
    { id: 4, name: 'Nike Sneakers', store: 'Vinicks Fashion Store', price: '10.5 Espees', src: '/images/fashion.png' },
    { id: 5, name: 'Nike Sneakers', store: 'Vinicks Fashion Store', price: '10.5 Espees', src: '/images/fashion.png' },
    { id: 6, name: 'Nike Sneakers', store: 'Vinicks Fashion Store', price: '10.5 Espees', src: '/images/fashion.png' },
    { id: 7, name: 'Nike Sneakers', store: 'Vinicks Fashion Store', price: '10.5 Espees', src: '/images/fashion.png' },
    { id: 8, name: 'Nike Sneakers', store: 'Vinicks Fashion Store', price: '10.5 Espees', src: '/images/fashion.png' },
];

export default function ProductsTab() {
    return (
        <>
            <ProductTypes />

            <div className="w-full container mx-auto pt-6">
                <div className="min-w-full grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 md:gap-6 bg-white rounded-lg">
                    {productTypes.map(product => (
                        <ProductTypeCard key={product.id} product={product} />
                    ))}
                </div>
            </div>

            <Heading text="LATEST PRODUCTS" />
            <div className="mx-auto flex items-center overflow-scroll rounded-lg"
            style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}>
                {products.map(product => (
                    <Link key={product.id} href={'/store/product/1'}>
                        <ProductCard product={product} />
                    </Link>
                ))}
            </div> 

            <Heading text="TOP SELLING ITEMS" />
            <div className="mx-auto flex items-center overflow-scroll rounded-lg"
            style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}>
                {products.map(product => (
                    <Link key={product.id} href={'/store/product/1'}>
                        <ProductCard product={product} />
                    </Link>
                ))}
            </div>
        </>
    );
}