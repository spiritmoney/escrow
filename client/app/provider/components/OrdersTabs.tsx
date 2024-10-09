import { useState } from "react";

const gigs = [
    {
        client: 'Emmanuel Charles',
        gig: 'Build a Landing Page for my busin...',
        dueOn: 'Sep 30',
        total: '180 Espees',
    },
    {
        client: 'Emmanuel Charles',
        gig: 'Build a Landing Page for my busin...',
        dueOn: 'Sep 30',
        total: '180 Espees',
    },
    {
        client: 'Emmanuel Charles',
        gig: 'Build a Landing Page for my busin...',
        dueOn: 'Sep 30',
        total: '180 Espees',
    },
    {
        client: 'Emmanuel Charles',
        gig: 'Build a Landing Page for my busin...',
        dueOn: 'Sep 30',
        total: '180 Espees',
    },
    {
        client: 'Emmanuel Charles',
        gig: 'Build a Landing Page for my busin...',
        dueOn: 'Sep 30',
        total: '180 Espees',
    },
];
const active = [
    {
        client: 'Emmanuel Charles',
        gig: 'Build a Landing Page for my busin...',
        dueOn: 'Sep 30',
        total: '180 Espees',
        status: 'Active',
    },
    {
        client: 'Emmanuel Charles',
        gig: 'Build a Landing Page for my busin...',
        dueOn: 'Sep 30',
        total: '180 Espees',
        status: 'Active',
    },
    {
        client: 'Emmanuel Charles',
        gig: 'Build a Landing Page for my busin...',
        dueOn: 'Sep 30',
        total: '180 Espees',
        status: 'Active',
    },
];
const completed = [
    {
        client: 'Emmanuel Charles',
        gig: 'Build a Landing Page for my busin...',
        dueOn: 'Sep 30',
        total: '180 Espees',
        status: 'Completed',
    },
    {
        client: 'Emmanuel Charles',
        gig: 'Build a Landing Page for my busin...',
        dueOn: 'Sep 30',
        total: '180 Espees',
        status: 'Completed',
    },
    {
        client: 'Emmanuel Charles',
        gig: 'Build a Landing Page for my busin...',
        dueOn: 'Sep 30',
        total: '180 Espees',
        status: 'Completed',
    },
    {
        client: 'Emmanuel Charles',
        gig: 'Build a Landing Page for my busin...',
        dueOn: 'Sep 30',
        total: '180 Espees',
        status: 'Completed',
    },
    {
        client: 'Emmanuel Charles',
        gig: 'Build a Landing Page for my busin...',
        dueOn: 'Sep 30',
        total: '180 Espees',
        status: 'Completed',
    },
];
const cancelled = [
    {
        client: 'Emmanuel Charles',
        gig: 'Build a Landing Page for my busin...',
        dueOn: 'Sep 30',
        total: '180 Espees',
        status: 'Cancelled',
    },
    {
        client: 'Emmanuel Charles',
        gig: 'Build a Landing Page for my busin...',
        dueOn: 'Sep 30',
        total: '180 Espees',
        status: 'Cancelled',
    },
    {
        client: 'Emmanuel Charles',
        gig: 'Build a Landing Page for my busin...',
        dueOn: 'Sep 30',
        total: '180 Espees',
        status: 'Cancelled',
    },
    {
        client: 'Emmanuel Charles',
        gig: 'Build a Landing Page for my busin...',
        dueOn: 'Sep 30',
        total: '180 Espees',
        status: 'Cancelled',
    },
];

