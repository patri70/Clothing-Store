export interface ProductDescriptionProps {
  productName: string;
  category: string;
}

export function ProductDescription({ productName, category }: ProductDescriptionProps) {
  return (
    <div className="border-t pt-6">
      <h3 className="text-2xl font-bold mb-4">Product Description</h3>
      <p className="text-gray-700 leading-relaxed">
        Experience premium quality with our {productName}. Crafted with attention to detail,
        this {category.toLowerCase()} combines style and comfort perfectly. Made from
        high-quality materials, it's designed to be a timeless addition to your wardrobe.
        Available in multiple sizes to ensure the perfect fit.
      </p>
    </div>
  );
}
