export interface ProductQuantitySelectorProps {
  quantity: number;
  onQuantityChange: (quantity: number) => void;
}

export function ProductQuantitySelector({ 
  quantity, 
  onQuantityChange 
}: ProductQuantitySelectorProps) {
  return (
    <div>
      <h3 className="text-lg font-semibold mb-3">Quantity</h3>
      <div className="flex items-center gap-4">
        <button
          onClick={() => onQuantityChange(Math.max(1, quantity - 1))}
          className="w-12 h-12 border-2 rounded-lg hover:bg-gray-100 text-xl font-bold"
        >
          −
        </button>
        <span className="text-2xl font-semibold w-12 text-center">
          {quantity}
        </span>
        <button
          onClick={() => onQuantityChange(quantity + 1)}
          className="w-12 h-12 border-2 rounded-lg hover:bg-gray-100 text-xl font-bold"
        >
          +
        </button>
      </div>
    </div>
  );
}
