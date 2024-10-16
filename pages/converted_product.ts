import { Page, Locator } from '@playwright/test';

export class ProductsPage {
  readonly page: Page;

  constructor(page: Page) {
    this.page = page;
  }

  get listLanguages(): Locator {
    return this.page.locator('select[aria-label="Select Language"]');
  }

  get optionEnglish(): Locator {
    return this.page.locator('option[value="en|en"]');
  }

  get optionFrench(): Locator {
    return this.page.locator('option[value="en|fr"]');
  }

  get optionGerman(): Locator {
    return this.page.locator('option[value="en|de"]');
  }

  get optionSpanish(): Locator {
    return this.page.locator('option[value="en|es"]');
  }
}
