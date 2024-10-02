import { useState } from "react";
import Rating from "./Rating";
import Checkout from "./Checkout";

const products = [
    {
        product: 'Nike Shoes: Pink, Black & White',
        src: '/images/fashion.png',
        category: 'Fashion',
        store: 'Vhick\'s Fashion Store',
    },
    {
        product: 'Nike Shoes: Pink, Black & White',
        src: '/images/fashion.png',
        category: 'Fashion',
        store: 'Vhick\'s Fashion Store',
    },
    {
        product: 'Nike Shoes: Pink, Black & White',
        src: '/images/fashion.png',
        category: 'Fashion',
        store: 'Vhick\'s Fashion Store',
    },
    {
        product: 'Nike Shoes: Pink, Black & White',
        src: '/images/fashion.png',
        category: 'Fashion',
        store: 'Vhick\'s Fashion Store',
    },
    {
        product: 'Nike Shoes: Pink, Black & White',
        src: '/images/fashion.png',
        category: 'Fashion',
        store: 'Vhick\'s Fashion Store',
    },
    {
        product: 'Nike Shoes: Pink, Black & White',
        src: '/images/fashion.png',
        category: 'Fashion',
        store: 'Vhick\'s Fashion Store',
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

const negotiations = [
    {
        client: 'Kingsley Odim',
        title: 'Full Stack Developer',
        gig: 'Build a Landing Page for my busin...',
    },
    {
        client: 'Kingsley Odim',
        title: 'Full Stack Developer',
        gig: 'Build a Landing Page for my busin...',
    },
    {
        client: 'Kingsley Odim',
        title: 'Full Stack Developer',
        gig: 'Build a Landing Page for my busin...',
    },
    {
        client: 'Kingsley Odim',
        title: 'Full Stack Developer',
        gig: 'Build a Landing Page for my busin...',
    },
    {
        client: 'Kingsley Odim',
        title: 'Full Stack Developer',
        gig: 'Build a Landing Page for my busin...',
    },
    {
        client: 'Kingsley Odim',
        title: 'Full Stack Developer',
        gig: 'Build a Landing Page for my busin...',
    },
];

export default function ProductsCart() {
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
                <div key={index} className="w-full relative bg-white p-3 flex items-center space-x-3 rounded-lg my-2">
                    <img src={product.src} alt="" className="w-16 rounded-md" />

                    <span className="flex flex-col items-start">
                        <p className="text-black font-semibold">{product.product}</p>
                        <p className="text-black text-sm">{product.store}</p>
                        <Rating />
                    </span>

                    <div className="absolute text-black right-5 flex flex-col space-y-2 items-center">
                        <input type="checkbox" name="" id=""
                            checked={checkedItems[index]}
                            onChange={() => handleCheckboxChange(index)}
                            className="w-6 h-6 border-2 border-blue-600" />
                        <span className="text-sm flex items-center space-x-1">
                            <button onClick={() => decrementQuantity(index)} className="text-lg font-medium">-</button>
                            <p className="text-blue-600 text-base">{quantities[index]}</p>
                            <button onClick={() => incrementQuantity(index)} className="text-lg font-medium">+</button>
                        </span>
                    </div>
                </div>
            ))}

            <button
                onClick={toggleCheckout}
                className="bg-blue-600 text-white p-2 rounded-lg w-72 mt-7">
                Checkout Now
            </button>

            {checkout &&
                <div className="absolute z-50">
                    <Checkout toggleCheckout={toggleCheckout} />
                </div>
            }
        </div>
    );
}
export function ServicesCart() {
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
export function Negotiations() {
    const [viewNegotiation, setViewNegotiation] = useState(false);

    function togglePrice() {
        setViewNegotiation(!viewNegotiation);
    }

    return (
        <div className="w-full">
            {viewNegotiation && <div className="fixed w-full h-full inset-0 bg-black bg-opacity-50 z-40"></div>}
            <table className="w-full">
                <tbody className="w-full space-y-2">
                    <div className="relative w-full flex flex-col">
                        {negotiations.map((service, index) => (
                            <tr key={index} className={` text-black flex items-center justify-between my-2 rounded-lg ${index % 2 === 0 ? 'bg-gray-50' : 'bg-white'}`}>
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
                                <td className="px-6 py-4">
                                    <button onClick={togglePrice} className="bg-blue-600 py-1 px-2 text-white rounded-md">View Negotiation</button>
                                </td>
                            </tr>
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