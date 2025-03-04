import { expect, type Locator, type Page } from '@playwright/test';

export class registerPage {
  readonly page: Page;
  readonly menuSolutions: Locator;
  readonly firstName: Locator;
  readonly lastName: Locator;
  readonly address: Locator;
  readonly city: Locator;
  readonly state: Locator;
  readonly zip: Locator;
  readonly phone: Locator;
  readonly ssn: Locator;
  readonly username: Locator;
  readonly password: Locator;
  readonly confirmPassword: Locator;
  readonly btnRegister: Locator;
  readonly msgSuccess: Locator;


  constructor(page: Page) {
    this.page = page;
    this.firstName = page.locator('[id="customer\\.firstName"]');
    this.lastName = page.locator('[id="customer\\.lastName"]');
    this.address = page.locator('[id="customer\\.address\\.street"]');
    this.city = page.locator('[id="customer\\.address\\.city"]');
    this.state = page.locator('[id="customer\\.address\\.state"]');
    this.zip = page.locator('[id="customer\\.address\\.zipCode"]');
    this.phone = page.locator('[id="customer\\.phoneNumber"]');
    this.ssn = page.locator('[id="customer\\.ssn"]');
    this.username = page.locator('[id="customer\\.username"]');
    this.password = page.locator('[id="customer\\.password"]');
    this.confirmPassword = page.locator('#repeatedPassword');
    this.btnRegister = page.getByRole('button', { name: 'Register' });
    this.msgSuccess = page.getByText('Your account was created');
  }

}