import Image from "next/image"
import Link from "next/link";

export default function Header() {
  return (
    <div className="relative w-full flex justify-center items-center pb-6 banner">
      <div className="relative w-full max-w-[1485px]">
        <Image src="/banner2.svg" alt="banner" width={1485} height={453.949} className="hidden lg:block" />

        <img src="/images/banner2.png" alt="" className="lg:hidden"/>
        <div className="absolute top-[64%] left-[5%] md:top-[68%] md:left-[8.35%] transform -translate-y-1/2 w-[71%] md:w-[33.33%]">
          <div className="bg-white flex rounded-md items-center h-8 w-full relative">
            <input
              className="p-2 pr-12 w-full h-[66px] text-black outline-none rounded-md"
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
