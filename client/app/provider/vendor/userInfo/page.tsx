import Link from "next/link";

export default function page() {
    return (
        <div className='w-screen bg-white flex items-center justify-center'>
            <div className="container bg-white flex items-center justify-center text-black w-full h-screen">
                <div className='border-2 border-gray-300 rounded-lg p-10 w-[380px] md:w-[550px] flex flex-col space-y-3'>
                    <div className='w-full flex items-center justify-between'>
                        <h1 className='text-2xl font-semibold'>Vendor Profile</h1>
                    </div>

                    <p className='text-sm'>Kindly Note, this is what your client will see</p>

                    <div className='flex flex-col items-start'>
                        <img id="profile-image" src="/images/placeholder.png" alt="Profile Photo" />
                        <label className='font-semibold text-blue-600 pt-3 cursor-pointer' htmlFor="profile-image-input">+ Add Profile Photo for your brand/business</label>
                        <input className='hidden' type="file" id="profile-image-input" accept="image/*" />
                    </div>
                    
                    <div>
                        <p className='text-[12px] font-semibold'>Business/Brand Name</p>
                        <input type="text" className='w-full border-2 border-gray-400 rounded-lg p-2' />
                    </div>


                    <div className='w-full flex py-4 items-center justify-between'>
                        <Link href={'/provider/vendor/dashboard'}>
                            <button className='w-32 md:w-44 p-3 text-sm rounded-lg bg-blue-100 text-blue-600'>
                                Back
                            </button>
                        </Link>

                        <Link href={'/provider/vendor/dashboard'}>
                            <button className='w-32 md:w-44 p-3 text-sm rounded-lg bg-blue-600 text-white'>
                                Save
                            </button>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
}