import { useState } from "react";
import Rating from "../components/Rating";
import Link from "next/link";

const products = [
    {
        id: 1,
        product: 'Nike Shoes: Pink, Black & White',
        src: '/images/fashion.png',
        category: 'Fashion',
        store: 'Vhick\'s Fashion Store',
        status: 'Out for Delivery',
    },
    {
        id: 1,
        product: 'Nike Shoes: Pink, Black & White',
        src: '/images/fashion.png',
        category: 'Fashion',
        store: 'Vhick\'s Fashion Store',
        status: 'Out for Delivery',
    },
    {
        id: 1,
        product: 'Nike Shoes: Pink, Black & White',
        src: '/images/fashion.png',
        category: 'Fashion',
        store: 'Vhick\'s Fashion Store',
        status: 'Out for Delivery',
    },
    {
        id: 1,
        product: 'Nike Shoes: Pink, Black & White',
        src: '/images/fashion.png',
        category: 'Fashion',
        store: 'Vhick\'s Fashion Store',
        status: 'Out for Delivery',
    },
    {
        id: 1,
        product: 'Nike Shoes: Pink, Black & White',
        src: '/images/fashion.png',
        category: 'Fashion',
        store: 'Vhick\'s Fashion Store',
        status: 'Out for Delivery',
    },
    {
        id: 1,
        product: 'Nike Shoes: Pink, Black & White',
        src: '/images/fashion.png',
        category: 'Fashion',
        store: 'Vhick\'s Fashion Store',
        status: 'Out for Delivery',
    },
];

const services = [
    {
        id: 1,
        client: 'Kingsley Odim',
        title: 'Full Stack Developer',
        gig: 'Build a Landing Page for my busin...',
        dueOn: 'Sep 30',
        total: '180 Espees',
        status: 'In Progress..',
    },
    {
        id: 1,
        client: 'Kingsley Odim',
        title: 'Full Stack Developer',
        gig: 'Build a Landing Page for my busin...',
        dueOn: 'Sep 30',
        total: '180 Espees',
        status: 'In Progress..',
    },
    {
        id: 1,
        client: 'Kingsley Odim',
        title: 'Full Stack Developer',
        gig: 'Build a Landing Page for my busin...',
        dueOn: 'Sep 30',
        total: '180 Espees',
        status: 'In Progress..',
    },
    {
        id: 1,
        client: 'Kingsley Odim',
        title: 'Full Stack Developer',
        gig: 'Build a Landing Page for my busin...',
        dueOn: 'Sep 30',
        total: '180 Espees',
        status: 'In Progress..',
    },
    {
        id: 1,
        client: 'Kingsley Odim',
        title: 'Full Stack Developer',
        gig: 'Build a Landing Page for my busin...',
        dueOn: 'Sep 30',
        total: '180 Espees',
        status: 'In Progress..',
    },
    {
        id: 1,
        client: 'Kingsley Odim',
        title: 'Full Stack Developer',
        gig: 'Build a Landing Page for my busin...',
        dueOn: 'Sep 30',
        total: '180 Espees',
        status: 'In Progress..',
    },
];

const history = [
    {
        tag: 'service',
        client: 'Kingsley Odim',
        title: 'Full Stack Developer',
        gig: 'Build a Landing Page for my busin...',
        dueOn: 'Sep 30',
        total: '180 Espees',
        status: 'Completed',
    },
    {
        tag: 'product',
        product: 'Nike Shoes: Pink, Black & White',
        src: '/images/fashion.png',
        category: 'Fashion',
        date: 'Sep 30',
        price: '15 Espees',
        store: 'Vhick\'s Fashion Store',
        status: 'Delivered',
    },
    {
        tag: 'service',
        client: 'Kingsley Odim',
        title: 'Full Stack Developer',
        gig: 'Build a Landing Page for my busin...',
        dueOn: 'Sep 30',
        total: '180 Espees',
        status: 'Cancelled',
    },
    {
        tag: 'product',
        product: 'Nike Shoes: Pink, Black & White',
        src: '/images/fashion.png',
        category: 'Fashion',
        date: 'Sep 30',
        price: '15 Espees',
        store: 'Vhick\'s Fashion Store',
        status: 'Returned',
    },
    {
        tag: 'service',
        client: 'Kingsley Odim',
        title: 'Full Stack Developer',
        gig: 'Build a Landing Page for my busin...',
        dueOn: 'Sep 30',
        total: '180 Espees',
        status: 'Completed',
    },
    {
        tag: 'product',
        product: 'Nike Shoes: Pink, Black & White',
        src: '/images/fashion.png',
        category: 'Fashion',
        date: 'Sep 30',
        price: '15 Espees',
        store: 'Vhick\'s Fashion Store',
        status: 'Cancelled',
    },

];

