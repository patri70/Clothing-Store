import { useState } from "react";
import { useNavigate } from "react-router";
import { products } from "../data/products";
import { Card, CardContent } from "../components/ui/card";
import { Badge } from "../components/ui/badge";
import { Star, ChevronLeft, ChevronRight, ArrowUpDown } from "lucide-react";
import imgImage4 from "../../assets/9ddd1d8752981aa001d45f72622c714dd6acb4bc.png";
import imgImage5 from "../../assets/de061ef6e608d29cad02f473fd03784ea3f91b1b.png";
import imgImage6 from "../../assets/b1e61676f58986b1987ae38fd979c7d8c97e1f11.png";
import imgImage7 from "../../assets/1bc355884a1cfe1ac7a479210c7b680407ad260b.png";
import imgImage8 from "../../assets/e2664f5588505a2ee1e4e31269dfd8919f907071.png";
import imgImage9 from "../../assets/dd2a6b95246252eb8cefc6a928916935b6efe817.png";
import imgImage10 from "../../assets/02d1d80b6508740dc054ed461279cc0e8c8bd843.png";

const productImages: Record<string, string> = {
  "#001": imgImage4,
  "#002": imgImage5,
  "#003": imgImage6,
  "#004": imgImage7,
  "#005": imgImage8,
  "#006": imgImage9,
};

type SortOption = "featured" | "price-low" | "price-high" | "rating" | "sales";

