import Link from "next/link";

export default function About() {
    return (
        <div className="w-11/12 md:py-10 mx-auto">
            <div>
                <h1 className="text-gray-600 text-2xl lg:text-4xl text-center font-bold my-14">ABOUT ESCROW</h1>

                <div className="flex items-center mx-auto space-x-5 mb-10 md:mb-20">
                    <div className="text-gray-800 max-lg:text-center text-sm space-y-4">
                        <p>
                            Escrow is a revolutionary platform that allows users to trade goods and services with Espees, a digital
                            currency designed for seamless, secure, and transparent transactions. By leveraging advanced blockchain
                            technology, we ensure that every trade conducted on our platform is protected, fair, and trustworthy. Espees
                            serve as the backbone of our digital ecosystem, allowing buyers and sellers to engage in transactions with
                            complete confidence.
                        </p>

                        <p>
                            Our Escrow service acts as a neutral third party, safeguarding both parties involved in any trade by holding
                            funds securely until all agreed-upon conditions are fulfilled. This process not only ensures transparency but
                            also fosters trust, making digital trading of goods and services safer and more reliable.
                            Looking ahead, we are committed to growing our platform to accommodate a wide range of cryptocurrencies
                            across multiple blockchains, opening up new opportunities for global users. We envision a future where our
                            platform becomes the go-to hub for decentralized, secure, and fast transactions involving diverse digital
                            assets.
                        </p>

                        <p>
                            Our mission is to empower users to trade with confidence, knowing their assets are protected by the latest in
                            blockchain security. As the digital economy continues to evolve, we are dedicated to staying at the forefront
                            of innovation, providing a comprehensive, user-friendly solution for trading goods, services, and digital
                            currencies. Join us as we shape the future of secure online transactions with Espees and beyond.
                        </p>
                    </div>

                    <img src="/icons/mockup.png" alt=""  className="w-[700px] hidden lg:flex"/>
                </div>

            </div>

            <div className="bg-blue-600 rounded-lg w-full space-y-8 p-3 py-10 md:py-12">
                <h1 className="text-white text-2xl text-center font-semibold">SELECT YOUR CATEGORY</h1>

                <div className="flex flex-col lg:flex-row items-center justify-center max-md:space-y-10 lg:space-x-16">
                    <div className="bg-white rounded-lg w-60 h-60 flex flex-col items-center justify-center p-3">
                        <img src="/icons/user2.png" alt="" />
                        <p className="text-blue-600 text-xl font-semibold pb-5">Client</p>

                        <Link href={"/auth/register"} className="text-white bg-blue-600 p-2 rounded-lg w-full">
                            <button className="w-full">Sign Up</button>
                        </Link>
                    </div>
                    <div className="bg-white rounded-lg w-60 h-60 flex flex-col items-center justify-center p-3">
                        <img src="/icons/Stall.png" alt="" />
                        <p className="text-blue-600 text-xl font-semibold pb-5">Vendor</p>

                        <Link href={"/auth/register"} className="text-white bg-blue-600 p-2 rounded-lg w-full">
                            <button className="w-full">Sign Up</button>
                        </Link>
                    </div>
                    <div className="bg-white rounded-lg w-60 h-60 flex flex-col items-center justify-center p-3">
                        <img src="/icons/Worker.png" alt="" />
                        <p className="text-blue-600 text-xl font-semibold pb-5">Freelancer</p>

                        <Link href={"/auth/register"} className="text-white bg-blue-600 p-2 rounded-lg w-full">
                            <button className="w-full">Sign Up</button>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
}