// paymentMethodColumnTest.spec.js

const { test, expect } = require('@playwright/test');

test.describe('Payment Method Column Test', () => {
  let page;

  test.beforeAll(async ({ browser }) => {
    page = await browser.newPage();
    await page.goto('https://www.ag-grid.com/example-hr/');
  });

  test.afterAll(async () => {
    await page.close();
  });

  test('should not contain "Check" in Payment Method column', async () => {
    // Get all the cells in the Payment Method column
    const paymentMethodCells = await page.locator('div[col-id="paymentMethod"]', (cells) =>
      cells.map((cell) => cell.textContent.trim())
    );
    console.log(`output ${paymentMethodCells}`)
    // Check if none of the cells contain the value "Check"
    expect(paymentMethodCells).not.toContain('Check');
  });
});
