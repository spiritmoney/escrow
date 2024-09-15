import Image from "next/image"

export default function Header() {
  return (
    <div className="relative w-full flex justify-center items-center py-6 banner">
      <div className="relative w-full max-w-[1485px]">
        <Image src="/banner.svg" alt="banner" width={1485} height={453.949} className="w-full h-auto" />
        <div className="absolute top-[68%] left-[8.35%] transform -translate-y-1/2 w-[33.33%] max-w-[495px]">
          <div className="bg-white flex rounded-md items-center h-12 w-full relative">
            <input
              className="p-2 pr-12 w-full h-[66px] text-black outline-none rounded-md"
              type="text"
              placeholder="Search products or services"
            />
            <button className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-blue-600 p-2 rounded-md">
              <Image src="/icons/search2.png" alt="search" width={20} height={20} />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
