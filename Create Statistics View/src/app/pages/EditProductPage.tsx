import { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router";
import { useProducts } from "../context/ProductContext"; 
import { Card, CardContent, CardHeader, CardTitle } from "../components/ui/card";
import { Input } from "../components/ui/input";
import { Label } from "../components/ui/label";
import { Button } from "../components/ui/button";
import { ArrowLeft, Save } from "lucide-react";

export default function EditProductPage() {
  const navigate = useNavigate();
  const { id } = useParams();
  const decodedId = id ? decodeURIComponent(id) : "";
  
  const { products, updateProduct } = useProducts();
  const product = products.find((p) => p.id === decodedId);

  const [formData, setFormData] = useState({
    id: product?.id || "",
    name: product?.name || "",
    price: product?.price.toString() || "",
    category: product?.category || "",
    rating: product?.rating.toString() || "",
    sizes: product?.sizes.join(", ") || "",
    image: product?.image || "", 
  });

  const [error, setError] = useState(""); 

  useEffect(() => {
    if (!product) {
      navigate("/admin");
    }
  }, [product, navigate]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!formData.name.trim() || !formData.category.trim() || !formData.price.trim() || !formData.sizes.trim()) {
      setError("All fields are required!");
      return;
    }

    const numericPrice = Number(formData.price);
    if (isNaN(numericPrice) || numericPrice <= 0) {
      setError("Price must be a positive number!");
      return;
    }

    const numericRating = Number(formData.rating);
    if (isNaN(numericRating) || numericRating < 0 || numericRating > 5) {
      setError("Rating must be between 0 and 5!");
      return;
    }


    const updatedProduct = {
      id: formData.id,
      name: formData.name,
      category: formData.category,
      price: numericPrice,
      rating: numericRating,
      sizes: formData.sizes.split(",").map(s => s.trim()),
      image: formData.image || product?.image, 
    };

    updateProduct(formData.id, updatedProduct);
    navigate("/admin"); 
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  if (!product) {
    return null;
  }

  return (
    <div className="min-h-screen bg-gray-50 py-12 px-8">
      <div className="max-w-3xl mx-auto">
        <Button
          variant="outline"
          onClick={() => navigate("/admin")}
          className="mb-6 hover:bg-gray-100"
        >
          <ArrowLeft className="w-4 h-4 mr-2" />
          Back to Admin
        </Button>

        <Card className="shadow-lg">
          <CardHeader>
            <CardTitle className="text-3xl flex items-center gap-2">
              <Save className="w-8 h-8 text-[#FF0808]" />
              Edit Product: {product.name}
            </CardTitle>
          </CardHeader>
          <CardContent>
            
            {error && (
              <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded mb-6">
                {error}
              </div>
            )}

            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-2 gap-6">
                <div className="space-y-2">
                  <Label htmlFor="id">Product ID</Label>
                  <Input
                    id="id"
                    name="id"
                    value={formData.id}
                    disabled
                    className="bg-gray-100 cursor-not-allowed"
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="name">Product Name *</Label>
                  <Input
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="price">Price ($) *</Label>
                  <Input
                    id="price"
                    name="price"
                    type="number"
                    step="0.01"
                    value={formData.price}
                    onChange={handleChange}
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="category">Category *</Label>
                  <Input
                    id="category"
                    name="category"
                    value={formData.category}
                    onChange={handleChange}
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="rating">Rating (0-5) *</Label>
                  <Input
                    id="rating"
                    name="rating"
                    type="number"
                    step="0.1"
                    value={formData.rating}
                    onChange={handleChange}
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="sizes">Sizes (comma-separated) *</Label>
                  <Input
                    id="sizes"
                    name="sizes"
                    value={formData.sizes}
                    onChange={handleChange}
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="image">Image URL</Label>
                  <Input
                    id="image"
                    name="image"
                    placeholder="https://..."
                    value={formData.image}
                    onChange={handleChange}
                  />
                </div>
              </div>

              <div className="flex gap-4 pt-4">
                <Button
                  type="submit"
                  className="flex-1 h-12 bg-[#FF0808] hover:bg-[#dd0606] text-white text-lg"
                >
                  <Save className="w-5 h-5 mr-2" />
                  Save Changes
                </Button>
                <Button
                  type="button"
                  variant="outline"
                  onClick={() => navigate("/admin")}
                  className="flex-1 h-12 text-lg"
                >
                  Cancel
                </Button>
              </div>
            </form>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}