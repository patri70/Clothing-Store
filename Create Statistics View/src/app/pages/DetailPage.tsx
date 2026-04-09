import { useParams, useNavigate } from "react-router";
import { products } from "../data/products";
import { Button } from "../components/ui/button";
import { Badge } from "../components/ui/badge";
import { ArrowLeft } from "lucide-react";
import imgImage4 from "../../assets/9ddd1d8752981aa001d45f72622c714dd6acb4bc.png";
import imgImage5 from "../../assets/de061ef6e608d29cad02f473fd03784ea3f91b1b.png";
import imgImage6 from "../../assets/b1e61676f58986b1987ae38fd979c7d8c97e1f11.png";
import imgImage7 from "../../assets/1bc355884a1cfe1ac7a479210c7b680407ad260b.png";
import imgImage8 from "../../assets/e2664f5588505a2ee1e4e31269dfd8919f907071.png";
import imgImage9 from "../../assets/dd2a6b95246252eb8cefc6a928916935b6efe817.png";
import { useState } from "react";
import { ProductImageGallery } from "../components/ProductImageGallery";
import { ProductRatingStars } from "../components/ProductRatingStars";
import { ProductSizeSelector } from "../components/ProductSizeSelector";
import { ProductQuantitySelector } from "../components/ProductQuantitySelector";
import { ProductActionButtons } from "../components/ProductActionButtons";
import { ProductFeatures } from "../components/ProductFeatures";
import { ProductDescription } from "../components/ProductDescription";
import { ProductDetails } from "../components/ProductDetails";
import { CompleteTheLook } from "../components/CompleteTheLook";

const productImages: Record<string, string> = {
  "#001": imgImage4,
  "#002": imgImage5,
  "#003": imgImage6,
  "#004": imgImage7,
  "#005": imgImage8,
  "#006": imgImage9,
};

export default function DetailPage() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [selectedSize, setSelectedSize] = useState<string>("");
  const [quantity, setQuantity] = useState(1);

  const decodedId = id ? decodeURIComponent(id) : "";
  const product = products.find((p) => p.id === decodedId);

  if (!product) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold mb-4">Product not found</h1>
          <Button onClick={() => navigate("/")}>Back to Shop</Button>
        </div>
      </div>
    );
  }

  // Get recommended products (different category or just other products)
  const recommendedProducts = products
    .filter((p) => p.id !== product.id)
    .slice(0, 3)
    .map((p) => ({
      ...p,
      image: productImages[p.id],
    }));

  return (
    <div className="min-h-screen bg-white">
      <div className="max-w-7xl mx-auto px-8 py-12">
        {/* Back Button */}
        <Button
          variant="outline"
          onClick={() => navigate("/shop")}
          className="mb-8 hover:bg-gray-100"
        >
          <ArrowLeft className="w-4 h-4 mr-2" />
          Back to Shop
        </Button>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Product Image */}
          <ProductImageGallery 
            mainImage={productImages[product.id]} 
            productName={product.name} 
          />

          {/* Product Details */}
          <div className="space-y-6">
            <div>
              <Badge className="mb-3 bg-black text-white">
                {product.category}
              </Badge>
              <h1 className="text-5xl font-bold mb-4">{product.name}</h1>
              <ProductRatingStars 
                rating={product.rating} 
                size="md"
              />
              <p className="text-4xl font-bold text-[#FF0808] mt-4">${product.price}</p>
            </div>

            <div className="border-t border-b py-6 space-y-4">
              <ProductSizeSelector 
                sizes={product.sizes}
                selectedSize={selectedSize}
                onSizeChange={setSelectedSize}
              />

              <ProductQuantitySelector 
                quantity={quantity}
                onQuantityChange={setQuantity}
              />
            </div>

            <ProductActionButtons 
              price={product.price}
              quantity={quantity}
              selectedSize={selectedSize}
            />

            <ProductFeatures />

            <ProductDescription 
              productName={product.name}
              category={product.category}
            />

            <ProductDetails 
              sku={product.id}
              category={product.category}
              sizes={product.sizes}
            />
          </div>
        </div>

        {/* Complete the Look */}
        <CompleteTheLook products={recommendedProducts} />
      </div>
    </div>
  );
}