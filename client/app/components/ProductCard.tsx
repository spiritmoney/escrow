interface ProductTypeProps {
  product: {
    id: number;
    name: string;
    src: string;
  };
}

interface ProductProps {
  product: {
    id: number;
    name: string;
    price: string;
    src: string;
  };
}

export default function ProductCard({ product }: ProductProps) {
  return (
    <div className="p-4 bg-white hover:bg-gray-100 rounded-lg">
      <img src={product.src} alt='image' className="mb-4 cursor-pointer rounded-t-lg" />
      <h2 className="font-semibold text-gray-600">{product.name}</h2>
      <p className="font-semibold text-gray-600">{product.price}</p>
    </div>
  );
}

export function ProductTypeCard({ product }: ProductTypeProps) {
  return (
    <div className="p-4 hover:bg-gray-100 rounded-lg">
      <img src={product.src} alt='image' className="mb-4 cursor-pointer rounded-lg" />
      <h2 className="text-lg text-center text-black">{product.name}</h2>
    </div>
  );
}