export default function NewOrders() {
    const [viewNotification, setViewNotification] = useState(false);
    const [negotiating, setNegotiating] = useState(false);
    const [hourlyRate, setHourlyRate] = useState(10); // Default hourly rate

    function toggleNotify() {
        setViewNotification(!viewNotification);
    }
    function toggleNegotiate() {
        setNegotiating(!negotiating)
    }

    // Function to increment the rate
    const incrementRate = () => {
        setHourlyRate(prevRate => prevRate + 1);
    };

    // Function to decrement the rate
    const decrementRate = () => {
        if (hourlyRate > 1) { // Ensure the rate doesn't go below 1
            setHourlyRate(prevRate => prevRate - 1);
        }
    };

    return (
        <div className='w-full'>
            {viewNotification && <div className="fixed w-full h-full inset-0 bg-black bg-opacity-50 z-20"></div>}

            <div className='relative container w-full mb-16 text-black'>
                {/* Table */}
                <div className="overflow-x-auto">
                    <h1 className="w-full text-lg font-semibold border-b bg-white border-gray-300 p-3">NEW ORDERS</h1>

                    {/* Table for medium to large screens */}
                    <table className="min-w-full table-auto bg-white border-collapse hidden md:table">
                        <thead>
                            <tr className="bg-gray-100 text-left">
                                <th className="px-6 py-4 font-medium text-gray-400">CLIENT</th>
                                <th className="px-6 py-4 font-medium text-gray-400">GIG</th>
                                <th className="px-6 py-4 font-medium text-gray-400">DUE ON</th>
                                <th className="px-6 py-4 font-medium text-gray-400">TOTAL</th>
                                <th className="px-6 py-4 font-medium text-gray-400"> </th>
                            </tr>
                        </thead>

                        <tbody>
                            {gigs.map((gig, index) => (
                                <tr key={index} className={`border-b ${index % 2 === 0 ? 'bg-gray-50' : 'bg-white'}`}>
                                    <td className="px-6 py-4 flex items-center space-x-1">
                                        <img src="/images/profile2.png" alt="" className="w-8 h-8 rounded-full" />
                                        <p>{gig.client}</p>
                                    </td>
                                    <td className="px-6 py-4">{gig.gig}</td>
                                    <td className="px-6 py-4">{gig.dueOn}</td>
                                    <td className="px-6 py-4">{gig.total}</td>
                                    <td className="px-6 py-4">
                                        <button onClick={toggleNotify} className="bg-blue-600 py-1 px-5 text-white rounded-md">View</button>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>

                    {/* Card layout for small screens */}
                    <div className="grid grid-cols-1 gap-4 md:hidden">
                        {gigs.map((gig, index) => (
                            <div key={index} className={`border w-full flex flex-col p-4 rounded-lg shadow-sm ${index % 2 === 0 ? 'bg-gray-50' : 'bg-white'}`}>
                                <div className="flex items-center space-x-2">
                                    <img src="/images/profile2.png" alt="" className="w-8 h-8 rounded-full" />
                                    <p className="font-medium">{gig.client}</p>
                                </div>
                                <p className="text-gray-500 mt-2">Gig: {gig.gig}</p>
                                <p className="text-gray-500 mt-2">Due On: {gig.dueOn}</p>
                                <p className="text-gray-500 mt-2">Total: {gig.total}</p>
                                <div className="mx-auto w-full">
                                    <button onClick={toggleNotify} className="bg-blue-600 py-1 px-5 mt-2 w-full text-white rounded-md">View</button>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>


                {viewNotification &&
                    <div className='fixed w-[320px] md:w-[550px] top-5 inset-x-0 mx-auto z-30 bg-white p-5 rounded-lg shadow-lg flex flex-col space-y-2'>
                        {negotiating && <div className="fixed w-full h-full inset-0 bg-black bg-opacity-50 z-40"></div>}
                        <div className='relative w-full mx-auto'>
                            <div className="relative w-full flex items-center space-x-5 pb-3">
                                <img src="/images/profile2.png" alt="" />

                                <div>
                                    <p>Emmanuel Charles</p>
                                    <span className='flex items-center space-x-2'>
                                        <img src="/icons/location2.png" alt="" className='w-4' />
                                        <p className='text-gray-600'>Nigeria</p>
                                    </span>
                                </div>

                                <p onClick={toggleNotify} className='text-blue-600 text-3xl absolute top-0 right-0 cursor-pointer'>&times;</p>
                            </div>

                            <p className='font-semibold text-sm'>Service Description</p>
                            <p className='text-gray-600 text-sm'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod, ut dolorem esse quae, excepturi blanditiis sequi natus cumque, incidunt necessitatibus explicabo obcaecati veritatis dolor culpa officiis error libero dolorum! Quia.</p>

                            <div className='py-3 flex-col space-y-2'>
                                <p className='font-semibold text-sm'>Additional Documents</p>
                                <div className='flex items-center space-x-2'>
                                    <img src="/icons/docs.png" alt="" />
                                    <img src="/icons/docs.png" alt="" />
                                </div>
                            </div>

                            <div className='lex flex-col space-y-2'>
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
                            </div>

                            <div className='py-3 flex flex-col space-y-2'>
                                <p className='font-semibold text-sm'>Mile Stone</p>
                                <div className='flex items-center space-x-2'>
                                    <span className="w-24 text-sm font-medium"><p>Date</p></span>
                                    <span className="flex items-center space-x-2 text-sm">
                                        <img src="/icons/calender.png" alt="" />
                                        <p>24 September 2024</p>
                                    </span>
                                </div>
                                <div className='flex space-x-6'>
                                    <span className="w-24 text-sm font-medium"><p>Description</p></span>
                                    <span className="text-sm">
                                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit consectetur dicta officia sunt ipsa dolor dolorem</p>
                                    </span>
                                </div>
                            </div>

                            <p className='font-semibold text-sm'>Price</p>
                            <span className='flex text-sm items-center space-x-5'>
                                <p className='font-medium'>Amount Offer</p>
                                <p>400 Espees</p>
                            </span>

                            <div className='flex items-center justify-between py-5 space-x-2'>
                                <button
                                    onClick={toggleNotify}
                                    className="bg-red-700 py-2 px-5 w-40 text-[12px] md:text-sm text-white rounded-md">
                                    Decline
                                </button>
                                <button
                                    onClick={toggleNegotiate}
                                    className="bg-blue-600 py-2 px-5 w-40 text-[12px] md:text-sm text-white rounded-md">
                                    Negotiate
                                </button>
                                <button
                                    onClick={toggleNotify}
                                    className="bg-green-700 py-2 px-5 w-40 text-[12px] md:text-sm text-white rounded-md">
                                    Accept
                                </button>
                            </div>

                            {negotiating &&
                                <div className='absolute inset-0 mx-auto z-50 bg-white rounded-lg w-[280px] md:w-[500px] h-[450px] p-5 flex flex-col space-y-2'>
                                    <p onClick={toggleNegotiate} className='text-blue-600 text-3xl text-right cursor-pointer'>&times;</p>
                                    <p className='font-semibold text-center pb-3'>Negotiate Offer</p>

                                    <div>
                                        <p className='text-[12px] font-semibold'>Start Date</p>
                                        <input type="date" name="" className='w-full border-2 border-gray-400 rounded-lg p-2' />
                                    </div>

                                    <div>
                                        <p className='text-[12px] font-semibold'>Due Date</p>
                                        <input type="date" name="" className='w-full border-2 border-gray-400 rounded-lg p-2' />
                                    </div>

                                    <div className='pb-5'>
                                        <label htmlFor="hourly-rate" className='text-[12px] font-semibold'>Amount in Espees</label>
                                        <div className='flex items-center border-2 border-gray-400 rounded-lg'>

                                            {/* Rate Input */}
                                            <input
                                                id="hourly-rate"
                                                type="text"
                                                value={`${hourlyRate}`}
                                                readOnly
                                                className='w-full py-2 px-5 font-semibold outline-none rounded-lg'
                                            />

                                            <div className='flex flex-col items-end space-y-2 p-3'>
                                                {/* Increment Button */}
                                                <button onClick={incrementRate}>
                                                    <img src="/icons/calcUp.png" width={15} alt="" />
                                                </button>
                                                {/* Decrement Button */}
                                                <button onClick={decrementRate}>
                                                    <img src="/icons/calcDown.png" width={15} alt="" />
                                                </button>
                                            </div>

                                        </div>
                                    </div>

                                    <button
                                        onClick={() => { toggleNotify(); toggleNegotiate(); }}
                                        className='text-white rounded-lg bg-blue-600 w-full p-2'>
                                        Negotiate
                                    </button>
                                </div>
                            }
                        </div>
                    </div>
                }
            </div>
        </div>
    )
}

export function Active() {
    return (
        <>
            <div className="w-full text-black">
                {/* Table */}
                <div className="overflow-x-auto">
                    <h1 className="w-full text-lg font-semibold bg-white border-b border-gray-300 p-3">ACTIVE</h1>

                    {/* Table for medium to large screens */}
                    <table className="min-w-full table-auto bg-white border-collapse hidden md:table">
                        <thead>
                            <tr className="bg-gray-100 text-left">
                                <th className="px-6 py-4 font-medium text-gray-400">CLIENT</th>
                                <th className="px-6 py-4 font-medium text-gray-400">GIG</th>
                                <th className="px-6 py-4 font-medium text-gray-400">DUE ON</th>
                                <th className="px-6 py-4 font-medium text-gray-400">TOTAL</th>
                                <th className="px-6 py-4 font-medium text-gray-400">STATUS</th>
                            </tr>
                        </thead>

                        <tbody>
                            {active.map((active, index) => (
                                <tr key={index} className={`border-b ${index % 2 === 0 ? 'bg-gray-50' : 'bg-white'}`}>
                                    <td className="px-6 py-4 flex items-center space-x-1">
                                        <img src="/icons/star.png" alt="" className="w-6 h-6" />
                                        <img src="/images/profile2.png" alt="" className="w-8 h-8 rounded-full" />
                                        <p>{active.client}</p>
                                    </td>
                                    <td className="px-6 py-4">{active.gig}</td>
                                    <td className="px-6 py-4">{active.dueOn}</td>
                                    <td className="px-6 py-4">{active.total}</td>
                                    <td className="px-6 py-4">
                                        <button className="bg-blue-600 py-1 px-2 text-white rounded-md">{active.status}</button>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>

                    {/* Card layout for small screens */}
                    <div className="grid grid-cols-1 gap-4 md:hidden">
                        {active.map((active, index) => (
                            <div key={index} className={`border flex flex-col p-4 rounded-lg shadow-sm ${index % 2 === 0 ? 'bg-gray-50' : 'bg-white'}`}>
                                <div className="flex items-center space-x-2">
                                    <img src="/icons/star.png" alt="" className="w-6 h-6" />
                                    <img src="/images/profile2.png" alt="" className="w-8 h-8 rounded-full" />
                                    <p className="font-medium">{active.client}</p>
                                </div>
                                <p className="text-gray-500 mt-2">Gig: {active.gig}</p>
                                <p className="text-gray-500 mt-2">Due On: {active.dueOn}</p>
                                <p className="text-gray-500 mt-2">Total: {active.total}</p>
                                <div className="mx-auto w-full">
                                    <button className="bg-blue-600 py-1 px-2 mt-2 w-full text-white rounded-md">{active.status}</button>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

            </div>
        </>
    );
}

export function Completed() {
    return (
        <>
            <div className="w-full text-black">
                {/* Table */}
                <div className="overflow-x-auto">
                    <h1 className="w-full text-lg font-semibold bg-white border-b border-gray-300 p-3">COMPLETED</h1>

                    {/* Table for medium to large screens */}
                    <table className="min-w-full table-auto bg-white border-collapse hidden md:table">
                        <thead>
                            <tr className="bg-gray-100 text-left">
                                <th className="px-6 py-4 font-medium text-gray-400">CLIENT</th>
                                <th className="px-6 py-4 font-medium text-gray-400">GIG</th>
                                <th className="px-6 py-4 font-medium text-gray-400">DUE ON</th>
                                <th className="px-6 py-4 font-medium text-gray-400">TOTAL</th>
                                <th className="px-6 py-4 font-medium text-gray-400">STATUS</th>
                            </tr>
                        </thead>

                        <tbody>
                            {completed.map((completed, index) => (
                                <tr key={index} className={`border-b ${index % 2 === 0 ? 'bg-gray-50' : 'bg-white'}`}>
                                    <td className="px-6 py-4 flex items-center space-x-1">
                                        <img src="/icons/star.png" alt="" className="w-6 h-6" />
                                        <img src="/images/profile2.png" alt="" className="w-8 h-8 rounded-full" />
                                        <p>{completed.client}</p>
                                    </td>
                                    <td className="px-6 py-4">{completed.gig}</td>
                                    <td className="px-6 py-4">{completed.dueOn}</td>
                                    <td className="px-6 py-4">{completed.total}</td>
                                    <td className="px-6 py-4">
                                        <button className="bg-blue-600 py-1 px-2 text-white rounded-md">{completed.status}</button>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>

                    {/* Card layout for small screens */}
                    <div className="grid grid-cols-1 gap-4 md:hidden">
                        {completed.map((completed, index) => (
                            <div key={index} className={`border p-4 rounded-lg flex flex-col shadow-sm ${index % 2 === 0 ? 'bg-gray-50' : 'bg-white'}`}>
                                <div className="flex items-center space-x-2">
                                    <img src="/icons/star.png" alt="" className="w-6 h-6" />
                                    <img src="/images/profile2.png" alt="" className="w-8 h-8 rounded-full" />
                                    <p className="font-medium">{completed.client}</p>
                                </div>
                                <p className="text-gray-500 mt-2">Gig: {completed.gig}</p>
                                <p className="text-gray-500 mt-2">Due On: {completed.dueOn}</p>
                                <p className="text-gray-500 mt-2">Total: {completed.total}</p>
                                <div className="mx-auto w-full">
                                    <button className="bg-blue-600 py-1 px-2 mt-2 w-full text-white rounded-md">{completed.status}</button>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

            </div>
        </>
    );
}
export function Cancelled() {
    return (
        <>
            <div className="w-full text-black">
                {/* Table */}
                <div className="overflow-x-auto">
                    <h1 className="w-full text-lg font-semibold bg-white border-b border-gray-300 p-3">CANCELLED</h1>

                    {/* Table for medium to large screens */}
                    <table className="min-w-full table-auto bg-white border-collapse hidden md:table">
                        <thead>
                            <tr className="bg-gray-100 text-left">
                                <th className="px-6 py-4 font-medium text-gray-400">CLIENT</th>
                                <th className="px-6 py-4 font-medium text-gray-400">GIG</th>
                                <th className="px-6 py-4 font-medium text-gray-400">DUE ON</th>
                                <th className="px-6 py-4 font-medium text-gray-400">TOTAL</th>
                                <th className="px-6 py-4 font-medium text-gray-400">STATUS</th>
                            </tr>
                        </thead>

                        <tbody>
                            {cancelled.map((cancelled, index) => (
                                <tr key={index} className={`border-b ${index % 2 === 0 ? 'bg-gray-50' : 'bg-white'}`}>
                                    <td className="px-6 py-4 flex items-center space-x-1">
                                        <img src="/icons/star.png" alt="" className="w-6 h-6" />
                                        <img src="/images/profile2.png" alt="" className="w-8 h-8 rounded-full" />
                                        <p>{cancelled.client}</p>
                                    </td>
                                    <td className="px-6 py-4">{cancelled.gig}</td>
                                    <td className="px-6 py-4">{cancelled.dueOn}</td>
                                    <td className="px-6 py-4">{cancelled.total}</td>
                                    <td className="px-6 py-4">
                                        <button className="bg-red-700 py-1 px-2 text-white rounded-md">{cancelled.status}</button>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>

                    {/* Card layout for small screens */}
                    <div className="grid grid-cols-1 gap-4 md:hidden">
                        {cancelled.map((cancelled, index) => (
                            <div key={index} className={`border p-4 flex flex-col rounded-lg shadow-sm ${index % 2 === 0 ? 'bg-gray-50' : 'bg-white'}`}>
                                <div className="flex items-center space-x-2">
                                    <img src="/icons/star.png" alt="" className="w-6 h-6" />
                                    <img src="/images/profile2.png" alt="" className="w-8 h-8 rounded-full" />
                                    <p className="font-medium">{cancelled.client}</p>
                                </div>
                                <p className="text-gray-500 mt-2">Gig: {cancelled.gig}</p>
                                <p className="text-gray-500 mt-2">Due On: {cancelled.dueOn}</p>
                                <p className="text-gray-500 mt-2">Total: {cancelled.total}</p>
                                <div className="mx-auto w-full">
                                    <button className="bg-red-700 py-1 px-2 mt-2 w-full text-white rounded-md">{cancelled.status}</button>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

            </div>
        </>
    );
}