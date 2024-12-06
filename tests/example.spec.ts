import { test, expect } from '@playwright/test';

test.beforeEach(async ({ page }) => {
  await page.goto('https://main.d81yyylt2bnpi.amplifyapp.com/');
  await page.getByRole('button', { name: 'Delete All Todos' }).click();
  await expect(page.getByText('My first todo')).not.toBeVisible();
});

test.afterEach(async ({ page }) => {
  await page.getByRole('button', { name: 'Delete All Todos' }).click();
  await expect(page.getByText('My first todo')).not.toBeVisible();
});

test('has heading', async ({ page }) => {
  await expect(page.getByText('My todos')).toBeVisible();
});

test('add todo and delete all todos', async ({ page }) => {
  await page.getByPlaceholder('Add a new todo').fill('My first todo');
  await page.getByRole('button', { name: '+ new' }).click();

  await expect(page.getByText('My first todo')).toBeVisible();

  await page.getByRole('button', { name: 'Delete All Todos' }).click();

  await expect(page.getByText('My first todo')).not.toBeVisible();
});
