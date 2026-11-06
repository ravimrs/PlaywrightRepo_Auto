import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.locator('body').click();
  await page.goto('about:blank');
  await page.goto('https://www.google.com/search?q=goo&oq=goo&gs_lcrp=EgZjaHJvbWUyBggAEEUYOdIBCDIzMTNqMGoyqAIAsAIB&sourceid=chrome&ie=UTF-8');
  await page.goto('https://www.google.com/sorry/index?continue=https://www.google.com/search%3Fq%3Dgoo%26oq%3Dgoo%26gs_lcrp%3DEgZjaHJvbWUyBggAEEUYOdIBCDIzMTNqMGoyqAIAsAIB%26sourceid%3Dchrome%26ie%3DUTF-8%26sei%3DQXrLapi8CqCmruEP_I_0CA&q=EgQmYvcGGMH0rdYGIjCyb6buutCdzH_I-iwud3cdexLvKjwWZkJfufCFgag6Lt-ieyaemcPJI2srObRfAjoyAVJaAUNg_pv7tNKT98mcAQ');
  await page.locator('iframe[name="a-vtshw4g8bdnm"]').contentFrame().getByRole('checkbox', { name: 'I\'m not a robot' }).click();
});