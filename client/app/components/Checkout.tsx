interface CheckoutProps {
    toggleCheckout: () => void;
}

export default function Checkout({ toggleCheckout }: CheckoutProps) {
    return (
        <div className="bg-white rounded-lg text-black w-[550px] p-10 flex flex-col space-y-2 items-center">
            <h1 className="text-2xl font-semibold">Payment Checkout</h1>
            <p className="w-96 text-sm text-center">
                Kindly Note, your funds will be sent to ESCROW wallet, once transaction is successful, the Vendor/Freelancer will receive the payment otherwise, you will receive a refund
            </p>
            <div>
                <p className='text-sm font-semibold'>Recipient Code</p>
                <input type="text" className='w-96 border-2 border-gray-400 rounded-lg p-2' value={"ESCROW2024"} />
            </div>
            <div>
                <p className='text-sm font-semibold'>Amount in Espees</p>
                <input type="text" className='w-96 border-2 border-gray-400 rounded-lg p-2' value={"150 Espees"} />
            </div>
            <div>
                <p className='text-sm font-semibold'>Description</p>
                <textarea name="Desc" rows={3} className='w-96 border-2 border-gray-400 rounded-lg p-2'></textarea>
            </div>

            <div className="flex items-center w-96 justify-between text-white py-3">
                <button onClick={toggleCheckout} className="bg-red-700 p-2 w-44 rounded-lg">
                    Cancel
                </button>
                <button className="bg-blue-600 p-2 w-44 rounded-lg">
                    Confirm
                </button>
            </div>
        </div>
    )
}