"use client";

import Link from 'next/link';
import { useState } from 'react';

export default function Navbar() {
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
    <nav className="bg-white p-4 h-24 flex justify-center px-14">
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