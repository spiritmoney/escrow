import { useState, useEffect } from 'react';
import { Oval } from 'react-loader-spinner';

interface FundWalletProps {
    togglePopup: () => void;
  }

export default function FundWallet({ togglePopup }: FundWalletProps) {
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        const timer = setTimeout(() => {
            setIsLoading(false);
        }, 3000);

        return () => clearTimeout(timer);
    }, []);

    return (
        <div className="absolute top-16 right-2 bg-white shadow-lg text-black z-10 p-4 rounded-3xl flex flex-col
        justify-evenly items-center">
            <p className="text-3xl w-full text-center py-3 border-b mb-4">Wallet Information</p>
            <div className='w-full'>
                <p className="text-sm font-semibold">My Wallet Address:</p>
                <p className="text-sm py-1">0x123bf43hdf678fh5yhn6lkmhs7jnsdhdjkcdnh7...</p>
                <span className="flex items-center space-x-2 cursor-pointer text-blue-600">
                    <img src="/icons/copy.png" alt="icon" height={5}/>
                    <p className="text-sm">Copy address</p>
                </span>
            </div>
            <div className='w-full flex items-center justify-center border-y py-5 my-4 space-x-5'>
                <p className="font-semibold">My Balance:</p>
                <p className='p-3 bg-blue-400 text-white text-lg font-semibold'>200 Espees</p>
            </div>

            {isLoading ? (
                <div className="py-5 flex flex-col items-center">
                    <p className='pb-5'>Loading QR Code...</p>
                    <Oval 
                        height={40} 
                        width={40} 
                        color="#3498db" 
                        ariaLabel="loading"
                    />
                </div>
            ) : (
                <div className='flex flex-col items-center'>
                    <p className='text-sm'>Wallet QR Code</p>
                    <img className="py-2" src="/images/QrCode.png" alt="QR Code" />
                </div>
            )}

            <button 
                className="bg-blue-600 px-36 py-2 my-3 rounded-lg text-white"
                onClick={togglePopup}>
                Close
            </button>
        </div>
    );
} 