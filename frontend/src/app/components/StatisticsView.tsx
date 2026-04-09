import { useState } from "react";
import { BarChart, Bar, PieChart, Pie, Cell, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from "recharts";
import { Star, TrendingUp, Package, DollarSign, BarChart3, Table as TableIcon } from "lucide-react";
import {
  products,
  getCategoryStats,
  getSalesData,
  getTopProducts,
  getAveragePriceByCategory
} from "../data/products";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "./ui/table";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "./ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "./ui/tabs";

const COLORS = ['#FF0808', '#000000', '#828282', '#FFD700', '#FF6B6B', '#4ECDC4'];

export default function StatisticsView() {
  const [viewMode, setViewMode] = useState<"visual" | "tabular">("visual");

  const categoryData = getCategoryStats();
  const salesData = getSalesData();
  const topProducts = getTopProducts();
  const avgPriceByCategory = getAveragePriceByCategory();

  const totalRevenue = salesData.reduce((sum, item) => sum + item.revenue, 0);
  const totalSales = salesData.reduce((sum, item) => sum + item.sales, 0);
  const avgRating = (products.reduce((sum, p) => sum + p.rating, 0) / products.length).toFixed(1);

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
      {/* Header Section */}
      <div className="bg-gradient-to-r from-black to-gray-900 text-white px-8 py-12">
        <div className="max-w-7xl mx-auto">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-5xl font-bold mb-2">
                <span className="text-white">Vanes</span>{" "}
                <span className="text-[#FF0808]">Analytics</span>
              </h1>
              <p className="text-gray-300 text-lg">
                Comprehensive insights into your product performance
              </p>
            </div>
            
            {/* Toggle Button */}
            <div className="flex gap-4 bg-white/10 rounded-lg p-2 backdrop-blur-sm">
              <button
                onClick={() => setViewMode("visual")}
                className={`flex items-center gap-2 px-6 py-3 rounded-md transition-all ${
                  viewMode === "visual"
                    ? "bg-[#FF0808] text-white shadow-lg"
                    : "text-white hover:bg-white/10"
                }`}
              >
                <BarChart3 className="w-5 h-5" />
                Visual
              </button>
              <button
                onClick={() => setViewMode("tabular")}
                className={`flex items-center gap-2 px-6 py-3 rounded-md transition-all ${
                  viewMode === "tabular"
                    ? "bg-[#FF0808] text-white shadow-lg"
                    : "text-white hover:bg-white/10"
                }`}
              >
                <TableIcon className="w-5 h-5" />
                Tabular
              </button>
            </div>
          </div>

          {/* Stats Cards */}
          <div className="grid grid-cols-4 gap-6 mt-8">
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 border border-white/20">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-gray-300 text-sm mb-1">Total Products</p>
                  <p className="text-3xl font-bold">{products.length}</p>
                </div>
                <Package className="w-10 h-10 text-[#FF0808]" />
              </div>
            </div>
            
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 border border-white/20">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-gray-300 text-sm mb-1">Total Revenue</p>
                  <p className="text-3xl font-bold">${totalRevenue.toLocaleString()}</p>
                </div>
                <DollarSign className="w-10 h-10 text-[#FF0808]" />
              </div>
            </div>
            
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 border border-white/20">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-gray-300 text-sm mb-1">Total Sales</p>
                  <p className="text-3xl font-bold">{totalSales}</p>
                </div>
                <TrendingUp className="w-10 h-10 text-[#FF0808]" />
              </div>
            </div>
            
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 border border-white/20">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-gray-300 text-sm mb-1">Avg Rating</p>
                  <p className="text-3xl font-bold">{avgRating}</p>
                </div>
                <Star className="w-10 h-10 text-[#FF0808] fill-[#FF0808]" />
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-8 py-12">
        {viewMode === "visual" ? (
          /* VISUAL VIEW - Charts and Visual Data */
          <div className="space-y-8">
            {/* First Row - Two balanced charts */}
            <div className="grid grid-cols-2 gap-8">
              <Card className="shadow-lg border-2">
                <CardHeader>
                  <CardTitle className="text-2xl">Products by Category</CardTitle>
                  <CardDescription>Distribution of products across categories</CardDescription>
                </CardHeader>
                <CardContent>
                  <ResponsiveContainer width="100%" height={300}>
                    <PieChart>
                      <Pie
                        data={categoryData}
                        cx="50%"
                        cy="50%"
                        labelLine={false}
                        label={({ name, percent }) => `${name}: ${(percent * 100).toFixed(0)}%`}
                        outerRadius={100}
                        fill="#8884d8"
                        dataKey="value"
                        nameKey="name"
                      >
                        {categoryData.map((entry, index) => (
                          <Cell key={`cell-${entry.name}-${index}`} fill={COLORS[index % COLORS.length]} />
                        ))}
                      </Pie>
                      <Tooltip />
                    </PieChart>
                  </ResponsiveContainer>
                </CardContent>
              </Card>

              <Card className="shadow-lg border-2">
                <CardHeader>
                  <CardTitle className="text-2xl">Average Price by Category</CardTitle>
                  <CardDescription>Mean product price per category</CardDescription>
                </CardHeader>
                <CardContent>
                  <ResponsiveContainer width="100%" height={300}>
                    <BarChart data={avgPriceByCategory} layout="vertical">
                      <CartesianGrid strokeDasharray="3 3" />
                      <XAxis type="number" />
                      <YAxis dataKey="name" type="category" />
                      <Tooltip />
                      <Bar dataKey="avgPrice" fill="#000000" />
                    </BarChart>
                  </ResponsiveContainer>
                </CardContent>
              </Card>
            </div>

            {/* Second Row - Top Products Ranking */}
            <Card className="shadow-lg border-2 bg-gradient-to-br from-white to-gray-50">
              <CardHeader>
                <CardTitle className="text-2xl flex items-center gap-2">
                  <Star className="w-6 h-6 fill-[#FFD700] text-[#FFD700]" />
                  Top Rated Products
                </CardTitle>
                <CardDescription>Highest customer satisfaction ratings</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {topProducts.map((product, index) => (
                    <div
                      key={product.id}
                      className="flex items-center justify-between p-4 bg-white rounded-lg border-2 hover:border-[#FF0808] transition-all"
                    >
                      <div className="flex items-center gap-4">
                        <div className={`flex items-center justify-center w-10 h-10 rounded-full font-bold text-white ${
                          index === 0 ? "bg-[#FFD700]" :
                          index === 1 ? "bg-[#C0C0C0]" :
                          index === 2 ? "bg-[#CD7F32]" :
                          "bg-gray-400"
                        }`}>
                          {index + 1}
                        </div>
                        <div>
                          <p className="font-semibold text-lg">{product.name}</p>
                          <p className="text-sm text-gray-500">{product.category}</p>
                        </div>
                      </div>
                      <div className="text-right">
                        {renderStars(product.rating)}
                        <p className="text-sm text-gray-600 mt-1">{product.rating}/5.0</p>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        ) : (
          /* TABULAR VIEW - Data Tables */
          <Card className="shadow-lg border-2">
            <CardHeader>
              <CardTitle className="text-2xl">Complete Product Inventory</CardTitle>
              <CardDescription>All products with detailed information</CardDescription>
            </CardHeader>
            <CardContent>
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead className="font-bold">ID</TableHead>
                    <TableHead className="font-bold">Name</TableHead>
                    <TableHead className="font-bold">Category</TableHead>
                    <TableHead className="font-bold">Price</TableHead>
                    <TableHead className="font-bold">Sizes</TableHead>
                    <TableHead className="font-bold">Rating</TableHead>
                    <TableHead className="font-bold text-right">Sales</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {products.map((product) => (
                    <TableRow key={product.id} className="hover:bg-gray-50">
                      <TableCell className="font-medium">{product.id}</TableCell>
                      <TableCell className="font-semibold">{product.name}</TableCell>
                      <TableCell>{product.category}</TableCell>
                      <TableCell className="font-semibold text-[#FF0808]">${product.price}</TableCell>
                      <TableCell>{product.sizes.join(", ")}</TableCell>
                      <TableCell>
                        <div className="flex items-center gap-2">
                          {renderStars(product.rating)}
                          <span className="text-sm text-gray-600">{product.rating}</span>
                        </div>
                      </TableCell>
                      <TableCell className="text-right font-semibold">{product.sales}</TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </CardContent>
          </Card>
        )}
      </div>
    </div>
  );
}