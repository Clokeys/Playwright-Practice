import { test, expect } from '@playwright/test';
import { homePage } from '../pages/homePage';
import { registerPage } from '../pages/registerPage';
import { productPage } from '../pages/productPage';
import { faker } from '@faker-js/faker';
import fs from 'fs';


test.beforeAll('create test data', async () => {
  let user = {
    firstName: faker.person.firstName(),
    lastName: faker.person.lastName(),
    address: faker.location.streetAddress(),
    city: faker.location.city(),
    state: faker.location.state(),
    zipCode: faker.location.zipCode(),
    phoneNumber: faker.phone.number(),
    ssn: faker.finance.creditCardNumber(),
    username: faker.internet.userName(),
    password: faker.internet.password(),
    };

    let userJson = JSON.stringify(user);
    fs.writeFile('testData.json', userJson, (err) => {
        if (err) {
            console.log('Error writing file:', err);
        } else {
            console.log('Successfully wrote file');
        }
    });
});

test.beforeEach('launch browser', async ({ page }) => {
  await page.goto('/');
});

test('should all menu exist', async ({ page }) => {
  const landingPage = new homePage(page);
  await expect(landingPage.menuSolutions).toBeVisible();
  await expect(landingPage.menuAboutUs).toBeVisible();
  await expect(landingPage.menuSevices).toBeVisible();
  await expect(landingPage.menuProducts).toBeVisible();
  await expect(landingPage.menuLocations).toBeVisible();
  await expect(landingPage.menuAdminPage).toBeVisible();
});

test('should be able to register', async ({ page }) => {
  const landing = new homePage(page);
  const register = new registerPage(page);
  const userData = require('../testData.json');
  await test.slow();
  await landing.linkRegister.click();
  await register.firstName.fill(userData.firstName);
  await register.lastName.fill(userData.lastName);
  await register.address.fill(userData.address);
  await register.city.fill(userData.city);
  await register.state.fill(userData.state);
  await register.zip.fill(userData.zipCode);
  await register.phone.fill(userData.phoneNumber);
  await register.ssn.fill(userData.ssn);
  await register.username.fill(userData.username);
  await register.password.fill(userData.password);
  await register.confirmPassword.fill(userData.password);
  await register.btnRegister.click();
  // await expect(register.msgSuccess).toBeVisible();
});

test('should product page have language options', async ({ page }) => {
  const landing = new homePage(page);
  const product = new productPage(page);

  await landing.menuProducts.click();
  await expect(product.menuLanguage).toBeVisible();
  await product.menuLanguage.click();
  await expect(product.optionEnglish).toBeVisible();
  await expect(product.optionSpanish).toBeVisible();
  await expect(product.optionFrench).toBeVisible();
  await expect(product.optionGerman).toBeVisible();
});

test('playwright - assert filter and title', async ({ page }) => {
  await page.goto('https://www.ag-grid.com/example/');
  await page.getByRole('button', { name: 'Reject All' }).click();
  // break for debug here
  await expect(page.getByPlaceholder('Filter any column...')).toBeVisible();
  await expect(page).toHaveTitle('Demo - Performance Grid')
});  