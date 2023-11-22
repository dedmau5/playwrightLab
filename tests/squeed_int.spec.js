// @ts-check
const { test, expect } = require('@playwright/test');

test('has title', async ({ page }) => {
  await page.goto('https://sites.google.com/squeed.com/intranet-of-things/hem?authuser=1');

  // Expect a title "to contain" a substring.
  await expect(page).toHaveTitle(/Intranet of Things/);
});

test('get links', async ({ page }) => {
  await page.goto('https://sites.google.com/squeed.com/intranet-of-things/hem?authuser=1');

  // Click the get started link.
  await page.getByRole('link', { name: 'Get started' }).click();

  // Expects page to have a heading with the name of Installation.
  await expect(page.getByRole('heading', { name: 'Installation' })).toBeVisible();
});
