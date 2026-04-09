import { useNavigate } from "react-router";
import { ProductCard } from "./ProductCard";

export interface CompleteTheLookProduct {
  id: string;
  name: string;
  price: number;
  category: string;
  rating: number;
  sales: number;
  image: string;
  sizes: string[];
}

export interface CompleteTheLookProps {
  products: CompleteTheLookProduct[];
  title?: string;
}

export function CompleteTheLook({ products, title = "Complete the Look" }: CompleteTheLookProps) {
  const navigate = useNavigate();

  if (!products || products.length === 0) {
    return null;
  }

  return (
    <div className="border-t pt-12 mt-12">
      <h2 className="text-3xl font-bold mb-8">{title}</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {products.map((product) => (
          <ProductCard
            key={product.id}
            {...product}
            onClick={() => navigate(`/product/${encodeURIComponent(product.id)}`)}
          />
        ))}
      </div>
    </div>
  );
}
