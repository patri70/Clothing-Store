import { Star } from "lucide-react";

export interface ProductRatingStarsProps {
  rating: number;
  showNumber?: boolean;
  sales?: number;
  size?: "sm" | "md" | "lg";
}

export function ProductRatingStars({ 
  rating, 
  showNumber = true, 
  sales,
  size = "md" 
}: ProductRatingStarsProps) {
  const sizeClasses = {
    sm: "w-4 h-4",
    md: "w-5 h-5",
    lg: "w-6 h-6"
  };

  const textSizeClasses = {
    sm: "text-sm",
    md: "text-lg",
    lg: "text-xl"
  };

  return (
    <div className="flex items-center gap-4">
      <div className="flex gap-1">
        {[1, 2, 3, 4, 5].map((star) => (
          <Star
            key={star}
            className={`${sizeClasses[size]} ${
              star <= Math.round(rating)
                ? "fill-[#FF0808] text-[#FF0808]"
                : "fill-gray-300 text-gray-300"
            }`}
          />
        ))}
      </div>
      {showNumber && (
        <span className={`${textSizeClasses[size]} text-gray-600`}>
          {rating} {sales && `(${sales} reviews)`}
        </span>
      )}
    </div>
  );
}
