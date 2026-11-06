import { test, expect } from "@playwright/test";
test("ESA", { tag: "@ESA" }, async ({ page }) => {
  await page.goto("https://cleanesa.abim.org:44305/");
  await page.getByRole("link", { name: "ADFS Login " }).click();
  await page
    .getByRole("textbox", { name: "User Account" })
    .fill("abim\\rxslhg");
  await page.getByRole("textbox", { name: "password" }).fill("TempP@ss2026!!");
  await page.getByRole("button", { name: "Sign In" }).click();
  await expect(page.getByRole("heading")).toContainText(
    "EXAM SCORING & ANALYSIS",
  );
});
//npx playwright test tests/SiteTests/AutomationScripts.spec.ts --project=chromium
//npm run test:ui
//npx playwright codegen https://cleanesa.abim.org:44305/ --target=ts --output=tests/SiteTests/AutomationScripts.spec.ts
//npx playwright test tests/SiteTests/AutomationScripts.spec.ts --project=chromium --grep @ESA
