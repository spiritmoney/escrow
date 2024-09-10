
export default function Header() {
    return (
        <div className=" w-11/12 mx-auto py-6 banner">
            <img className="z-0" src="/images/banner.png" alt="" />

            <div className="absolute top-96 left-96 transform -translate-x-1/2 -translate-y-1/2 mb-24 z-10 w-2/6">
                <div className="bg-white flex rounded-md justify-between items-center h-12 w-full ">
                    <input className="p-2 w-72 text-black outline-none" type="text" placeholder='Search products or services' />
                    <button className="bg-blue-600 p-2 m-2 w-9 rounded-md">
                        <img src="/icons/search2.png" alt="" />
                    </button>
                </div>
            </div>
        </div>
    );
}