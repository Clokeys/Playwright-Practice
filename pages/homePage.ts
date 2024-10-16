import { type Locator, type Page } from '@playwright/test';

export class homePage {
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
    this.menuSolutions = page.getByText('Solutions');
    this.menuAboutUs = page.locator('#headerPanel').getByRole('link', { name: 'About Us' });
    this.menuSevices = page.locator('#headerPanel').getByRole('link', { name: 'Services' });
    this.menuProducts = page.locator('#headerPanel').getByRole('link', { name: 'Products' });
    this.menuLocations = page.locator('#headerPanel').getByRole('link', { name: 'Locations' });
    this.menuAdminPage = page.getByRole('link', { name: 'Admin Page' });
    this.linkRegister = page.getByRole('link', { name: 'Register' });
  }

}