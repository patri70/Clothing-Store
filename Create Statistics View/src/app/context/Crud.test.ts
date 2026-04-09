import { describe, it, expect } from 'vitest';
import { addProductLogic, deleteProductLogic, updateProductLogic, readProductLogic } from './Crud';

describe('Core CRUD Logic', () => {

  const initialMemory = [
    { id: '#001', name: 'Red Dress', category: 'Dress', price: 110, sizes: ['36'] }
  ];

  it('should CREATE a new product', () => {
    const newProduct = { id: '#999', name: 'Test Jacket', category: 'Jackets', price: 150, sizes: ['M', 'L'] };
    const result = addProductLogic(initialMemory, newProduct);
    expect(result.length).toBe(2);
    expect(result[1].name).toBe('Test Jacket');
  });

  it('should READ an existing product', () => {
    const result = readProductLogic(initialMemory, '#001');
    expect(result).toBeDefined();
    expect(result?.name).toBe('Red Dress');
  });

  it('should successfully UPDATE a product', () => {
    const localMemory = [
      { id: '#001', name: 'Red Dress', category: 'Dress', price: 110, sizes: ['36'] },
      { id: '#002', name: 'White T-Shirt', category: 'T-Shirt', price: 50, sizes: ['M'] }
    ];
    
    const updatedData = { id: '#001', name: 'Updated Dress', category: 'Dress', price: 999, sizes: ['36', '38'] };
    
    const result = updateProductLogic(localMemory, '#001', updatedData);
    
    expect(result[0].price).toBe(999);
    expect(result[0].name).toBe('Updated Dress');
    expect(result[1].name).toBe('White T-Shirt');
    expect(result[1].price).toBe(50);
  });

  it('should DELETE a product from memory', () => {
    const result = deleteProductLogic(initialMemory, '#001');
    expect(result.length).toBe(0);
    expect(result.find(p => p.id === '#001')).toBeUndefined();
  });

});