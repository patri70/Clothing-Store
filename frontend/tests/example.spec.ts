import { test, expect } from '@playwright/test';

test('Scenario 1: User can use the search bar to filter products', async ({ page }) => {
  await page.goto('http://localhost:5173/admin');

  const searchInput = page.getByPlaceholder('Search products...');
  await searchInput.fill('#001');

  await expect(page.getByText('Arabella')).toBeVisible();
});

test('Scenario 2: User can add a new product by filling the form', async ({ page }) => {
  await page.goto('http://localhost:5173/admin/add');

  await page.getByPlaceholder('ex: Winter Jacket').fill('Playwright Jacket');
  await page.getByPlaceholder('ex: Jackets').fill('Jacket');
  await page.getByPlaceholder('0.00').fill('299');
  await page.getByPlaceholder('ex: 36, 38, 40').fill('M, L');
  await page.getByPlaceholder('https://example.com/image.jpg').fill('https://picsum.photos/200/300');
  
  await page.getByRole('button', { name: '+ Add Product' }).click();

  await expect(page).toHaveURL('http://localhost:5173/admin');

  const searchInput = page.getByPlaceholder('Search products...');
  await searchInput.fill('Playwright Jacket');

  await expect(page.getByText('Playwright Jacket').first()).toBeVisible();
});

test('Scenario 3: User can access the product view page', async ({ page }) => {
  await page.goto('http://localhost:5173/admin');

  const viewButton = page.getByRole('button', { name: 'View' }).first();
  await viewButton.click();

  await expect(page).toHaveURL(/.*\/product\/.*/);
  
  await expect(page.getByText('Arabella').first()).toBeVisible();
});