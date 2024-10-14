import { useState } from "react";

interface CheckoutProps {
    toggleCheckout: () => void;
}

export default function Checkout({ toggleCheckout }: CheckoutProps) {
    const [paid, setPaid] =useState(false);

    function showAddress(){
        setPaid(!paid);
    }

    return (
        <>
            {paid ? <Delivery /> : <Payment />}
        </>
    )


    function Payment() {
        return(
            <div className="bg-white rounded-lg text-black fixed w-[350px] md:w-[550px] z-50 top-5 inset-x-0 mx-auto p-10 flex flex-col space-y-2 items-center">
                <h1 className="text-2xl font-semibold">Payment Checkout</h1>
                <p className="w-72 md:w-96 text-sm text-center">
                    Kindly Note, your funds will be sent to ESCROW wallet, once transaction is successful, the Vendor/Freelancer will receive the payment otherwise, you will receive a refund
                </p>
                <div>
                    <p className='text-sm font-semibold'>Recipient Code</p>
                    <input type="text" className='w-72 md:w-96 border-2 border-gray-400 rounded-lg p-2' value={"ESCROW2024"} />
                </div>
                <div>
                    <p className='text-sm font-semibold'>Amount in Espees</p>
                    <input type="text" className='w-72 md:w-96 border-2 border-gray-400 rounded-lg p-2' value={"150 Espees"} />
                </div>
                <div>
                    <p className='text-sm font-semibold'>Description</p>
                    <textarea name="Desc" rows={3} className='w-72 md:w-96 border-2 border-gray-400 rounded-lg p-2'></textarea>
                </div>

                <div className="flex items-center w-72 md:w-96 justify-between text-white py-3">
                    <button onClick={toggleCheckout} className="bg-red-700 p-2 w-32 md:w-44 rounded-lg">
                        Cancel
                    </button>
                    <button onClick={showAddress} className="bg-blue-600 p-2 w-32 md:w-44 rounded-lg">
                        Confirm
                    </button>
                </div>
            </div>
        );
    }

    function Delivery() {
        return(
            <div className="bg-white rounded-lg text-black fixed w-[350px] md:w-[550px] z-50 top-5 inset-x-0 mx-auto p-10 flex flex-col space-y-2 items-center">
                <h1 className="text-2xl font-semibold">Delivery Information</h1>
                
                <div>
                    <p className='text-sm font-semibold'>Delivery Address</p>
                    <input type="text" className='w-72 md:w-96 border-2 border-gray-400 rounded-lg p-2'/>
                </div>
                <div>
                    <p className='text-sm font-semibold'>City</p>
                    <input type="text" className='w-72 md:w-96 border-2 border-gray-400 rounded-lg p-2'/>
                </div>
                <div>
                    <p className='text-sm font-semibold'>Postal Code</p>
                    <input type="text" className='w-72 md:w-96 border-2 border-gray-400 rounded-lg p-2'/>
                </div>
                <div>
                    <p className='text-sm font-semibold'>State</p>
                    <input type="text" className='w-72 md:w-96 border-2 border-gray-400 rounded-lg p-2'/>
                </div>
                <div>
                    <p className='text-sm font-semibold'>Country</p>
                    <input type="text" className='w-72 md:w-96 border-2 border-gray-400 rounded-lg p-2'/>
                </div>

                <div className="flex items-center w-72 md:w-96 justify-between text-white py-3">
                    <button onClick={toggleCheckout} className="bg-blue-600 p-2 w-full rounded-lg">
                        Save
                    </button>
                </div>
            </div>
        );
    }
}