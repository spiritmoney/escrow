import Link from 'next/link';

export default function Navbar() {
  return (
    <nav className="bg-white p-4 h-24 flex justify-cener px-20">
      <div className="container flex justify-center items-center space-x-5">
        <Link href="/" legacyBehavior>
          <a className="text-blue-600 flex-1 text-lg font-bold" >ESCROW</a>
        </Link>

        <div className='flex border border-gray-400 p-2 rounded-md'>
          <img src="/icons/search.png" alt="" />
          <input className='w-56 outline-none text-black mx-2' type="text" placeholder='Search products or services'/>
          <p className='text-gray-500 border-l border-gray-400 px-2'>Products</p>
          <img src="/icons/arrdown.png" alt="" width={20}/>
        </div>

        <div className="flex space-x-6">
          <Link href="/account" legacyBehavior>
            <a className="text-gray-500 flex items-center">
              <img className='m-1' src="/icons/user.png" width={20} alt="" />
              Account
              <img className='m-1' src="/icons/arrdown.png" width={20} alt="" />
            </a>
          </Link>
          <Link href="/" legacyBehavior>
            <a className="bg-blue-600 p-2 text-white rounded-md">Connect Wallet</a>
          </Link>
        </div>
      </div>
    </nav>
  );
}