import { test, expect } from "@playwright/test";
test.describe("Home page - without auth", { tag: "@ESA" }, () => {
  test.beforeEach(async ({ page }) => {
    await page.goto("https://practicesoftwaretesting.com/");
  });
  test("Home page", { tag: "@ESA" }, async ({ page }) => {
    await page.goto("https://practicesoftwaretesting.com/");

    // Esnure the sign-in link is present
    await expect(page.getByTestId("nav-sign-in")).toHaveText("Sign in");
  });


  test("Home page - Title", { tag: "@ESA" }, async ({ page }) => {
    // Check the title of the page
    await expect(page).toHaveTitle(
      "Practice Software Testing - Toolshop - v5.0",
    );
  });

  test(
    "Home page - Count of items on page",
    { tag: "@ESA" },
    async ({ page }) => {
      //Check the count of items on the page is 9? Typescript is below:
      // Check the count of items displayed
      const productGrid = page.locator(".col-md-9");
      await expect(productGrid.getByRole("link")).toHaveCount(9);
      expect(await productGrid.getByRole("link").count()).toBe(9);
    },
  );

  test(
    "Home page - Search for Thor Hammer",
    { tag: "@ESA" },
    async ({ page }) => {
      // Search for Thor Hammer and check the result
      const productGrid = page.locator(".col-md-9");
      await page.getByTestId("search-query").fill("Thor Hammer");
      await page.getByTestId("search-submit").click();
      await expect(productGrid.getByRole("link")).toHaveCount(1);
      await expect(page.getByAltText("Thor Hammer")).toBeVisible();
    },
  );
});

test.describe("Home page - with auth", { tag: "@ESA" }, () => {
  test.use({ storageState: ".auth/customer01.json" });

  test.beforeEach(async ({ page }) => {
    await page.goto("https://practicesoftwaretesting.com/");
  });

  test("Check customer is signed in", { tag: "@ESA" }, async ({ page }) => {
    await expect(page.getByTestId("nav-sign-in")).not.toBeVisible();
    await expect(page.getByTestId("nav-menu")).toContainText(" Jane Doe ");
  });
});
