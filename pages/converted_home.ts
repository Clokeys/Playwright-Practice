import { Locator, Page } from '@playwright/test';

export class convertedHomePage {
  readonly page: Page;
  readonly menuSolutions: Locator;
  readonly menuAboutUs: Locator;
  readonly menuSevices: Locator;
  readonly menuProducts: Locator;
  readonly menuLocations: Locator;
  readonly menuAdminPage: Locator;
  readonly linkRegister: Locator;

  constructor(page: Page) {
    this.page = page;
    this.menuSolutions = page.locator('li.Solutions');
    this.menuAboutUs = page.locator('a[href*="about"]');
    this.menuSevices = page.locator('a[href*="services"]');
    this.menuProducts = page.locator('a[href="http://www.parasoft.com/jsp/products.jsp"]');
    this.menuLocations = page.locator('a[href="http://www.parasoft.com/jsp/products.jsp"]');
    this.menuAdminPage = page.locator('a[href*="admin"]');
    this.linkRegister = page.locator('a[href*="register"]');
  }
}
