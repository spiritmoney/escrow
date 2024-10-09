import { useState } from "react";
import Rating from "../components/Rating";

const products = [
    {
        product: 'Nike Shoes: Pink, Black & White',
        src: '/images/fashion.png',
        category: 'Fashion',
        store: 'Vhick\'s Fashion Store',
        status: 'Out for Delivery',
    },
    {
        product: 'Nike Shoes: Pink, Black & White',
        src: '/images/fashion.png',
        category: 'Fashion',
        store: 'Vhick\'s Fashion Store',
        status: 'Out for Delivery',
    },
    {
        product: 'Nike Shoes: Pink, Black & White',
        src: '/images/fashion.png',
        category: 'Fashion',
        store: 'Vhick\'s Fashion Store',
        status: 'Out for Delivery',
    },
    {
        product: 'Nike Shoes: Pink, Black & White',
        src: '/images/fashion.png',
        category: 'Fashion',
        store: 'Vhick\'s Fashion Store',
        status: 'Out for Delivery',
    },
    {
        product: 'Nike Shoes: Pink, Black & White',
        src: '/images/fashion.png',
        category: 'Fashion',
        store: 'Vhick\'s Fashion Store',
        status: 'Out for Delivery',
    },
    {
        product: 'Nike Shoes: Pink, Black & White',
        src: '/images/fashion.png',
        category: 'Fashion',
        store: 'Vhick\'s Fashion Store',
        status: 'Out for Delivery',
    },
];

