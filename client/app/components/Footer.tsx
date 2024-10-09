export default function Footer() {
    return (
      <footer className="mt-10 ">
        {/* Main Footer Section */}
        <div className="w-screen h-80 bg-blue-700 text-white py-10">
          {/* <div className="container mx-auto grid grid-cols-3 gap-14 px-20"> */}
          <div className="container mx-auto flex justify-between px-10">
            
            {/* Contact Information */}
            <div className="text-sm">
              <h3 className="font-semibold mb-4">Contact Information</h3>
              <ul>
                <li className="flex items-center mb-2">
                  <img src="/icons/location.png" alt="location" className="mr-2" width={15}/>
                  8502 Preston Rd. Inglewood, Maine 98380
                </li>
                <li className="flex items-center mb-2">
                  <img src="/icons/email.png" alt="email" className="mr-2" width={15}/>
                  escrow2024@email.com
                </li>
                <li className="flex items-center mb-2">
                  <img src="/icons/phone.png" alt="phone" className="mr-2" width={15}/>
                  +234 123 456 7890
                </li>
              </ul>
            </div>
            
            {/* Navigation Links */}
            <div className="text-sm">
              <h3 className="font-semibold mb-4">Navigation Links</h3>
              <ul className="space-y-2">
                <li><a href="#" className="hover:underline">Products</a></li>
                <li><a href="#" className="hover:underline">Services</a></li>
                <li><a href="#" className="hover:underline">Contact Us</a></li>
                <li><a href="#" className="hover:underline">Wallet</a></li>
                <li><a href="#" className="hover:underline">Cart</a></li>
              </ul>
            </div>
            
            {/* Newsletter Subscription */}
            <div>
              <h3 className="font-semibold mb-4">Newsletter Subscription</h3>
              <div className="mb-4">
                <input type="email"
                  className="px-3 py-2 w-80 bg-blue-700 border border-white rounded-md outline-none text-white"
                />
              </div>
              <button className="bg-white text-blue-700 px-4 py-2 rounded-md w-full font-semibold">Subscribe</button>
              <p className="mt-4">Connect with us on kingschat</p>
            </div>
            
          </div>
        </div>
  
        {/* Copyright Section */}
        <div className="w-full h-20 bg-blue-900 text-white flex justify-center items-center">
          <p className="text-lg">©2024 copyright</p>
        </div>
      </footer>
    );
  }