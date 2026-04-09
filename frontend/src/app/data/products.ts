// Product data for the statistics dashboard
export interface Product {
  id: string;
  name: string;
  category: string;
  price: number;
  sizes: string[];
  rating: number;
  sales: number;
}

export const products: Product[] = [
  {
    id: "#001",
    name: "Arabella",
    category: "Dress",
    price: 110,
    sizes: ["36", "38", "40"],
    rating: 4.8,
    sales: 145
  },
  {
    id: "#002",
    name: "Miara",
    category: "Jeans",
    price: 45,
    sizes: ["36", "40"],
    rating: 4.6,
    sales: 203
  },
  {
    id: "#003",
    name: "Cartia",
    category: "Jacket",
    price: 180,
    sizes: ["36", "38", "42"],
    rating: 4.9,
    sales: 89
  },
  {
    id: "#004",
    name: "Laurna Puff",
    category: "Jacket",
    price: 230,
    sizes: ["36", "38", "40"],
    rating: 4.7,
    sales: 67
  },
  {
    id: "#005",
    name: "Ariadna",
    category: "Jacket",
    price: 170,
    sizes: ["36", "38", "40", "42"],
    rating: 4.5,
    sales: 98
  },
  {
    id: "#006",
    name: "Leandra",
    category: "Accessories",
    price: 11,
    sizes: ["One Size"],
    rating: 4.3,
    sales: 312
  }
];

export const getCategoryStats = () => {
  const stats = products.reduce((acc, product) => {
    acc[product.category] = (acc[product.category] || 0) + 1;
    return acc;
  }, {} as Record<string, number>);

  return Object.entries(stats).map(([name, value]) => ({ name, value }));
};

export const getPriceRangeStats = () => {
  const ranges = [
    { name: "$0-50", min: 0, max: 50, value: 0 },
    { name: "$51-100", min: 51, max: 100, value: 0 },
    { name: "$101-150", min: 101, max: 150, value: 0 },
    { name: "$151-200", min: 151, max: 200, value: 0 },
    { name: "$200+", min: 201, max: Infinity, value: 0 }
  ];

  products.forEach(product => {
    const range = ranges.find(r => product.price >= r.min && product.price <= r.max);
    if (range) range.value++;
  });

  return ranges.filter(r => r.value > 0).map(({ name, value }) => ({ name, value }));
};

export const getSalesData = () => {
  return products.map(p => ({
    id: p.id,
    name: p.name,
    sales: p.sales,
    revenue: p.sales * p.price
  }));
};

export const getTopProducts = () => {
  return [...products]
    .sort((a, b) => b.rating - a.rating)
    .slice(0, 5);
};

export const getAveragePriceByCategory = () => {
  const categoryData = products.reduce((acc, product) => {
    if (!acc[product.category]) {
      acc[product.category] = { total: 0, count: 0 };
    }
    acc[product.category].total += product.price;
    acc[product.category].count++;
    return acc;
  }, {} as Record<string, { total: number; count: number }>);

  return Object.entries(categoryData).map(([name, data]) => ({
    name,
    avgPrice: Math.round(data.total / data.count)
  }));
};