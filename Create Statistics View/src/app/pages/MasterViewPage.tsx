import { useState } from "react";
import { useNavigate } from "react-router";
import { useProducts } from "../context/ProductContext"; 
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "../components/ui/table";
import { Button } from "../components/ui/button";
import { Input } from "../components/ui/input";
import { Pencil, Trash2, Plus, Search, Eye } from "lucide-react";

import imgImage4 from "../../assets/9ddd1d8752981aa001d45f72622c714dd6acb4bc.png";
import imgImage5 from "../../assets/de061ef6e608d29cad02f473fd03784ea3f91b1b.png";
import imgImage6 from "../../assets/b1e61676f58986b1987ae38fd979c7d8c97e1f11.png";
import imgImage7 from "../../assets/1bc355884a1cfe1ac7a479210c7b680407ad260b.png";
import imgImage8 from "../../assets/e2664f5588505a2ee1e4e31269dfd8919f907071.png";
import imgImage9 from "../../assets/dd2a6b95246252eb8cefc6a928916935b6efe817.png";

const productImages: Record<string, string> = {
  "#001": imgImage4,
  "#002": imgImage5,
  "#003": imgImage6,
  "#004": imgImage7,
  "#005": imgImage8,
  "#006": imgImage9,
};

const setCookie = (name: string, value: string, days: number) => {
  const date = new Date();
  date.setTime(date.getTime() + (days * 24 * 60 * 60 * 1000));
  document.cookie = `${name}=${value};expires=${date.toUTCString()};path=/`;
};

const getCookie = (name: string) => {
  const match = document.cookie.match(new RegExp('(^| )' + name + '=([^;]+)'));
  return match ? match[2] : "";
};

