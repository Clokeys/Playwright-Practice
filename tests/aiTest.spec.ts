import { expect } from "@playwright/test";
import { test } from "./fixture.ts";

test.beforeEach(async ({ page }) => {
  page.setViewportSize({ width: 1280, height: 800 });
  await page.goto("https://www.ag-grid.com/example/");
  await page.waitForLoadState("networkidle");
});

test("search headphone on ebay", async ({ ai, aiQuery, aiAssert }) => {
  // 👀 type keywords, perform a search
  await ai('type "Jessica" in Name search box, hit Enter');

  // 👀 find the items
  const names = await aiQuery(
    "{name: string}[], find names in Name column"
  );

  console.log("headphones in stock", names);
  expect(names?.length).toBeGreaterThan(0);

//   // 👀 assert by AI
await aiAssert(`${names} contains "Jessica"`);
});