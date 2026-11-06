import { test, expect } from "@playwright/test";

test("ESA Portal TestId check", { tag: "@ESA" }, async ({ page }) => {
  await page.goto("https://cleanesa.abim.org:44305/");
  //main statement
  // await page.getByTestId("Username").fill("Ravi");
  // export default defineConfig({
  //     testIdAttribute: "name")};

  await page.getByRole("textbox", { name: "Email Address" }).fill("Shankar");
});
