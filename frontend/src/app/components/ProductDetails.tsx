export interface ProductDetailsProps {
  sku: string;
  category: string;
  sizes: string[];
  inStock?: boolean;
}

export function ProductDetails({ sku, category, sizes, inStock = true }: ProductDetailsProps) {
  return (
    <div className="border-t pt-6">
      <h3 className="text-2xl font-bold mb-4">Product Details</h3>
      <div className="grid grid-cols-2 gap-4 text-sm">
        <div>
          <p className="text-gray-600">SKU:</p>
          <p className="font-semibold">{sku}</p>
        </div>
        <div>
          <p className="text-gray-600">Category:</p>
          <p className="font-semibold">{category}</p>
        </div>
        <div>
          <p className="text-gray-600">Available Sizes:</p>
          <p className="font-semibold">{sizes.join(", ")}</p>
        </div>
        <div>
          <p className="text-gray-600">In Stock:</p>
          <p className={`font-semibold ${inStock ? 'text-green-600' : 'text-red-600'}`}>
            {inStock ? 'Yes' : 'No'}
          </p>
        </div>
      </div>
    </div>
  );
}