export default function ProductOrders() {
    const [checkedItems, setCheckedItems] = useState(
        new Array(products.length).fill(true) // Initialize all checkboxes as checked
    );
    const [checkout, setCheckout] = useState(false);

    // to track quantity for each product
    const [quantities, setQuantities] = useState(new Array(products.length).fill(1));

    const handleCheckboxChange = (index: number) => {
        const updatedCheckedItems = [...checkedItems];
        updatedCheckedItems[index] = !updatedCheckedItems[index]; // Toggle the specific checkbox
        setCheckedItems(updatedCheckedItems);
    };

    function toggleCheckout() {
        setCheckout(!checkout);
    }

    // Increment product quantity
    const incrementQuantity = (index: number) => {
        const updatedQuantities = [...quantities];
        updatedQuantities[index] += 1;
        setQuantities(updatedQuantities);
    };

    // Decrement product quantity
    const decrementQuantity = (index: number) => {
        const updatedQuantities = [...quantities];
        if (updatedQuantities[index] > 1) {   // ensure it's not below 1
            updatedQuantities[index] -= 1;
        }
        setQuantities(updatedQuantities);
    };


    return (
        <div className="relative flex flex-col items-center">
            {checkout && <div className="fixed w-full h-full inset-0 bg-black bg-opacity-50 z-40"></div>}
            {products.map((product, index) => (
                <div key={index} className={`w-full relative p-3 flex items-center rounded-lg my-2 ${index % 2 === 0 ? 'bg-gray-50' : 'bg-white'}`}>
                    <Link href={`product/${product.id}`} className="flex items-start space-x-3">
                        <img src={product.src} alt="" className="w-16 rounded-md" />

                        <span className="flex flex-col items-start">
                            <p className="text-black font-semibold">{product.product}</p>
                            <p className="text-black text-sm">{product.store}</p>
                            <Rating />

                            <p className="bg-blue-600 py-1 px-2 mt-2 text-white rounded-md md:hidden">{product.status}</p>
                        </span>
                    </Link>

                    <div className="absolute right-5 hidden md:block">
                        <p className="bg-blue-600 py-1 px-2 text-white rounded-md">{product.status}</p>
                    </div>
                </div>
            ))}
        </div>
    );
}
export function ServiceOrders() {
    return (
        <div className="w-full">
            <table className="w-full">
                <tbody className="w-full space-y-2">
                    <div className=" w-full flex flex-col">
                        {services.map((service, index) => (
                            <tr key={index} className={`text-black flex items-start justify-between p-3 my-2 rounded-lg ${index % 2 === 0 ? 'bg-gray-50' : 'bg-white'}`}>
                                <td>
                                    <Link href={`/service/${service.id}`}>
                                        <div className="py-1 flex items-start space-x-4 cursor-pointer">
                                            <img src="/images/profile3.png" alt="" className="w-12 pt-1 md:w-16" />
                                            <div className="flex flex-col items-start">
                                                <p className="text-black text-sm md:text-lg font-medium">{service.client}</p>
                                                <p className="text-black text-[12px]">{service.title}</p>
                                                <Rating />
                                                <p className="pt-4 text-[12px] text-gray-500 md:hidden">{service.gig}</p>
                                            </div>
                                        </div>
                                    </Link>
                                </td>
                                <td className="px-6 py-4 hidden md:block">{service.gig}</td>

                                <td className="flex flex-col ml-5 w-32 md:hidden">
                                    <p className="text-sm font-medium">{service.dueOn}</p>
                                    <p className="text-sm py-2">{service.total}</p>
                                    <p className="bg-blue-600 py-1 px-2 text-center text-white text-[12px] rounded-md">{service.status}</p>
                                </td>

                                <td className="px-6 py-4 hidden md:block">{service.dueOn}</td>
                                <td className="px-6 py-4 hidden md:block">{service.total}</td>
                                <td className="px-6 py-4 hidden md:block">
                                    <button className="bg-blue-600 py-1 px-2 text-white rounded-md">{service.status}</button>
                                </td>
                            </tr>
                        ))}
                    </div>
                </tbody>
            </table>
        </div>

    );
}
export function History() {
    return (
        <div className="w-full">
            <table className="w-full">
                <tbody className="w-full space-y-2">
                    <div className="relative w-full flex flex-col">
                        {history.map((item, index) => (
                            item.tag === 'service' ? (
                                <tr key={index} className={`w-full text-black flex items-start justify-between p-3 my-2 rounded-lg bg-gray-100`}>
                                    <td>
                                        <div className="py-1 flex items-start space-x-4 ">
                                            <Link href={'/service/1'} className="w-14 h-14 pt-1 md:w-16 md:h-16 rounded-lg" >
                                                <img src="/images/profile3.png" alt="" className="w-12 pt-1 md:w-16" />
                                            </Link>
                                            <div className="flex flex-col items-start">
                                                <p className="text-black text-sm md:text-lg font-medium">{item.client}</p>
                                                <p className="text-black text-[12px]">{item.title}</p>
                                                <Rating />
                                                <p className="pt-4 text-[12px] text-gray-500 md:hidden">{item.gig}</p>
                                            </div>
                                        </div>
                                    </td>
                                    <td className="px-6 py-4 hidden md:block">{item.gig}</td>

                                    <td className="flex flex-col pl-5 w-28 md:hidden">
                                        <p className="text-sm font-medium">{item.dueOn}</p>
                                        <p className="text-sm py-2">{item.total}</p>
                                        <p className={`py-1 px-2 text-center text-white text-[12px] rounded-md ${item.status === 'Completed' ? 'bg-blue-600' : 'bg-red-700'}`}>{item.status}</p>
                                    </td>

                                    <td className="px-6 py-4 hidden md:block">{item.dueOn}</td>
                                    <td className="px-6 py-4 hidden md:block">{item.total}</td>
                                    <td className="px-6 py-4 hidden md:block">
                                        <p className={`py-1 px-2 w-32 text-center text-white rounded-md ${item.status === 'Completed' ? 'bg-blue-600' : 'bg-red-700'}`}>{item.status}</p>
                                    </td>
                                </tr>
                            ) : (
                                <tr key={index} className={`text-black flex items-start justify-between p-3 my-2 rounded-lg bg-white`}>
                                    <td>
                                        <div className="py-1 flex items-start space-x-4">
                                            <Link href={'/product/1'} className="w-14 h-14 pt-1 md:w-16 md:h-16 rounded-lg" >
                                                <img src={item.src} alt=""  className="w-full h-full pt-1 rounded-lg" />
                                            </Link>
                                            <div className="flex flex-col items-start">
                                                <p className="text-black text-sm md:text-lg font-medium">{item.product}</p>
                                                <p className="text-black text-[12px]">{item.store}</p>
                                                <Rating />
                                            </div>
                                        </div>

                                    </td>

                                    <td className="flex flex-col pl-5 w-28 md:hidden">
                                        <p className="text-sm font-medium">{item.date}</p>
                                        <p className="text-sm py-2">{item.price}</p>
                                        <p className={`py-1 px-2 text-center text-white text-[12px] rounded-md ${item.status === 'Delivered' ? 'bg-blue-600' : 'bg-red-700'}`}>{item.status}</p>
                                    </td>
                                    
                                    <td className="px-6 py-4 hidden md:block">{item.date}</td>
                                    <td className="px-6 py-4 hidden md:block">{item.price}</td>
                                    <td className="px-6 py-4 hidden md:block">
                                        <p className={`py-1 px-2 w-32 text-center text-white rounded-md ${item.status === 'Delivered' ? 'bg-blue-600' : 'bg-red-700'}`}>{item.status}</p>
                                    </td>
                                </tr>
                            )
                        ))}
                    </div>
                </tbody>
            </table>


        </div>
    );
}