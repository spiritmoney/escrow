
const listings = [
    {
        product: 'Nike Shoes',
        category: 'Fashion',
        quantity: '120',
        price: '20 Espees',
    },
];
const active = [
    {
        product: 'Nike Shoes',
        category: 'Fashion',
        quantity: '2',
        price: '20 Espees',
    },
];
const completed = [
    {
        product: 'Nike Shoes',
        category: 'Fashion',
        quantity: '2',
        price: '20 Espees',
    },
];
const cancelled = [
    {
        product: 'Nike Shoes',
        category: 'Fashion',
        quantity: '2',
        price: '20 Espees',
    },
];

export default function Products() {
    return (
        <>
            <div className="w-full p-8 text-black bg-white">
                {/* Table */}
                <div className="overflow-x-auto">
                    <h1 className="w-full text-lg font-semibold border-b border-gray-300 p-3">My Products</h1>
                    <table className="min-w-full table-auto bg-white border-collapse">

                        <thead>
                            <tr className="bg-gray-100 text-left">
                                <th className="px-6 py-4 font-medium text-gray-400">PRODUCT NAME</th>
                                <th className="px-6 py-4 font-medium text-gray-400">CATEGORY</th>
                                <th className="px-6 py-4 font-medium text-gray-400">QUANTITY</th>
                                <th className="px-6 py-4 font-medium text-gray-400">PRICE</th>
                            </tr>
                        </thead>

                        <tbody>
                            {listings.map((listing, index) => (
                                <tr key={index} className={`border-b ${index % 2 === 0 ? 'bg-gray-50' : 'bg-white'}`}>
                                    <td className="px-6 py-4 flex items-center space-x-2">
                                        <img src="/icons/star.png" alt="" className="-1" />
                                        <img src="/images/fashion.png" alt="" className="w-10 rounded-md"/>
                                        <p>{listing.product}</p>
                                    </td>
                                    <td className="px-6 py-4">{listing.category}</td>
                                    <td className="px-6 py-4">
                                        <button className="bg-blue-600 w-24 py-1 px-2 text-white rounded-md">{listing.quantity}</button>
                                    </td>
                                    <td className="px-6 py-4">{listing.price}</td>
                                </tr>
                            ))}
                            {listings.map((listing, index) => (
                                <tr key={index} className={`border-b ${index % 2 === 0 ? 'bg-gray-50' : 'bg-white'}`}>
                                    <td className="px-6 py-4 flex items-center space-x-2">
                                        <img src="/icons/star.png" alt="" className="-1" />
                                        <img src="/images/fashion.png" alt="" className="w-10 rounded-md"/>
                                        <p>{listing.product}</p>
                                    </td>
                                    <td className="px-6 py-4">{listing.category}</td>
                                    <td className="px-6 py-4">
                                        <button className="bg-blue-600 w-24 py-1 px-2 text-white rounded-md">{listing.quantity}</button>
                                    </td>
                                    <td className="px-6 py-4">{listing.price}</td>
                                </tr>
                            ))}
                            {listings.map((listing, index) => (
                                <tr key={index} className={`border-b ${index % 2 === 0 ? 'bg-gray-50' : 'bg-white'}`}>
                                    <td className="px-6 py-4 flex items-center space-x-2">
                                        <img src="/icons/star.png" alt="" className="-1" />
                                        <img src="/images/fashion.png" alt="" className="w-10 rounded-md"/>
                                        <p>{listing.product}</p>
                                    </td>
                                    <td className="px-6 py-4">{listing.category}</td>
                                    <td className="px-6 py-4">
                                        <button className="bg-blue-600 w-24 py-1 px-2 text-white rounded-md">{listing.quantity}</button>
                                    </td>
                                    <td className="px-6 py-4">{listing.price}</td>
                                </tr>
                            ))}
                            {listings.map((listing, index) => (
                                <tr key={index} className={`border-b ${index % 2 === 0 ? 'bg-gray-50' : 'bg-white'}`}>
                                    <td className="px-6 py-4 flex items-center space-x-2">
                                        <img src="/icons/star.png" alt="" className="-1" />
                                        <img src="/images/fashion.png" alt="" className="w-10 rounded-md"/>
                                        <p>{listing.product}</p>
                                    </td>
                                    <td className="px-6 py-4">{listing.category}</td>
                                    <td className="px-6 py-4">
                                        <button className="bg-blue-600 w-24 py-1 px-2 text-white rounded-md">{listing.quantity}</button>
                                    </td>
                                    <td className="px-6 py-4">{listing.price}</td>
                                </tr>
                            ))}
                            {listings.map((listing, index) => (
                                <tr key={index} className={`border-b ${index % 2 === 0 ? 'bg-gray-50' : 'bg-white'}`}>
                                    <td className="px-6 py-4 flex items-center space-x-2">
                                        <img src="/icons/star.png" alt="" className="-1" />
                                        <img src="/images/fashion.png" alt="" className="w-10 rounded-md"/>
                                        <p>{listing.product}</p>
                                    </td>
                                    <td className="px-6 py-4">{listing.category}</td>
                                    <td className="px-6 py-4">
                                        <button className="bg-blue-600 w-24 py-1 px-2 text-white rounded-md">{listing.quantity}</button>
                                    </td>
                                    <td className="px-6 py-4">{listing.price}</td>
                                </tr>
                            ))}
                            {listings.map((listing, index) => (
                                <tr key={index} className={`border-b ${index % 2 === 0 ? 'bg-gray-50' : 'bg-white'}`}>
                                    <td className="px-6 py-4 flex items-center space-x-2">
                                        <img src="/icons/star.png" alt="" className="-1" />
                                        <img src="/images/fashion.png" alt="" className="w-10 rounded-md"/>
                                        <p>{listing.product}</p>
                                    </td>
                                    <td className="px-6 py-4">{listing.category}</td>
                                    <td className="px-6 py-4">
                                        <button className="bg-blue-600 w-24 py-1 px-2 text-white rounded-md">{listing.quantity}</button>
                                    </td>
                                    <td className="px-6 py-4">{listing.price}</td>
                                </tr>
                            ))}
                            {listings.map((listing, index) => (
                                <tr key={index} className={`border-b ${index % 2 === 0 ? 'bg-gray-50' : 'bg-white'}`}>
                                    <td className="px-6 py-4 flex items-center space-x-2">
                                        <img src="/icons/star.png" alt="" className="-1" />
                                        <img src="/images/fashion.png" alt="" className="w-10 rounded-md"/>
                                        <p>{listing.product}</p>
                                    </td>
                                    <td className="px-6 py-4">{listing.category}</td>
                                    <td className="px-6 py-4">
                                        <button className="bg-blue-600 w-24 py-1 px-2 text-white rounded-md">{listing.quantity}</button>
                                    </td>
                                    <td className="px-6 py-4">{listing.price}</td>
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
                    <h1 className="w-full text-lg font-semibold border-b border-gray-300 p-3">My Products</h1>
                    <table className="min-w-full table-auto bg-white border-collapse">

                        <thead>
                            <tr className="bg-gray-100 text-left">
                                <th className="px-6 py-4 font-medium text-gray-400">PRODUCT NAME</th>
                                <th className="px-6 py-4 font-medium text-gray-400">CATEGORY</th>
                                <th className="px-6 py-4 font-medium text-gray-400">QUANTITY</th>
                                <th className="px-6 py-4 font-medium text-gray-400">PRICE</th>
                            </tr>
                        </thead>

                        <tbody>
                            {active.map((active, index) => (
                                <tr key={index} className={`border-b ${index % 2 === 0 ? 'bg-gray-50' : 'bg-white'}`}>
                                    <td className="px-6 py-4 flex items-center space-x-2">
                                        <img src="/icons/star.png" alt="" className="-1" />
                                        <img src="/images/fashion.png" alt="" className="w-10 rounded-md"/>
                                        <p>{active.product}</p>
                                    </td>
                                    <td className="px-6 py-4">{active.category}</td>
                                    <td className="px-6 py-4">
                                        <button className="bg-blue-600 w-24 py-1 px-2 text-white rounded-md">{active.quantity}</button>
                                    </td>
                                    <td className="px-6 py-4">{active.price}</td>
                                </tr>
                            ))}
                            {active.map((active, index) => (
                                <tr key={index} className={`border-b ${index % 2 === 0 ? 'bg-gray-50' : 'bg-white'}`}>
                                    <td className="px-6 py-4 flex items-center space-x-2">
                                        <img src="/icons/star.png" alt="" className="-1" />
                                        <img src="/images/fashion.png" alt="" className="w-10 rounded-md"/>
                                        <p>{active.product}</p>
                                    </td>
                                    <td className="px-6 py-4">{active.category}</td>
                                    <td className="px-6 py-4">
                                        <button className="bg-blue-600 w-24 py-1 px-2 text-white rounded-md">{active.quantity}</button>
                                    </td>
                                    <td className="px-6 py-4">{active.price}</td>
                                </tr>
                            ))}
                            {active.map((active, index) => (
                                <tr key={index} className={`border-b ${index % 2 === 0 ? 'bg-gray-50' : 'bg-white'}`}>
                                    <td className="px-6 py-4 flex items-center space-x-2">
                                        <img src="/icons/star.png" alt="" className="-1" />
                                        <img src="/images/fashion.png" alt="" className="w-10 rounded-md"/>
                                        <p>{active.product}</p>
                                    </td>
                                    <td className="px-6 py-4">{active.category}</td>
                                    <td className="px-6 py-4">
                                        <button className="bg-blue-600 w-24 py-1 px-2 text-white rounded-md">{active.quantity}</button>
                                    </td>
                                    <td className="px-6 py-4">{active.price}</td>
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
                    <h1 className="w-full text-lg font-semibold border-b border-gray-300 p-3">My Products</h1>
                    <table className="min-w-full table-auto bg-white border-collapse">

                        <thead>
                            <tr className="bg-gray-100 text-left">
                                <th className="px-6 py-4 font-medium text-gray-400">PRODUCT NAME</th>
                                <th className="px-6 py-4 font-medium text-gray-400">CATEGORY</th>
                                <th className="px-6 py-4 font-medium text-gray-400">QUANTITY</th>
                                <th className="px-6 py-4 font-medium text-gray-400">PRICE</th>
                            </tr>
                        </thead>

                        <tbody>
                            {completed.map((completed, index) => (
                                <tr key={index} className={`border-b ${index % 2 === 0 ? 'bg-gray-50' : 'bg-white'}`}>
                                    <td className="px-6 py-4 flex items-center space-x-2">
                                        <img src="/icons/star.png" alt="" className="-1" />
                                        <img src="/images/fashion.png" alt="" className="w-10 rounded-md"/>
                                        <p>{completed.product}</p>
                                    </td>
                                    <td className="px-6 py-4">{completed.category}</td>
                                    <td className="px-6 py-4">
                                        <button className="bg-blue-600 w-24 py-1 px-2 text-white rounded-md">{completed.quantity}</button>
                                    </td>
                                    <td className="px-6 py-4">{completed.price}</td>
                                </tr>
                            ))}
                            {completed.map((completed, index) => (
                                <tr key={index} className={`border-b ${index % 2 === 0 ? 'bg-gray-50' : 'bg-white'}`}>
                                    <td className="px-6 py-4 flex items-center space-x-2">
                                        <img src="/icons/star.png" alt="" className="-1" />
                                        <img src="/images/fashion.png" alt="" className="w-10 rounded-md"/>
                                        <p>{completed.product}</p>
                                    </td>
                                    <td className="px-6 py-4">{completed.category}</td>
                                    <td className="px-6 py-4">
                                        <button className="bg-blue-600 w-24 py-1 px-2 text-white rounded-md">{completed.quantity}</button>
                                    </td>
                                    <td className="px-6 py-4">{completed.price}</td>
                                </tr>
                            ))}
                            {completed.map((completed, index) => (
                                <tr key={index} className={`border-b ${index % 2 === 0 ? 'bg-gray-50' : 'bg-white'}`}>
                                    <td className="px-6 py-4 flex items-center space-x-2">
                                        <img src="/icons/star.png" alt="" className="-1" />
                                        <img src="/images/fashion.png" alt="" className="w-10 rounded-md"/>
                                        <p>{completed.product}</p>
                                    </td>
                                    <td className="px-6 py-4">{completed.category}</td>
                                    <td className="px-6 py-4">
                                        <button className="bg-blue-600 w-24 py-1 px-2 text-white rounded-md">{completed.quantity}</button>
                                    </td>
                                    <td className="px-6 py-4">{completed.price}</td>
                                </tr>
                            ))}
                            {completed.map((completed, index) => (
                                <tr key={index} className={`border-b ${index % 2 === 0 ? 'bg-gray-50' : 'bg-white'}`}>
                                    <td className="px-6 py-4 flex items-center space-x-2">
                                        <img src="/icons/star.png" alt="" className="-1" />
                                        <img src="/images/fashion.png" alt="" className="w-10 rounded-md"/>
                                        <p>{completed.product}</p>
                                    </td>
                                    <td className="px-6 py-4">{completed.category}</td>
                                    <td className="px-6 py-4">
                                        <button className="bg-blue-600 w-24 py-1 px-2 text-white rounded-md">{completed.quantity}</button>
                                    </td>
                                    <td className="px-6 py-4">{completed.price}</td>
                                </tr>
                            ))}
                            {completed.map((completed, index) => (
                                <tr key={index} className={`border-b ${index % 2 === 0 ? 'bg-gray-50' : 'bg-white'}`}>
                                    <td className="px-6 py-4 flex items-center space-x-2">
                                        <img src="/icons/star.png" alt="" className="-1" />
                                        <img src="/images/fashion.png" alt="" className="w-10 rounded-md"/>
                                        <p>{completed.product}</p>
                                    </td>
                                    <td className="px-6 py-4">{completed.category}</td>
                                    <td className="px-6 py-4">
                                        <button className="bg-blue-600 w-24 py-1 px-2 text-white rounded-md">{completed.quantity}</button>
                                    </td>
                                    <td className="px-6 py-4">{completed.price}</td>
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
                    <h1 className="w-full text-lg font-semibold border-b border-gray-300 p-3">My Products</h1>
                    <table className="min-w-full table-auto bg-white border-collapse">

                        <thead>
                            <tr className="bg-gray-100 text-left">
                                <th className="px-6 py-4 font-medium text-gray-400">PRODUCT NAME</th>
                                <th className="px-6 py-4 font-medium text-gray-400">CATEGORY</th>
                                <th className="px-6 py-4 font-medium text-gray-400">QUANTITY</th>
                                <th className="px-6 py-4 font-medium text-gray-400">PRICE</th>
                            </tr>
                        </thead>

                        <tbody>
                            {cancelled.map((cancelled, index) => (
                                <tr key={index} className={`border-b ${index % 2 === 0 ? 'bg-gray-50' : 'bg-white'}`}>
                                    <td className="px-6 py-4 flex items-center space-x-2">
                                        <img src="/icons/star.png" alt="" className="-1" />
                                        <img src="/images/fashion.png" alt="" className="w-10 rounded-md"/>
                                        <p>{cancelled.product}</p>
                                    </td>
                                    <td className="px-6 py-4">{cancelled.category}</td>
                                    <td className="px-6 py-4">
                                        <button className="bg-blue-600 w-24 py-1 px-2 text-white rounded-md">{cancelled.quantity}</button>
                                    </td>
                                    <td className="px-6 py-4">{cancelled.price}</td>
                                </tr>
                            ))}
                            {cancelled.map((cancelled, index) => (
                                <tr key={index} className={`border-b ${index % 2 === 0 ? 'bg-gray-50' : 'bg-white'}`}>
                                    <td className="px-6 py-4 flex items-center space-x-2">
                                        <img src="/icons/star.png" alt="" className="-1" />
                                        <img src="/images/fashion.png" alt="" className="w-10 rounded-md"/>
                                        <p>{cancelled.product}</p>
                                    </td>
                                    <td className="px-6 py-4">{cancelled.category}</td>
                                    <td className="px-6 py-4">
                                        <button className="bg-blue-600 w-24 py-1 px-2 text-white rounded-md">{cancelled.quantity}</button>
                                    </td>
                                    <td className="px-6 py-4">{cancelled.price}</td>
                                </tr>
                            ))}
                            {cancelled.map((cancelled, index) => (
                                <tr key={index} className={`border-b ${index % 2 === 0 ? 'bg-gray-50' : 'bg-white'}`}>
                                    <td className="px-6 py-4 flex items-center space-x-2">
                                        <img src="/icons/star.png" alt="" className="-1" />
                                        <img src="/images/fashion.png" alt="" className="w-10 rounded-md"/>
                                        <p>{cancelled.product}</p>
                                    </td>
                                    <td className="px-6 py-4">{cancelled.category}</td>
                                    <td className="px-6 py-4">
                                        <button className="bg-blue-600 w-24 py-1 px-2 text-white rounded-md">{cancelled.quantity}</button>
                                    </td>
                                    <td className="px-6 py-4">{cancelled.price}</td>
                                </tr>
                            ))}
                            {cancelled.map((cancelled, index) => (
                                <tr key={index} className={`border-b ${index % 2 === 0 ? 'bg-gray-50' : 'bg-white'}`}>
                                    <td className="px-6 py-4 flex items-center space-x-2">
                                        <img src="/icons/star.png" alt="" className="-1" />
                                        <img src="/images/fashion.png" alt="" className="w-10 rounded-md"/>
                                        <p>{cancelled.product}</p>
                                    </td>
                                    <td className="px-6 py-4">{cancelled.category}</td>
                                    <td className="px-6 py-4">
                                        <button className="bg-blue-600 w-24 py-1 px-2 text-white rounded-md">{cancelled.quantity}</button>
                                    </td>
                                    <td className="px-6 py-4">{cancelled.price}</td>
                                </tr>
                            ))}

                        </tbody>
                    </table>
                </div>
            </div>
        </>
    );
}