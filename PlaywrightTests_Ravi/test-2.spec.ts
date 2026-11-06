import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://www.google.com/');
  await expect(page.getByRole('combobox', { name: 'Search' })).toBeVisible();
  await expect(page.getByRole('combobox', { name: 'Search' })).toBeVisible();
  await page.getByRole('button', { name: 'I\'m feeling lucky' }).click();
  await page.getByRole('combobox', { name: 'Search' }).click();
  await page.getByRole('combobox', { name: 'Search' }).click();
});