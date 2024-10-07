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
          <div className='flex border border-gray-400 p-2 rounded-md'>
            <img src="/icons/search.png" alt="" />
            <input className='w-56 outline-none text-black mx-2' type="text" placeholder='Search products or services' />
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

        <div className="relative flex space-x-6">
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

          <button onClick={togglePopup} className="bg-blue-600 p-2 text-white px-5 rounded-md">
            My Wallet
          </button>
          {isPopupVisible && (
            <FundWallet togglePopup={togglePopup} />
          )}

          <div onClick={toggleOptions} className={isOptionsVisible ? "w-48 bg-gray-100 shadow-lg rounded-t-lg text-gray-500 flex items-start justify-center cursor-pointer" : "text-gray-500 flex items-start justify-center cursor-pointer"}>
            <img className='m-1' src="/images/profile.png" width={30} alt="" />
            <span className=''>
              <h2>Kingsley Odim</h2>
              <h4 className='text-sm text-blue-600'>Client</h4>
            </span>
            <img className='m-1' src={isOptionsVisible ? "/icons/arrup.png" : "/icons/arrdown.png"} width={20} alt="" />
          </div>
          {isOptionsVisible && (
            <ul className='absolute top-9 right-0 z-10 w-48 mt-2 p-4 flex flex-col items-center rounded-b-lg shadow-lg bg-gray-50'>
              <Link href={'/provider/freelancer/dashboard'}>
                <li className="cursor-pointer w-full border-b px-4 py-2 text-gray-700 
                hover:bg-gray-100">
                  My Dashboard
                </li>
              </Link>
              <li className="cursor-pointer w-full border-b px-4 py-2 text-gray-700 
              hover:bg-gray-100">
                Orders
              </li>
              <li className="cursor-pointer w-full border-b px-4 py-2 text-gray-700 
              hover:bg-gray-100">
                Wishlist
              </li>
              <li className="cursor-pointer w-full border-b px-4 py-2 text-gray-700 
              hover:bg-gray-100">
                Feedback
              </li>
              <Link href={'/auth/signin'}>
                <li className="cursor-pointer w-full px-4 py-2 text-red-800 
                hover:bg-gray-100">
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
          <div className='flex border border-gray-400 p-2 rounded-md'>
            <img src="/icons/search.png" alt="" />
            <input className='w-56 outline-none text-black mx-2' type="text" placeholder='Search products or services' />
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