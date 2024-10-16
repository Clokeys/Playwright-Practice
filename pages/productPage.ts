import { type Locator, type Page } from '@playwright/test';

export class productPage {
  readonly page: Page;
  readonly menuLanguage: Locator;
  readonly optionEnglish: Locator;
  readonly optionFrench: Locator;
  readonly optionGerman: Locator;
  readonly optionSpanish: Locator;

  constructor(page: Page) {
    this.page = page;
    this.menuLanguage = page.getByLabel('Select Language');
    this.optionEnglish = page.getByLabel('Select Language').filter({ hasText: 'English' });
    this.optionFrench = page.getByLabel('Select Language').filter({ hasText: 'Français' });
    this.optionGerman = page.getByLabel('Select Language').filter({ hasText: 'Deutsch' });
    this.optionSpanish = page.getByLabel('Select Language').filter({ hasText: 'Español' });
  }

}