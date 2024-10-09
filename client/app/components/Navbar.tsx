"use client";

import Link from 'next/link';
import Image from "next/image";
import { useState } from 'react';
import FundWallet from './FundWallet';

export default function Navbar() {
  const [selectedOption, setSelectedOption] = useState("Products");
  const [isDropdownVisible, setIsDropdownVisible] = useState(false);
  const [isPopupVisible, setIsPopupVisible] = useState(false);
  const [isOptionsVisible, setIsOptionsVisible] = useState(false);

  function togglePopup() {
    setIsPopupVisible(!isPopupVisible);
    isOptionsVisible && setIsOptionsVisible(!isOptionsVisible);
  }

  function toggleOptions() {
    setIsOptionsVisible(!isOptionsVisible);
    isPopupVisible && setIsPopupVisible(!isPopupVisible);
  }

  function toggleDropdown() {
    setIsDropdownVisible(!isDropdownVisible);
  }
  function handleSelect(option: string) {
    setSelectedOption(option);
    setIsDropdownVisible(false);
  }

  return (
    <nav className="bg-white p-4 h-24 flex justify-center px-14 w-full border-b border-gray-300">
      <div className="container flex justify-center items-center space-x-5">
        <Link href="/" legacyBehavior>
          <a className="text-blue-600 flex-1 text-lg font-bold" >ESCROW</a>
        </Link>

        <div className='relative'>
          <div className='flex items-center border border-gray-400 p-1 rounded-md'>
            {/* <img src="/icons/search.png" alt="" /> */}
            <input className='w-60 outline-none text-black mx-2' type="search" placeholder='Search products or services' />

            <Link href={selectedOption === "Products" ? "/search/products" : "/search/services"}>
              <button className="bg-blue-600 p-2 mr-2 rounded-md">
                <img src="/icons/search2.png" alt="search" width={20} height={20} />
              </button>
            </Link>


            <p className='text-gray-500 border-l border-gray-400 px-2'>{selectedOption}</p>
            <button onClick={toggleDropdown}>
              <img src="/icons/arrdown.png" alt="" width={20} /></button>

          </div>
          {isDropdownVisible && (
            <ul className='absolute top-9 right-1 w-28 mt-2 rounded-lg shadow-lg bg-white'>
              <li className="cursor-pointer block rounded-lg px-4 py-2 text-gray-700 
              hover:bg-gray-100" onClick={() => handleSelect(selectedOption === "Products" ? "Services" : "Products")}>
                {selectedOption === "Products" ? "Services" : "Products"}
              </li>
            </ul>
          )}
        </div>

        <div className="relative flex items-center space-x-6">
          <Link href={'/cart'}>
            <button className="bg-blue-600 p-2 text-white px-5 rounded-md flex items-center">
              <Image
                src="/cart1.svg"
                width={30}
                height={30}
                alt="KingsChat"
                className="w-5 h-5 mr-2"
              />
              My Cart
            </button>
          </Link>
          <button onClick={togglePopup} className="bg-blue-600 p-2 text-white px-5 rounded-md">
            My Wallet
          </button>
          {isPopupVisible && (
            <FundWallet togglePopup={togglePopup} />
          )}

          <div onClick={toggleOptions} className={isOptionsVisible ? "w-48 bg-gray-100 rounded-t-lg text-gray-500 flex items-start justify-center cursor-pointer" : "text-gray-500 flex items-start justify-center cursor-pointer"}>
            <img className='m-1' src="/images/profile.png" width={30} alt="" />
            <span className=''>
              <h2>Kingsley Odim</h2>
              <h4 className='text-sm text-blue-600'>Client</h4>
            </span>
            <img className='m-1' src={isOptionsVisible ? "/icons/arrup.png" : "/icons/arrdown.png"} width={20} alt="" />
          </div>
          {isOptionsVisible && (
            <ul className='absolute top-9 right-0 z-10 w-48 mt-2 p-4 flex flex-col items-center rounded-b-lg shadow-lg bg-gray-50'>
              <Link href={'/provider/freelancer/dashboard'} className="cursor-pointer w-full border-b px-4 py-2 text-gray-500 font-semibold 
                hover:bg-gray-100">
                <li>
                  My Profile
                </li>
              </Link>
              <Link href={'/orders'} className="cursor-pointer w-full border-b px-4 py-2 text-gray-500 font-semibold 
                hover:bg-gray-100">
                <li>
                  Orders
                </li>
              </Link>
              {/* <li className="cursor-pointer w-full border-b px-4 py-2 text-gray-500 font-semibold 
              hover:bg-gray-100">
                Wishlist
              </li> */}
              <li className="cursor-pointer w-full border-b px-4 py-2 text-gray-500 font-semibold 
              hover:bg-gray-100">
                Support
              </li>
              <Link href={'/auth/signin'} className="cursor-pointer w-full px-4 py-2 text-red-800 font-semibold 
                hover:bg-gray-100">
                <li>
                  Logout
                </li>
              </Link>

            </ul>
          )}

        </div>
      </div>
    </nav>
  );
}

export function GuestNavbar() {
  const [selectedOption, setSelectedOption] = useState("Products");
  const [isDropdownVisible, setIsDropdownVisible] = useState(false);

  function toggleDropdown() {
    setIsDropdownVisible(!isDropdownVisible);
  }
  function handleSelect(option: string) {
    setSelectedOption(option);
    setIsDropdownVisible(false);
  }

  return (
    <nav className="w-screen bg-white p-4 h-24 flex justify-center px-14 border-b border-gray-300">
      <div className="container flex justify-center items-center space-x-5">
        <Link href="/" legacyBehavior>
          <a className="text-blue-600 flex-1 text-lg font-bold" >ESCROW</a>
        </Link>

        <div className='relative'>
          <div className='flex items-center border border-gray-400 p-1 rounded-md'>
            {/* <img src="/icons/search.png" alt="" /> */}
            <input className='w-60 outline-none text-black mx-2' type="search" placeholder='Search products or services' />
            <Link href={selectedOption === "Products" ? "/search/products" : "/search/services"}>
              <button className="bg-blue-600 p-2 mr-2 rounded-md">
                <img src="/icons/search2.png" alt="search" width={20} height={20} />
              </button>
            </Link>
            <p className='text-gray-500 border-l border-gray-400 px-2'>{selectedOption}</p>

            <button onClick={toggleDropdown}>
              <img src="/icons/arrdown.png" alt="" width={20} /></button>

          </div>
          {isDropdownVisible && (
            <ul className='absolute top-9 right-1 w-28 mt-2 rounded-lg shadow-lg bg-white z-10'>
              <li className="cursor-pointer block rounded-lg px-4 py-2 text-gray-700 
              hover:bg-gray-100" onClick={() => handleSelect(selectedOption === "Products" ? "Services" : "Products")}>
                {selectedOption === "Products" ? "Services" : "Products"}
              </li>
            </ul>
          )}
        </div>


        <Link className="bg-blue-600 p-2 text-white px-5 rounded-md" href={'/auth/signin'}>
          Sign In
        </Link>
        <Link className="bg-blue-600 p-2 text-white px-5 rounded-md" href={'/auth/register'}>
          Create Account
        </Link>
      </div>
    </nav>
  );
}