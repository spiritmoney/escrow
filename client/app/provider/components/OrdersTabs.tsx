
const orders = [
    {
        client: 'Emmanuel Charles',
        gig: 'Build a Landing Page for my busin...',
        dueOn: 'Sep 30',
        total: '180 Espees',
        status: 'New Order',
    },
    {
        client: 'Emmanuel Charles',
        gig: 'Build a Landing Page for my busin...',
        dueOn: 'Sep 30',
        total: '180 Espees',
        status: 'New Order',
    },
    {
        client: 'Emmanuel Charles',
        gig: 'Build a Landing Page for my busin...',
        dueOn: 'Sep 30',
        total: '180 Espees',
        status: 'New Order',
    },
    {
        client: 'Emmanuel Charles',
        gig: 'Build a Landing Page for my busin...',
        dueOn: 'Sep 30',
        total: '180 Espees',
        status: 'New Order',
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
    return (
        <>
            <div className="w-full p-8 text-black bg-white">
                {/* Table */}
                <div className="overflow-x-auto">
                    <h1 className="w-full text-lg font-semibold border-b border-gray-300 p-3">NEW ORDERS</h1>
                    <table className="min-w-full table-auto bg-white border-collapse">

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
                            {orders.map((order, index) => (
                                <tr key={index} className={`border-b ${index % 2 === 0 ? 'bg-gray-50' : 'bg-white'}`}>
                                    <td className="px-6 py-4 flex items-center space-x-1">
                                        <img src="/icons/star.png" alt="" className="-1" />
                                        <img src="/images/profile2.png" alt="" />
                                        <p>{order.client}</p>
                                    </td>
                                    <td className="px-6 py-4">{order.gig}</td>
                                    <td className="px-6 py-4">{order.dueOn}</td>
                                    <td className="px-6 py-4">{order.total}</td>
                                    <td className="px-6 py-4">
                                        <button className="bg-blue-600 py-1 px-2 text-white rounded-md">{order.status}</button>
                                    </td> 
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </>
    );
}

export function Active() {
    return (
        <>
            <div className="w-full p-8 text-black bg-white">
                {/* Table */}
                <div className="overflow-x-auto">
                    <h1 className="w-full text-lg font-semibold border-b border-gray-300 p-3">NEW ORDERS</h1>
                    <table className="min-w-full table-auto bg-white border-collapse">

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
                                        <img src="/icons/star.png" alt="" className="-1" />
                                        <img src="/images/profile2.png" alt="" />
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
                </div>
            </div>
        </>
    );
}

export function Completed() {
    return (
        <>
            <div className="w-full p-8 text-black bg-white">
                {/* Table */}
                <div className="overflow-x-auto">
                    <h1 className="w-full text-lg font-semibold border-b border-gray-300 p-3">NEW ORDERS</h1>
                    <table className="min-w-full table-auto bg-white border-collapse">

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
                                        <img src="/icons/star.png" alt="" className="-1" />
                                        <img src="/images/profile2.png" alt="" />
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
                </div>
            </div>
        </>
    );
}
export function Cancelled() {
    return (
        <>
            <div className="w-full p-8 text-black bg-white">
                {/* Table */}
                <div className="overflow-x-auto">
                    <h1 className="w-full text-lg font-semibold border-b border-gray-300 p-3">NEW ORDERS</h1>
                    <table className="min-w-full table-auto bg-white border-collapse">

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
                                        <img src="/icons/star.png" alt="" className="-1" />
                                        <img src="/images/profile2.png" alt="" />
                                        <p>{cancelled.client}</p>
                                    </td>
                                    <td className="px-6 py-4">{cancelled.gig}</td>
                                    <td className="px-6 py-4">{cancelled.dueOn}</td>
                                    <td className="px-6 py-4">{cancelled.total}</td>
                                    <td className="px-6 py-4">
                                        <button className="bg-blue-600 py-1 px-2 text-white rounded-md">{cancelled.status}</button>
                                    </td> 
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </>
    );
}