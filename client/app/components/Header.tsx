"use client";

import Image from "next/image"
import Link from "next/link";
import { useState } from "react";

export default function Header() {
  return (
    <div className="relative w-full flex justify-center items-center pb-6 banner">
      <div className="relative w-full max-w-[1485px]">
        <Image src="/banner2.svg" alt="banner" width={1485} height={453.949} className="hidden lg:block" />
        <img src="/images/banner3.png" alt="" className="hidden md:flex lg:hidden w-full" />
        <img src="/images/banner2.png" alt="" className="md:hidden lg:hidden w-full" />
        <div className="absolute top-[64%] left-[5%] lg:top-[68%] md:left-[8.35%] transform -translate-y-1/2 w-[71%] md:w-[53.33%] lg:w-[33.33%]">
          <div className="p-3 bg-white flex rounded-md items-center w-full relative">
            <input
              className="pr-12 w-full text-black outline-none rounded-md"
              type="search"
              placeholder="Search products or services"
            />
            <Link href={"/search"}>
              <button className="absolute right-2 top-1/2 ml-2 transform -translate-y-1/2 bg-blue-600 p-2 rounded-md">
                <Image src="/icons/search2.png" alt="search" width={20} height={20} />
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export function GuestHeader() {
  const [hamburgerMenu, setHamburgerMenu] = useState(false);

  function toggleMenu() {
    setHamburgerMenu(!hamburgerMenu);
  }

  return (
    <div className="relative w-full overflow-hidden">
      <img src="/images/banner4.png" alt="" className="hidden lg:flex w-full" />
      <img src="/images/banner5.png" alt="" className="lg:hidden w-full" />

      {/* Hamburger Menu */}
      <div className={`absolute top-0 right-0 w-64 h-screen bg-white p-4 z-50 transform transition-transform duration-300 ease-in-out ${hamburgerMenu ? 'translate-x-0' : 'translate-x-full'}`}>
        <ul className='w-full'>
          <li onClick={toggleMenu} className='w-full flex items-end justify-end mb-8'>
            <p className='text-3xl text-blue-600 text-center font-semibold cursor-pointer bg-blue-100 border px-3 py-1 w-12 rounded-lg'>&times;</p>
          </li>
          <li className='py-2 w-full'>
            <Link href={'/auth/signin'}>
              <button
                className="w-full py-2 px-4 m-1 rounded-lg text-lg sm:text-xl font-semibold cursor-pointer text-white bg-blue-600"
              // onClick={() => handleTabClick("home")}
              >
                Sign In
              </button>
            </Link>
          </li>
          <li className='py-2 w-full'>
            <Link href={'/auth/register'}>
              <button
                className="w-full py-2 px-4 m-1 rounded-lg text-lg sm:text-xl font-semibold cursor-pointer text-white bg-blue-600"
              // onClick={() => handleTabClick("home")}
              >
                Create Account
              </button>
            </Link>
          </li>
        </ul>
      </div>


      <div className="w-full absolute top-0 flex justify-between items-center py-3 md:py-8 px-5 md:px-10 lg:px-14">
        <h1 className="text-lg text-white md:text-xl lg:text-2xl font-semibold">ESCROW</h1>

        <button onClick={toggleMenu} className='lg:hidden'>
          <img src="/icons/menu2.png" alt="" className='' />
        </button>

        <div className="hidden lg:flex items-center space-x-4">
          <Link href={"/auth/signin"}>
            <button className="bg-white rounded-lg w-40 p-3 text-blue-600">
              Sign In
            </button>
          </Link>
          <Link href={"/auth/register"}>
            <button className="bg-white rounded-lg w-40 p-3 text-blue-600">
              Create Account
            </button>
          </Link>
        </div>
      </div>

      <div className="absolute top-24 md:top-44 lg:top-[25%] max-sm:inset-x-0 max-sm:mx-auto max-lg:inset-x-0 max-lg:mx-auto  lg:left-32 w-11/12 md:w-10/12 lg:w-[540px] flex flex-col space-y-3 md:space-y-5">
        <h1 className="w-full text-white max-xs:text-2xl text-3xl md:text-5xl lg:text-6xl text-center font-medium md:font-semibold">Trade your goods and services with Espees</h1>
        <p className="w-full text-white text-[12px] text-center md:py-3 md:text-xl lg:text-sm">
          Experience secure and seamless trading of goods and services with Espees, the future of digital
          currency. Our cutting-edge Escrow platform harnesses the power of blockchain technology,
          ensuring transparency, fairness, and protection for every transaction. Whether you're buying or
          selling, we provide a trusted space for secure, reliable digital exchanges.
        </p>

        <Link href={"/auth/register"}> 
          <button className="bg-white text-sm md:text-xl text-medium rounded-md w-full p-2 lg:p-4 text-blue-600">
            Get Started
          </button>
        </Link>

        <Link href={"/auth/signin"}>
          <button className="bg-white text-sm md:text-xl text-medium rounded-md w-full p-2 lg:p-4 text-blue-600">
            Sign In
          </button>
        </Link>
      </div>
    </div>
  );
}