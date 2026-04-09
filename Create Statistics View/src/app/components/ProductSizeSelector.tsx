export interface ProductSizeSelectorProps {
  sizes: string[];
  selectedSize: string;
  onSizeChange: (size: string) => void;
}

export function ProductSizeSelector({ 
  sizes, 
  selectedSize, 
  onSizeChange 
}: ProductSizeSelectorProps) {
  return (
    <div>
      <h3 className="text-lg font-semibold mb-3">Select Size</h3>
      <div className="flex gap-3">
        {sizes.map((size) => (
          <button
            key={size}
            onClick={() => onSizeChange(size)}
            className={`px-6 py-3 border-2 rounded-lg transition-all ${
              selectedSize === size
                ? "border-[#FF0808] bg-[#FF0808] text-white"
                : "border-gray-300 hover:border-gray-400"
            }`}
          >
            {size}
          </button>
        ))}
      </div>
    </div>
  );
}
