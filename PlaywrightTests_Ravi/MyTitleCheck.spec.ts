import { test, expect } from "@playwright/test";

test("ESA Portal Title Check", { tag: "@Title" }, async ({ page }) => {
  await page.goto("https://qaesa.abim.org:44305/");
  await expect(page).toHaveTitle(
    "American Board of Internal Medicine | Sign In",
  );
  await expect(
    page.getByRole("link", { name: "Reset / Forgotten Password" }),
  ).toBeVisible();
});
