import { Locator, Page } from '@playwright/test';

export class RegisterPage {
  readonly page: Page;
  readonly inputFirstname: Locator;
  readonly inputLastname: Locator;
  readonly inputStreet: Locator;
  readonly inputCity: Locator;
  readonly inputState: Locator;
  readonly inputZip: Locator;
  readonly inputPhone: Locator;
  readonly inputSSN: Locator;
  readonly inputUsername: Locator;
  readonly inputPassword: Locator;
  readonly inputConfirmPassword: Locator;
  readonly buttonRegister: Locator;
  readonly msgRegisterSuccess: Locator;

  constructor(page: Page) {
    this.page = page;
    this.inputFirstname = page.locator('input[id="customer.firstName"]');
    this.inputLastname = page.locator('input[id="customer.lastName"]');
    this.inputStreet = page.locator('input[id="customer.address.street"]');
    this.inputCity = page.locator('input[id="customer.address.city"]');
    this.inputState = page.locator('input[id="customer.address.state"]');
    this.inputZip = page.locator('input[id="customer.address.zipCode"]');
    this.inputPhone = page.locator('input[id="customer.phoneNumber"]');
    this.inputSSN = page.locator('input[id="customer.ssn"]');
    this.inputUsername = page.locator('input[id="customer.username"]');
    this.inputPassword = page.locator('input[id="customer.password"]');
    this.inputConfirmPassword = page.locator('input[id="repeatedPassword"]');
    this.buttonRegister = page.locator('input[value=Register]');
    this.msgRegisterSuccess = page.locator('h1.title');
  }
}
