import Footer from "@/app/components/Footer";
import Heading from "@/app/components/Heading";
import Navbar from "@/app/components/Navbar";
import ProductCard from "@/app/components/ProductCard";
import Link from "next/link";

const products = [
  {
    id: 1,
    name: "Nike Sneakers",
    price: "10.5 Espees",
    src: "/images/fashion.png",
    store: "Nike Store",
  },
  {
    id: 2,
    name: "Nike Sneakers",
    price: "10.5 Espees",
    src: "/images/fashion.png",
    store: "Nike Store",
  },
  {
    id: 3,
    name: "Nike Sneakers",
    price: "10.5 Espees",
    src: "/images/fashion.png",
    store: "Nike Store",
  },
  {
    id: 4,
    name: "Nike Sneakers",
    price: "10.5 Espees",
    src: "/images/fashion.png",
    store: "Nike Store",
  },
  {
    id: 5,
    name: "Nike Sneakers",
    price: "10.5 Espees",
    src: "/images/fashion.png",
    store: "Nike Store",
  },
  {
    id: 6,
    name: "Nike Sneakers",
    price: "10.5 Espees",
    src: "/images/fashion.png",
    store: "Nike Store",
  },
  {
    id: 7,
    name: "Nike Sneakers",
    price: "10.5 Espees",
    src: "/images/fashion.png",
    store: "Nike Store",
  },
  {
    id: 8,
    name: "Nike Sneakers",
    price: "10.5 Espees",
    src: "/images/fashion.png",
    store: "Nike Store",
  },
  {
    id: 9,
    name: "Nike Sneakers",
    price: "10.5 Espees",
    src: "/images/fashion.png",
    store: "Nike Store",
  },
  {
    id: 10,
    name: "Nike Sneakers",
    price: "10.5 Espees",
    src: "/images/fashion.png",
    store: "Nike Store",
  },
  {
    id: 11,
    name: "Nike Sneakers",
    price: "10.5 Espees",
    src: "/images/fashion.png",
    store: "Nike Store",
  },
  {
    id: 12,
    name: "Nike Sneakers",
    price: "10.5 Espees",
    src: "/images/fashion.png",
    store: "Nike Store",
  },
];

const related = [
  {
    id: 1,
    name: "Nike Sneakers",
    price: "10.5 Espees",
    src: "/images/fashion.png",
    store: "Nike Store",
  },
  {
    id: 2,
    name: "Nike Sneakers",
    price: "10.5 Espees",
    src: "/images/fashion.png",
    store: "Nike Store",
  },
  {
    id: 3,
    name: "Nike Sneakers",
    price: "10.5 Espees",
    src: "/images/fashion.png",
    store: "Nike Store",
  },
  {
    id: 4,
    name: "Nike Sneakers",
    price: "10.5 Espees",
    src: "/images/fashion.png",
    store: "Nike Store",
  },
  {
    id: 5,
    name: "Nike Sneakers",
    price: "10.5 Espees",
    src: "/images/fashion.png",
    store: "Nike Store",
  },
];

export default function ProductsSearch() {
  return (
    <>
      <Navbar />
      <div className="w-11/12 my-10 mx-auto">
        <span className="w-full flex items-center justify-between pb-5">
          <h1 className="text-2xl text-black font-medium">Search</h1>

          <Link href={"/"}>
            <button className="text-blue-600 p-2">Close</button>
          </Link>
        </span>

        <Heading text="Results for 'Nike Sneakers'" />
        <div className="min-w-full container bg-gray-100 p-5 mb-20 rounded-lg mx-auto flex items-center justify-center">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 mb-20 rounded-lg">
            {products.map((product) => (
              <Link key={product.id} href={"/product/1"}>
                <ProductCard product={product} />
              </Link>
            ))}
          </div>
        </div>

        <Heading text="Related Products" />
        <div
          className="mx-auto flex items-center overflow-scroll rounded-lg"
          style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
        >
          {related.map((product) => (
            <Link key={product.id} href={"/product/1"}>
              <ProductCard product={product} />
            </Link>
          ))}
        </div>
      </div>
      <Footer />
    </>
  );
}
