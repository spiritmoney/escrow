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
    { id: 1, name: 'Nike Sneakers', price: '10.5 Espees', src: '/images/fashion.png' },
    { id: 2, name: 'Nike Sneakers', price: '10.5 Espees', src: '/images/fashion.png' },
    { id: 3, name: 'Nike Sneakers', price: '10.5 Espees', src: '/images/fashion.png' },
    { id: 4, name: 'Nike Sneakers', price: '10.5 Espees', src: '/images/fashion.png' },
    { id: 5, name: 'Nike Sneakers', price: '10.5 Espees', src: '/images/fashion.png' }
];

export default function ProductsTab() {
    return (
        <>
            <ProductTypes />

            <div className="container mx-auto pt-6">
                <div className="grid grid-cols-4 gap-6 p-3 bg-white rounded-lg">
                    {productTypes.map(product => (
                        <ProductTypeCard key={product.id} product={product} />
                    ))}
                </div>
            </div>

            <Heading text="LATEST PRODUCTS" />
            <div className="mx-auto grid grid-cols-5 gap-6 rounded-lg">
                {products.map(product => (
                    <Link href={'/product/1'}>
                        <ProductCard key={product.id} product={product} />
                    </Link>
                ))}
            </div>

            <Heading text="TOP SELLING ITEMS" />
            <div className="mx-auto grid grid-cols-5 gap-6 rounded-lg">
                {products.map(product => (
                    <Link href={'/product/1'}>
                        <ProductCard key={product.id} product={product} />
                    </Link>
                ))}
            </div>
        </>
    );
}