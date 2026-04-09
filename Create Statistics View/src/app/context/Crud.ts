// src/app/context/crud.ts
export const addProductLogic = (products: any[], newProduct: any) => [...products, newProduct];
export const readProductLogic = (products: any[], id: string) => products.find(p => p.id === id);
export const updateProductLogic = (products: any[], id: string, updatedData: any) => 
  products.map(p => p.id === id ? updatedData : p);
export const deleteProductLogic = (products: any[], id: string) => products.filter(p => p.id !== id);