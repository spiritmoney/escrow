"use client";

import Navbar from "@/app/components/Navbar";
import Image from "next/image";
import Link from "next/link"; 
import React from "react";

const page = () => {
  return (
    <main className="bg-white w-screen h-screen flex flex-col">
      <div className="flex-1 flex items-center justify-center">
        <div className="bg-white p-8 rounded-lg shadow-md border-2 border-[#CACACA] w-[639px] text-black">
          <h2 className="text-2xl font-semibold mb-6 text-center ">
            Log In to Escrow
          </h2>
          <form className="space-y-6">
            <div className="space-y-2">
              <label
                htmlFor="email"
                className="block text-sm font-medium text-gray-700"
              >
                Email Address
              </label>
              <input
                type="email"
                id="email"
                name="email"
                className=" block w-full h-[50px] rounded-md border-2 border-[#CACACA] shadow-sm focus:border-blue-300 focus:ring focus:ring-blue-200 focus:ring-opacity-50"
                required
              />
            </div>
            <div className="space-y-2">
              <label
                htmlFor="password"
                className="block text-sm font-medium text-gray-700"
              >
                Password
              </label>
              <input
                type="password"
                id="password"
                name="password"
                className=" block w-full h-[50px] rounded-md border-2 border-[#CACACA] shadow-sm focus:border-blue-300 focus:ring focus:ring-blue-200 focus:ring-opacity-50"
                required
              />
              <div className="text-sm mb-4">
                <a href="#" className="text-[#035ADC] font-semibold ">
                  Forgot Password?
                </a>
              </div>
            </div>
            <Link href={"/"}>
              <button
                type="submit"
                className="w-full h-[50px] bg-blue-600 text-white py-2 px-4 mt-4 rounded-md hover:bg-[#035ADC] focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50"
              >
                Login
              </button>
            </Link>
          </form>
          <div className="mt-4 text-center flex justify-around items-center space-x-2">
            <div className="w-full h-[2px] bg-[#CACACA] "></div>
            <span className="text-gray-600">OR</span>
            <div className="w-full h-[2px] bg-[#CACACA] "></div>
          </div>
          <button className="mt-4 w-full h-[50px] border-2 border-[#035ADC] text-[#035ADC] font-semibold py-2 px-4 rounded-md hover:bg-blue-50 focus:outline-none focus:ring-2 focus:ring-gray-500 focus:ring-opacity-50 flex items-center justify-center">
            <Image
              src="/kingschat-icon.svg"
              width={35}
              height={36}
              alt="KingsChat"
              className="w-5 h-5 mr-2"
            />
            Continue with KingsChat
          </button>
          <div className="mt-6 text-center text-sm font-semibold">
            <span className="text-gray-600">Don't have an account? </span>
            <Link href={'/auth/register'} className="text-[#035ADC] hover:underline">
              Sign Up
            </Link>
          </div>
        </div>
      </div>
    </main>
  );
};

export default page;
