"use client";

import Link from 'next/link';
import Image from "next/image";
import { useState, useEffect } from 'react';
import { useQuery, QueryClient, dehydrate, HydrationBoundary } from '@tanstack/react-query';
import FundWallet from './FundWallet';
import Maintenance from './Maintenance';


const API_BASE_URL = "http://localhost:5000/";

// Type for user profile data
interface UserProfile {
  _id: string;
  email: string;
  fullName: string;
  walletAddress: string;
  role: string;
  tokenBalance: string;
  isVerified: boolean;
  createdAt: string;
  updatedAt: string;
}

// Update the getUserProfile function with the correct endpoint
const getUserProfile = async (): Promise<UserProfile> => {
  const token = localStorage.getItem('accessToken');
  if (!token) {
    throw new Error('No access token');
  }

  const response = await fetch(`${API_BASE_URL}/users/profile`, {
    headers: {
      'Authorization': `Bearer ${token}`
    }
  });
  
  if (response.status === 401) {
    localStorage.removeItem('accessToken'); // Clear invalid token
    throw new Error('Unauthorized');
  }
  
  if (!response.ok) {
    throw new Error('Failed to fetch user profile');
  }
  
  return response.json();
};

// Add this function outside the component
const getCartItems = async () => {
  const response = await fetch(`${API_BASE_URL}/cart`, {
    headers: {
      'Authorization': `Bearer ${localStorage.getItem('accessToken')}` // Assuming token is stored in localStorage
    }
  });
  
  if (!response.ok) {
    throw new Error('Failed to fetch cart');
  }
  
  return response.json();
};

// Add this function outside the component
const logout = async () => {
  // Clear the token from localStorage
  localStorage.removeItem('accessToken');
  
  // Clear the React Query cache to remove any user-specific data
  const queryClient = new QueryClient();
  await queryClient.clear();
};

// Add this to your page component or layout
export async function getServerSideProps() {
  const queryClient = new QueryClient();

  try {
    // Prefetch the user profile data
    await queryClient.prefetchQuery({
      queryKey: ['userProfile'],
      queryFn: getUserProfile,
    });

    return {
      props: {
        dehydratedState: dehydrate(queryClient),
      },
    };
  } catch (error) {
    // Handle error case - user might not be logged in
    return {
      props: {
        dehydratedState: dehydrate(queryClient),
      },
    };
  }
}

