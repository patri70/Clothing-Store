import { useState } from "react";
import { useNavigate } from "react-router";
import { useProducts } from "../context/ProductContext";
import { Button } from "../components/ui/button";
import { Input } from "../components/ui/input";
import { ArrowLeft } from "lucide-react";

export default function AddProductPage() {
  const navigate = useNavigate();
  const { products, addProduct } = useProducts();

  const [name, setName] = useState("");
  const [category, setCategory] = useState("");
  const [price, setPrice] = useState("");
  const [sizes, setSizes] = useState("");
  const [imageUrl, setImageUrl] = useState("");
  const [rating, setRating] = useState("5.0"); 
  
  const [error, setError] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (name.trim() === "" || category.trim() === "" || price.trim() === "" || sizes.trim() === "" || imageUrl.trim() === "" || rating.trim() === "") {
      setError("All fields are required!");
      return;
    }

    const numericPrice = Number(price);
    if (isNaN(numericPrice) || numericPrice <= 0) {
      setError("The price must be a valid number greater than 0!");
      return;
    }

    const numericRating = Number(rating);
    if (isNaN(numericRating) || numericRating < 0 || numericRating > 5) {
      setError("The rating must be a valid number between 0 and 5!");
      return;
    }

    setError(""); 

    const currentIds = products
      .map(p => parseInt(p.id.replace('#', '')))
      .filter(id => !isNaN(id));
    
    const maxId = currentIds.length > 0 ? Math.max(...currentIds) : 0;
    const nextId = "#" + (maxId + 1).toString().padStart(3, '0');

    const newProduct = {
      id: nextId,
      name: name,
      category: category,
      price: numericPrice,
      sizes: sizes.split(",").map(s => s.trim()), 
      rating: numericRating,
      image: imageUrl 
    };

    addProduct(newProduct);
    navigate("/admin"); 
  };

  return (
    <div className="min-h-screen bg-gray-50 p-8">
      <div className="max-w-2xl mx-auto bg-white rounded-lg shadow-md p-8">
        
        <Button variant="outline" onClick={() => navigate("/admin")} className="mb-6">
          <ArrowLeft className="w-4 h-4 mr-2" /> Cancel
        </Button>

        <h1 className="text-3xl font-bold mb-6 text-[#FF0808]">Add New Product</h1>

        {error && (
          <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded mb-4">
            {error}
          </div>
        )}

        <form onSubmit={handleSubmit} className="space-y-5">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Product Name *</label>
            <Input placeholder="ex: Winter Jacket" value={name} onChange={(e) => setName(e.target.value)} />
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Category *</label>
              <Input placeholder="ex: Jackets" value={category} onChange={(e) => setCategory(e.target.value)} />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Price ($) *</label>
              <Input type="number" step="0.01" placeholder="0.00" value={price} onChange={(e) => setPrice(e.target.value)} />
            </div>
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Rating (0.0 - 5.0) *</label>
              <Input type="number" step="0.1" min="0" max="5" value={rating} onChange={(e) => setRating(e.target.value)} />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Sizes (comma-separated) *</label>
              <Input placeholder="ex: 36, 38, 40" value={sizes} onChange={(e) => setSizes(e.target.value)} />
            </div>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Image URL *</label>
            <Input placeholder="https://example.com/image.jpg" value={imageUrl} onChange={(e) => setImageUrl(e.target.value)} />
          </div>

          <Button type="submit" className="w-full bg-black text-white hover:bg-[#FF0808] h-12 text-lg mt-4">
            + Add Product
          </Button>
        </form>

      </div>
    </div>
  );
}