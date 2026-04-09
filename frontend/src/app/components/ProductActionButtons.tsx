import { ShoppingCart, Heart } from "lucide-react";
import { Button } from "./ui/button";

export interface ProductActionButtonsProps {
  price: number;
  quantity: number;
  selectedSize: string;
  onAddToCart?: () => void;
  onAddToWishlist?: () => void;
}

export function ProductActionButtons({ 
  price, 
  quantity, 
  selectedSize,
  onAddToCart,
  onAddToWishlist
}: ProductActionButtonsProps) {
  return (
    <div className="space-y-3">
      <Button
        className="w-full h-14 bg-black hover:bg-[#FF0808] text-white text-lg"
        disabled={!selectedSize}
        onClick={onAddToCart}
      >
        <ShoppingCart className="w-5 h-5 mr-2" />
        Add to Cart - ${(price * quantity).toFixed(2)}
      </Button>
      <Button
        variant="outline"
        className="w-full h-14 border-2 hover:bg-gray-50 text-lg"
        onClick={onAddToWishlist}
      >
        <Heart className="w-5 h-5 mr-2" />
        Add to Wishlist
      </Button>
    </div>
  );
}