export default function Navbar() {
  const [selectedOption, setSelectedOption] = useState("Products");
  const [isDropdownVisible, setIsDropdownVisible] = useState(false);
  const [isPopupVisible, setIsPopupVisible] = useState(false);
  const [isOptionsVisible, setIsOptionsVisible] = useState(false);
  const [construction, setConstruction] = useState(false);
  const [logginOut, setLogginOut] = useState(false);

  // Update the useQuery implementation
  const { data: user, isError, error } = useQuery<UserProfile>({
    queryKey: ['userProfile'],
    queryFn: getUserProfile,
    staleTime: 5 * 60 * 1000,
    retry: 1,
    enabled: !!localStorage.getItem('accessToken'), // Only run if token exists
  });

  // Redirect to login if unauthorized
  useEffect(() => {
    if (error?.message === 'Unauthorized' || error?.message === 'No access token') {
      window.location.href = '/auth/signin';
    }
  }, [error]);

  // Add this query to fetch cart items
  const { data: cart } = useQuery({
    queryKey: ['cart'],
    queryFn: getCartItems,
    staleTime: 30 * 1000, // Consider data fresh for 30 seconds
  });

  const handleLogout = async (e: React.MouseEvent) => {
    e.preventDefault();
    setLogginOut(true);
    await logout();
    
    setTimeout(() => {
      window.location.href = '/';
    }, 2000);
  };

  function toggleConstruction() {
    setConstruction(!construction);
  }

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
    <HydrationBoundary>
      <nav className="relative bg-white p-4 h-24 flex justify-center w-full border-b border-gray-300">
        {construction && <div className="w-full h-full fixed inset-0 z-40 bg-black bg-opacity-90"></div>}
        <div className="container w-full flex justify-between md:justify-center items-center md:space-x-5">
          <Link href="/home" legacyBehavior>
            <a className="text-blue-600 md:flex-1 text-lg font-bold" >ESCROW</a>
          </Link>

          <div className='hidden md:flex relative items-center border border-gray-400 p-1 rounded-md '>
            {/* <img src="/icons/search.png" alt="" /> */}
            <input className='w-40 lg:w-60 outline-none text-black mx-2' type="search" placeholder='Search' />

            <Link href={selectedOption === "Products" ? "/search/products" : "/search/services"}>
              <button className="bg-blue-600 p-1 mr-2 rounded-md">
                <img src="/icons/search2.png" alt="search" width={14} height={14} className='w-auto' />
              </button>
            </Link>


            <p className='text-gray-500 border-l text-sm border-gray-400 px-2'>{selectedOption}</p>
            <button onClick={toggleDropdown}>
              <img src="/icons/arrdown.png" alt="" width={20} />
            </button>

            {isDropdownVisible && (
              <ul className='absolute top-9 right-0 text-sm z-30 w-28 mt-2 rounded-lg shadow-lg bg-white'>
                <li className="cursor-pointer block rounded-lg px-6 py-2 text-gray-700
                  hover:bg-gray-100" onClick={() => handleSelect(selectedOption === "Products" ? "Services" : "Products")}>
                  {selectedOption === "Products" ? "Services" : "Products"}
                </li>
              </ul>
            )}
          </div>

          <div className="relative flex items-center space-x-2 lg:space-x-4">
            <Link href={'/cart'} className="bg-blue-600 p-2 text-white md:px-5 rounded-md flex items-center space-x-1 text-[12px]">
              <img src="/icons/cart.png" alt="" className='w-5 md:hidden lg:block' />
              <p className='hidden md:flex'>My Cart ({cart?.items?.length || 0})</p>
            </Link>

            <button onClick={togglePopup} className="bg-blue-600 p-2 text-white md:px-5 rounded-md flex items-center space-x-1 text-[12px]">
              <img src="/icons/wallet.png" alt="" className='w-5 md:hidden lg:block' />
              <p className='hidden md:flex'>Balance: {user?.tokenBalance || 0} ESP</p>
            </button>


            <div onClick={toggleOptions} className="text-gray-500 flex items-start justify-center cursor-pointer">
              <img className='m-1' src="/images/profile.png" width={30} alt="" />
              <span className=' hidden lg:block'>
                <h2 className='text-sm md:text-lg'>{user?.fullName || 'Guest'}</h2>
                <h4 className='text-[12px] text-blue-600'>{user?.role || 'Client'}</h4>
              </span>
              <img className='m-1' src={isOptionsVisible ? "/icons/arrup.png" : "/icons/arrdown.png"} width={20} alt="" />
            </div>

            {isPopupVisible && (
              <FundWallet togglePopup={togglePopup} />
            )}
            {isOptionsVisible && (
              <ul className='absolute top-12 right-0 z-10 w-48 mt-2 p-4 flex flex-col items-center rounded-b-lg shadow-lg bg-gray-50'>
                <Link href={'/provider/vendor/dashboard'} className="cursor-pointer w-full border-b px-4 py-2 text-gray-500 font-semibold 
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
                <li
                  onClick={toggleConstruction}
                  className="cursor-pointer w-full border-b px-4 py-2 text-gray-500 font-semibold 
                hover:bg-gray-100">
                  Support
                </li>
                <li
                  onClick={handleLogout}
                  className={`cursor-pointer w-full px-4 py-2 text-red-800 font-semibold hover:bg-gray-100 ${logginOut && 'bg-red-400'}`}
                >
                  {logginOut ? 'Logging Out...' : 'Logout'}
                </li>

              </ul>
            )}
          </div>
        </div>
        {construction &&
          <Maintenance toggleConstruction={toggleConstruction} />
        }
      </nav>
    </HydrationBoundary>
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
    <nav className="w-full bg-white p-4 h-24 flex justify-center border-b border-gray-300">
      <div className="container w-full flex justify-between md:justify-center items-center md:space-x-5">
        <Link href="/" legacyBehavior>
          <a className="text-blue-600 md:flex-1 text-lg font-bold pr-15" >ESCROW</a>
        </Link>

        <div className='hidden md:flex relative items-center border border-gray-400 p-1 rounded-md '>
          {/* <img src="/icons/search.png" alt="" /> */}
          <input className='w-44 lg:w-60 outline-none text-black mx-2' type="search" placeholder='Search' />

          <Link href={selectedOption === "Products" ? "/search/products" : "/search/services"}>
            <button className="bg-blue-600 p-1 mr-2 rounded-md">
              <img src="/icons/search2.png" alt="search" width={14} height={14} className='w-auto' />
            </button>
          </Link>


          <p className='text-gray-500 text-sm border-l border-gray-400 px-2'>{selectedOption}</p>
          <button onClick={toggleDropdown}>
            <img src="/icons/arrdown.png" alt="" width={20} />
          </button>

          {isDropdownVisible && (
            <ul className='absolute top-9 right-0 text-sm z-30 w-28 mt-2 rounded-lg shadow-lg bg-white'>
              <li className="cursor-pointer block rounded-lg px-5 py-2 text-gray-700
                hover:bg-gray-100" onClick={() => handleSelect(selectedOption === "Products" ? "Services" : "Products")}>
                {selectedOption === "Products" ? "Services" : "Products"}
              </li>
            </ul>
          )}
        </div>

        <div className='flex items-center space-x-2'>
          <Link className="bg-blue-600 p-2 text-white text-center px-5 rounded-md text-[12px]" href={'/auth/signin'}>
            <p>Sign In</p>
          </Link>
          <Link className="bg-blue-600 p-2 text-white text-center px-5 rounded-md text-[12px]" href={'/auth/register'}>
            <p>Create Account</p>
          </Link>
        </div>

      </div>
    </nav>
  );
}