export default function ShopPage() {
  const navigate = useNavigate();
  const [selectedCategory, setSelectedCategory] = useState<string>("All");
  const [sortBy, setSortBy] = useState<SortOption>("featured");

  const categories = ["All", ...new Set(products.map(p => p.category))];
  
  let filteredProducts = selectedCategory === "All" 
    ? products 
    : products.filter(p => p.category === selectedCategory);

  // Apply sorting
  const sortedProducts = [...filteredProducts].sort((a, b) => {
    switch (sortBy) {
      case "price-low":
        return a.price - b.price;
      case "price-high":
        return b.price - a.price;
      case "rating":
        return b.rating - a.rating;
      case "sales":
        return b.sales - a.sales;
      default:
        return 0;
    }
  });

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
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <div className="relative h-[600px] overflow-hidden">
        <img 
          src={imgImage10} 
          alt="Hero" 
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/50 to-black/30" />
        <div className="relative h-full flex flex-col items-center justify-center text-white px-8">
          <h1 className="text-7xl font-bold mb-4 text-center">
            <span className="text-white">Vanes</span>
          </h1>
          <p className="text-2xl mb-8 font-light">Style in every step</p>
          <button className="bg-black hover:bg-[#FF0808] text-white px-8 py-4 rounded-lg text-xl transition-all transform hover:scale-105">
            Discover Collection
          </button>
        </div>
      </div>

      {/* Filter Section */}
      <div className="bg-gray-50 border-y py-6 sticky top-[72px] z-40">
        <div className="max-w-7xl mx-auto px-8">
          <div className="flex items-center justify-between mb-4">
            <div className="flex gap-3">
              {categories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setSelectedCategory(cat)}
                  className={`px-6 py-2 rounded-full transition-all ${
                    selectedCategory === cat
                      ? "bg-[#FF0808] text-white shadow-lg"
                      : "bg-white text-gray-700 hover:bg-gray-100 border"
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>
            <p className="text-gray-600">
              Showing {filteredProducts.length} product{filteredProducts.length !== 1 ? 's' : ''}
            </p>
          </div>
          
          {/* Sort Options */}
          <div className="flex items-center gap-3 pt-4 border-t">
            <div className="flex items-center gap-2 text-gray-700">
              <ArrowUpDown className="w-4 h-4" />
              <span className="font-medium">Sort by:</span>
            </div>
            <div className="flex gap-2">
              <button
                onClick={() => setSortBy("featured")}
                className={`px-4 py-1.5 rounded-full text-sm transition-all ${
                  sortBy === "featured"
                    ? "bg-black text-white"
                    : "bg-white text-gray-700 hover:bg-gray-100 border"
                }`}
              >
                Featured
              </button>
              <button
                onClick={() => setSortBy("price-low")}
                className={`px-4 py-1.5 rounded-full text-sm transition-all ${
                  sortBy === "price-low"
                    ? "bg-black text-white"
                    : "bg-white text-gray-700 hover:bg-gray-100 border"
                }`}
              >
                Price: Low to High
              </button>
              <button
                onClick={() => setSortBy("price-high")}
                className={`px-4 py-1.5 rounded-full text-sm transition-all ${
                  sortBy === "price-high"
                    ? "bg-black text-white"
                    : "bg-white text-gray-700 hover:bg-gray-100 border"
                }`}
              >
                Price: High to Low
              </button>
              <button
                onClick={() => setSortBy("rating")}
                className={`px-4 py-1.5 rounded-full text-sm transition-all ${
                  sortBy === "rating"
                    ? "bg-black text-white"
                    : "bg-white text-gray-700 hover:bg-gray-100 border"
                }`}
              >
                Highest Rated
              </button>
              <button
                onClick={() => setSortBy("sales")}
                className={`px-4 py-1.5 rounded-full text-sm transition-all ${
                  sortBy === "sales"
                    ? "bg-black text-white"
                    : "bg-white text-gray-700 hover:bg-gray-100 border"
                }`}
              >
                Best Sellers
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Products Grid */}
      <div className="max-w-7xl mx-auto px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {sortedProducts.map((product) => (
            <Card
              key={product.id}
              className="group cursor-pointer hover:shadow-2xl transition-all duration-300 overflow-hidden border-2 hover:border-[#FF0808]"
              onClick={() => navigate(`/product/${encodeURIComponent(product.id)}`)}
            >
              <div className="relative overflow-hidden aspect-[3/4]">
                <img
                  src={productImages[product.id]}
                  alt={product.name}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute top-4 right-4">
                  <Badge className="bg-black text-white">
                    {product.category}
                  </Badge>
                </div>
              </div>
              <CardContent className="p-6">
                <div className="flex items-start justify-between mb-2">
                  <h3 className="text-2xl font-semibold">{product.name}</h3>
                  <p className="text-2xl font-bold text-[#FF0808]">${product.price}</p>
                </div>
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    {renderStars(product.rating)}
                    <span className="text-sm text-gray-600">({product.rating})</span>
                  </div>
                  <p className="text-sm text-gray-500">{product.sales} sold</p>
                </div>
                <div className="mt-3 flex gap-2">
                  {product.sizes.map((size) => (
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
          ))}
        </div>

        {/* Pagination */}
        <div className="flex items-center justify-center gap-4 mt-12">
          <button className="p-2 hover:bg-gray-100 rounded-lg transition-colors">
            <ChevronLeft className="w-6 h-6" />
          </button>
          <div className="flex gap-2">
            {[1, 2, 3].map((page) => (
              <button
                key={page}
                className={`w-10 h-10 rounded-lg transition-colors ${
                  page === 1
                    ? "bg-[#FF0808] text-white"
                    : "bg-gray-100 hover:bg-gray-200"
                }`}
              >
                {page}
              </button>
            ))}
          </div>
          <button className="p-2 hover:bg-gray-100 rounded-lg transition-colors">
            <ChevronRight className="w-6 h-6" />
          </button>
        </div>
      </div>

      {/* Features Section */}
      <div className="bg-gray-50 py-16 mt-12">
        <div className="max-w-7xl mx-auto px-8">
          <h2 className="text-4xl font-bold text-center mb-12">
            Shop with Confidence at Vanes
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="bg-[#FF0808] w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-2">Free Shipping</h3>
              <p className="text-gray-600">On orders over $100</p>
            </div>
            <div className="text-center">
              <div className="bg-[#FF0808] w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-2">Secure Payments</h3>
              <p className="text-gray-600">100% secure transactions</p>
            </div>
            <div className="text-center">
              <div className="bg-[#FF0808] w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192l-3.536 3.536M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-5 0a4 4 0 11-8 0 4 4 0 018 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-2">24/7 Support</h3>
              <p className="text-gray-600">Always here to help</p>
            </div>
            <div className="text-center">
              <div className="bg-[#FF0808] w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-2">30-Day Returns</h3>
              <p className="text-gray-600">Easy returns policy</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}