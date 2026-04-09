import React, { createContext, useState, useContext, ReactNode } from 'react';
import { products as initialProducts } from '../data/products';

export const addProductLogic = (products: any[], newProduct: any) => [...products, newProduct];
export const deleteProductLogic = (products: any[], id: string) => products.filter(p => p.id !== id);
export const updateProductLogic = (products: any[], id: string, updatedData: any) => 
  products.map(p => p.id === id ? updatedData : p);
export const readProductLogic = (products: any[], id: string) => products.find(p => p.id === id);

export interface Product {
  id: string;
  name: string;
  category: string;
  price: number | string; 
  sizes: string[];
  rating: number;
  [key: string]: any; 
}

interface ProductContextType {
  products: Product[];
  addProduct: (product: Product) => void;
  updateProduct: (id: string, updatedProduct: Product) => void;
  deleteProduct: (id: string) => void;
}

const ProductContext = createContext<ProductContextType | undefined>(undefined);

export function ProductProvider({ children }: { children: ReactNode }) {
  const [products, setProducts] = useState<Product[]>(initialProducts as Product[]);

  const addProduct = (product: Product) => {
    setProducts([...products, product]);
  };

  const updateProduct = (id: string, updatedProduct: Product) => {
    setProducts(products.map(p => p.id === id ? updatedProduct : p));
  };

  const deleteProduct = (id: string) => {
    setProducts(products.filter(p => p.id !== id));
  };

  return (
    <ProductContext.Provider value={{ products, addProduct, updateProduct, deleteProduct }}>
      {children}
    </ProductContext.Provider>
  );
}

export function useProducts() {
  const context = useContext(ProductContext);
  if (context === undefined) {
    throw new Error('useProducts needs to be used within a ProductProvider');
  }
  return context;
}