export default function MasterViewPage() {
  const navigate = useNavigate();
  const { products, deleteProduct } = useProducts();
  
  const [searchQuery, setSearchQuery] = useState(() => getCookie("lastSearch") || "");  
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 4; 

  const filteredProducts = products.filter((product) =>
    product.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
    product.category.toLowerCase().includes(searchQuery.toLowerCase()) ||
    product.id.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const totalPages = Math.ceil(filteredProducts.length / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const currentProducts = filteredProducts.slice(startIndex, startIndex + itemsPerPage);

  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setSearchQuery(value);
    setCurrentPage(1); 
    setCookie("lastSearch", value, 7); 
  }; 

  const handleDeleteProduct = (id: string) => {
    if (confirm(`Are you sure you want to delete product ${id}?`)) {
      deleteProduct(id);
      if (currentProducts.length === 1 && currentPage > 1) {
        setCurrentPage(currentPage - 1);
      }
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 p-4 md:p-8">
      <div className="max-w-7xl mx-auto">
        
        {/* Header */}
        <div className="bg-gradient-to-r from-black to-gray-900 text-white rounded-lg p-6 md:p-8 mb-8 shadow-lg text-center md:text-left">
          {/* 💡 RESPONSIVE: Text mai mic pe telefon (text-4xl), mare pe laptop (md:text-5xl) */}
          <h1 className="text-4xl md:text-5xl font-bold mb-2">
            <span className="text-white">Product</span>{" "}
            <span className="text-[#FF0808]">Management</span>
          </h1>
          <p className="text-gray-300 text-base md:text-lg">
            Manage your product catalog and inventory
          </p>
        </div>

        {/* Actions Bar */}
        {/* 💡 RESPONSIVE: flex-col pe telefon (se pun unele sub altele), flex-row pe laptop */}
        <div className="bg-white rounded-lg p-4 md:p-6 mb-6 shadow-md flex flex-col md:flex-row items-center justify-between gap-4">
          
          <div className="flex flex-col md:flex-row items-center gap-4 w-full md:w-auto flex-1">
            <div className="relative w-full md:max-w-md">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
              <Input
                type="text"
                placeholder="Search products..."
                value={searchQuery}
                onChange={handleSearch}
                className="pl-10 h-12 w-full"
              />
            </div>
            <p className="text-gray-600 font-medium">
              Total: {filteredProducts.length} product{filteredProducts.length !== 1 ? 's' : ''}
            </p>
          </div>

          <Button 
            // 💡 RESPONSIVE: Butonul ocupă toată lățimea (w-full) pe telefon, ca să fie ușor de apăsat cu degetul
            className="bg-black hover:bg-[#FF0808] text-white h-12 px-6 w-full md:w-auto transition-colors"
            onClick={() => navigate('/admin/add')}
          >
            <Plus className="w-5 h-5 mr-2" />
            Add Product
          </Button>
        </div>

        {/* Products Table */}
        <div className="bg-white rounded-lg shadow-md overflow-hidden">
          {/* 💡 RESPONSIVE TRICK: overflow-x-auto permite tabelului să aibă scroll orizontal DOAR PE TELEFON, ca să nu strice restul paginii */}
          <div className="overflow-x-auto w-full">
            {/* 💡 RESPONSIVE TRICK: min-w-[800px] forțează tabelul să nu se "strivească" pe ecrane mici */}
            <Table className="w-full min-w-[800px]">
              <TableHeader>
                <TableRow className="bg-gray-50">
                  <TableHead className="font-bold text-base">ID</TableHead>
                  <TableHead className="font-bold text-base">Image</TableHead>
                  <TableHead className="font-bold text-base">Name</TableHead>
                  <TableHead className="font-bold text-base">Category</TableHead>
                  <TableHead className="font-bold text-base">Price</TableHead>
                  <TableHead className="font-bold text-base">Sizes</TableHead>
                  <TableHead className="font-bold text-base text-right">Actions</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>

                {currentProducts.map((product) => (
                  <TableRow key={product.id} className="hover:bg-gray-50">
                    <TableCell className="font-medium">{product.id}</TableCell>
                    <TableCell>
                      <div className="w-16 h-20 rounded overflow-hidden border-2">
                        <img
                          src={product.image || productImages[product.id] || imgImage4}
                          alt={product.name}
                          className="w-full h-full object-cover"
                        />
                      </div>
                    </TableCell>
                    <TableCell className="font-semibold text-base">
                      {product.name}
                    </TableCell>
                    <TableCell>
                      <span className="px-3 py-1 bg-gray-100 rounded-full text-sm whitespace-nowrap">
                        {product.category}
                      </span>
                    </TableCell>
                    <TableCell className="font-semibold text-[#FF0808] text-base">
                      ${product.price}
                    </TableCell>
                    <TableCell className="whitespace-nowrap">{product.sizes.join(", ")}</TableCell>
                    <TableCell className="text-right">
                      {/* 💡 RESPONSIVE: Am lăsat butoanele de acțiune flexibile ca să încapă perfect */}
                      <div className="flex justify-end gap-2">
                        <Button
                          variant="outline"
                          size="sm"
                          className="hover:bg-green-50 hover:text-green-600 hover:border-green-600"
                          onClick={() => navigate(`/product/${encodeURIComponent(product.id)}`)}
                        >
                          <Eye className="w-4 h-4 mr-1" />
                          View
                        </Button>
                        <Button
                          variant="outline"
                          size="sm"
                          className="hover:bg-blue-50 hover:text-blue-600 hover:border-blue-600"
                          onClick={() => navigate(`/admin/edit/${encodeURIComponent(product.id)}`)}
                        >
                          <Pencil className="w-4 h-4 mr-1" />
                          Edit
                        </Button>
                        <Button
                          variant="outline"
                          size="sm"
                          className="hover:bg-red-50 hover:text-red-600 hover:border-red-600"
                          onClick={() => handleDeleteProduct(product.id)}
                        >
                          <Trash2 className="w-4 h-4 mr-1" />
                          Delete
                        </Button>
                      </div>
                    </TableCell>
                  </TableRow>
                ))}
                

                {currentProducts.length === 0 && (
                  <TableRow>
                    <TableCell colSpan={7} className="text-center py-8 text-gray-500">
                      No products found.
                    </TableCell>
                  </TableRow>
                )}
              </TableBody>
            </Table>
          </div>
        </div>

        {/* Paginare */}
        {totalPages > 1 && (
          <div className="mt-6 flex justify-center">
            {/* 💡 RESPONSIVE: flex-wrap pe telefoane foarte mici (ex: iPhone SE) în caz că ai prea multe pagini */}
            <div className="flex flex-wrap items-center justify-center gap-2 bg-white px-4 md:px-6 py-3 rounded-lg shadow-md w-full md:w-auto">
              <button 
                onClick={() => setCurrentPage(prev => Math.max(prev - 1, 1))}
                disabled={currentPage === 1}
                className="px-3 py-1 hover:bg-gray-100 rounded transition-colors disabled:opacity-50"
              >
                &lt;
              </button>
              
              {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
                <button
                  key={page}
                  onClick={() => setCurrentPage(page)}
                  className={`px-3 md:px-4 py-1 rounded transition-colors ${
                    currentPage === page
                      ? "bg-[#FF0808] text-white"
                      : "hover:bg-gray-100"
                  }`}
                >
                  {page}
                </button>
              ))}
              
              <button 
                onClick={() => setCurrentPage(prev => Math.min(prev + 1, totalPages))}
                disabled={currentPage === totalPages}
                className="px-3 py-1 hover:bg-gray-100 rounded transition-colors disabled:opacity-50"
              >
                &gt;
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}