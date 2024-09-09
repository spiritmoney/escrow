
export default function Header() {
    return (
        <div className="px-20 py-10">
            <img className="z-0" src="/images/banner.png" alt=""/>

            <div className="-mt-36 ml-28">
            <div className="bg-white flex rounded-md justify-between items-center h-14 w-96 z-10">
                <input className="p-2 w-72 text-black outline-none" type="text" placeholder='Search products or services'/>
                <button className="bg-blue-600 p-2 m-2 w-9 rounded-md">
                    <img src="/icons/search2.png" alt=""/>
                </button>
            </div>
            </div>
        </div>
    );
}