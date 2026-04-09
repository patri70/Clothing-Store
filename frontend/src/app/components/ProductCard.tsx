import { Star } from "lucide-react";
import { Card, CardContent } from "./ui/card";
import { Badge } from "./ui/badge";

export interface ProductCardProps {
  id: string;
  name: string;
  price: number;
  category: string;
  rating: number;
  sales: number;
  image: string;
  sizes: string[];
  onClick?: () => void;
}

export function ProductCard({ 
  name, 
  price, 
  category, 
  rating, 
  sales, 
  image, 
  sizes,
  onClick 
}: ProductCardProps) {
  const renderStars = (rating: number) => {
    return (
      <div className="flex gap-1">
        {[1, 2, 3, 4, 5].map((star) => (
          <Star
            key={star}
            className={`w-4 h-4 ${
              star <= Math.round(rating)
                ? "fill-[#FF0808] text-[#FF0808]"
                : "fill-gray-300 text-gray-300"
            }`}
          />
        ))}
      </div>
    );
  };

  return (
    <Card
      className="group cursor-pointer hover:shadow-2xl transition-all duration-300 overflow-hidden border-2 hover:border-[#FF0808]"
      onClick={onClick}
    >
      <div className="relative overflow-hidden aspect-[3/4]">
        <img
          src={image}
          alt={name}
          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
        />
        <div className="absolute top-4 right-4">
          <Badge className="bg-black text-white">
            {category}
          </Badge>
        </div>
      </div>
      <CardContent className="p-6">
        <div className="flex items-start justify-between mb-2">
          <h3 className="text-2xl font-semibold">{name}</h3>
          <p className="text-2xl font-bold text-[#FF0808]">${price}</p>
        </div>
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            {renderStars(rating)}
            <span className="text-sm text-gray-600">({rating})</span>
          </div>
          <p className="text-sm text-gray-500">{sales} sold</p>
        </div>
        <div className="mt-3 flex gap-2">
          {sizes.map((size) => (
            <span
              key={size}
              className="px-3 py-1 bg-gray-100 rounded text-sm"
            >
              {size}
            </span>
          ))}
        </div>
      </CardContent>
    </Card>
  );
}
