/* let myname = "Ravi Shankar";
console.log(myname);

function add(b, c) {
  return b + c;
}
console.log(add("2", 7));

const fs = require("fs");
fs.writeFileSync("hello.txt", "God bless me and my family"); */

const chromium = require("playwright");

(async () => {
  const browser = await chromium.launch({ headless: false });
  const page = await browser.newPage();
  await page.goto("https://www.google.com");
  await page.screenshot({ path: "google.png" });
  //await browser.close();
})();