const services = [
    {
        client: 'Kingsley Odim',
        title: 'Full Stack Developer',
        gig: 'Build a Landing Page for my busin...',
        dueOn: 'Sep 30',
        total: '180 Espees',
        status: 'In Progress..',
    },
    {
        client: 'Kingsley Odim',
        title: 'Full Stack Developer',
        gig: 'Build a Landing Page for my busin...',
        dueOn: 'Sep 30',
        total: '180 Espees',
        status: 'In Progress..',
    },
    {
        client: 'Kingsley Odim',
        title: 'Full Stack Developer',
        gig: 'Build a Landing Page for my busin...',
        dueOn: 'Sep 30',
        total: '180 Espees',
        status: 'In Progress..',
    },
    {
        client: 'Kingsley Odim',
        title: 'Full Stack Developer',
        gig: 'Build a Landing Page for my busin...',
        dueOn: 'Sep 30',
        total: '180 Espees',
        status: 'In Progress..',
    },
    {
        client: 'Kingsley Odim',
        title: 'Full Stack Developer',
        gig: 'Build a Landing Page for my busin...',
        dueOn: 'Sep 30',
        total: '180 Espees',
        status: 'In Progress..',
    },
    {
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
                <div key={index} className={`w-full relative p-3 flex items-center space-x-3 rounded-lg my-2 ${index % 2 === 0 ? 'bg-gray-50' : 'bg-white'}`}>
                    <img src={product.src} alt="" className="w-16 rounded-md" />

                    <span className="flex flex-col items-start">
                        <p className="text-black font-semibold">{product.product}</p>
                        <p className="text-black text-sm">{product.store}</p>
                        <Rating />
                    </span>

                    <div className="absolute right-5">
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
                            <tr key={index} className={`text-black flex items-center justify-between my-2 rounded-lg ${index % 2 === 0 ? 'bg-gray-50' : 'bg-white'}`}>
                                <td>
                                    <div className="px-6 py-4 flex items-center space-x-4">
                                        <img src="/images/profile3.png" alt="" className="w-16" />
                                        <div className="flex flex-col items-start">
                                            <p className="text-black text-lg font-medium">{service.client}</p>
                                            <p className="text-black text-[12px]">{service.title}</p>
                                            <Rating />
                                        </div>
                                    </div>

                                </td>
                                <td className="px-6 py-4">{service.gig}</td>
                                <td className="px-6 py-4">{service.dueOn}</td>
                                <td className="px-6 py-4">{service.total}</td>
                                <td className="px-6 py-4">
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
    const [viewNegotiation, setViewNegotiation] = useState(false);

    function togglePrice() {
        setViewNegotiation(!viewNegotiation);
    }

    return (
        <div className="w-full">
            <table className="w-full">
                <tbody className="w-full space-y-2">
                    <div className="relative w-full flex flex-col">
                        {history.map((item, index) => (
                            item.tag === 'service' ? (
                                <tr key={index} className={`text-black flex items-center justify-between my-2 rounded-lg bg-gray-100`}>
                                    <td>
                                        <div className="px-6 py-4 flex items-center space-x-4">
                                            <img src="/images/profile3.png" alt="" className="w-16" />
                                            <div className="flex flex-col items-start">
                                                <p className="text-black text-lg font-medium">{item.client}</p>
                                                <p className="text-black text-[12px]">{item.title}</p>
                                                <Rating />
                                            </div>
                                        </div>

                                    </td>
                                    <td className="px-6 py-4">{item.gig}</td>
                                    <td className="px-6 py-4">{item.dueOn}</td>
                                    <td className="px-6 py-4">{item.total}</td>
                                    <td className="px-6 py-4">
                                        <p className={`py-1 px-2 w-32 text-center text-white rounded-md ${item.status === 'Completed' ? 'bg-blue-600' : 'bg-red-700'}`}>{item.status}</p>
                                    </td>
                                </tr>
                            ) : (
                                <tr key={index} className={`text-black flex items-center justify-between my-2 rounded-lg bg-white`}>
                                    <td>
                                        <div className="px-6 py-4 flex items-center space-x-4">
                                            <img src={item.src} alt="" className="w-16 rounded-md" />
                                            <div className="flex flex-col items-start">
                                                <p className="text-black font-semibold">{item.product}</p>
                                                <p className="text-black text-sm">{item.store}</p>
                                                <Rating />
                                            </div>
                                        </div>

                                    </td>
                                    <td className="px-6 py-4">{item.date}</td>
                                    <td className="px-6 py-4">{item.price}</td>
                                    <td className="px-6 py-4">
                                        <p className={`py-1 px-2 w-32 text-center text-white rounded-md ${item.status === 'Delivered' ? 'bg-blue-600' : 'bg-red-700'}`}>{item.status}</p>
                                    </td>
                                </tr>
                            )
                        ))}
                        {viewNegotiation &&
                            <div className='absolute inset-0 mx-auto z-50 bg-white text-gray-700 font-medium rounded-lg w-96 h-96 p-5 flex flex-col space-y-2'>
                                <span className="flex items-center w-full justify-between">
                                    <p className="text-2xl font-medium text-black">Negotiation</p>
                                    <p onClick={togglePrice} className='text-blue-600 text-3xl cursor-pointer'>&times;</p>
                                </span>

                                <div className='lex flex-col space-y-2 py-5'>
                                    <p className='font-semibold text-sm'>Timeline</p>
                                    <div className='flex items-center space-x-2'>
                                        <span className="w-24 text-sm font-medium"><p>Start Date</p></span>
                                        <span className="flex items-center space-x-2 text-sm">
                                            <img src="/icons/calender.png" alt="" />
                                            <p>24 September 2024</p>
                                        </span>
                                    </div>

                                    <div className='flex items-center space-x-2'>
                                        <span className="w-24 text-sm font-medium"><p>End Date</p></span>
                                        <span className="flex items-center space-x-2 text-sm">
                                            <img src="/icons/calender.png" alt="" />
                                            <p>05 November 2024</p>
                                        </span>
                                    </div>

                                    <div className='flex items-center space-x-2'>
                                        <span className="w-24 text-sm font-medium"><p>Duration</p></span>
                                        <p className="text-sm">30 Days</p>
                                    </div>
                                </div>

                                <p className='font-semibold text-sm'>Price</p>
                                <span className='flex text-sm items-center space-x-5'>
                                    <p className='font-medium'>Amount Offer</p>
                                    <p>400 Espees</p>
                                </span>

                                <div className='flex items-center justify-between py-5 space-x-2'>
                                    <button
                                        className="bg-red-700 py-2 px-5 w-40 text-sm text-white rounded-md">
                                        Decline
                                    </button>

                                    <button
                                        className="bg-green-700 py-2 px-5 w-40 text-sm text-white rounded-md">
                                        Accept
                                    </button>
                                </div>
                            </div>
                        }
                    </div>
                </tbody>
            </table>


        </div>
    );
}