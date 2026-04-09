export interface ProductImageGalleryProps {
  mainImage: string;
  productName: string;
}

export function ProductImageGallery({ mainImage, productName }: ProductImageGalleryProps) {
  return (
    <div className="space-y-4">
      <div className="aspect-[3/4] rounded-lg overflow-hidden border-2 shadow-xl">
        <img
          src={mainImage}
          alt={productName}
          className="w-full h-full object-cover"
        />
      </div>
    </div>
  );
}
