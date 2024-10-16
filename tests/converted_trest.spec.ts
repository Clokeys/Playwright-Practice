import { test, expect } from '@playwright/test';
import { faker } from '@faker-js/faker';
import fs from 'fs';

interface TestData {
  firstName: string;
  lastName: string;
  street: string;
  city: string;
  state: string;
  zip: string;
  phone: string;
  ssn: string;
  username: string;
  password: string;
}

test.beforeAll(async () => {
  // create test data
  const firstName = faker.person.firstName();
  const lastName = faker.person.lastName();
  const street = faker.location.street();
  const city = faker.location.city();
  const state = faker.location.state();
  const zip = faker.location.zipCode();
  const phone = faker.phone.number();
  const ssn = faker.phone.number();
  const username = `${firstName}-1212}`;
  const password = `${firstName}_123`;
  const testData: TestData = {
    firstName,
    lastName,
    street,
    city,
    state,
    zip,
    phone,
    ssn,
    username,
    password,
  };

  fs.writeFileSync('testData.json', JSON.stringify(testData));
});

test.beforeEach(async ({ page }) => {
  await page.goto('/');
});

test('Should all menu exist', async ({ page }) => {
  await expect(page.locator('text=Solutions')).toBeVisible();
  await expect(page.locator('text=About Us')).toBeVisible();
  await expect(page.locator('text=Services')).toBeVisible();
  await expect(page.locator('text=Products')).toBeVisible();
  await expect(page.locator('text=Locations')).toBeVisible();
  await expect(page.locator('text=Admin Page')).toBeVisible();
});

test('should be able to register', async ({ page }) => {
  const testData: TestData = JSON.parse(fs.readFileSync('testData.json', 'utf-8'));

  await page.click('text=Register');
  await page.context().clearCookies();

  await page.locator('#inputFirstname').fill(testData.firstName);
  await page.locator('#inputLastname').fill(testData.lastName);
  await page.locator('#inputStreet').fill(testData.street);
  await page.locator('#inputCity').fill(testData.city);
  await page.locator('#inputState').fill(testData.state);
  await page.locator('#inputZip').fill(testData.zip);
  await page.locator('#inputPhone').fill(testData.phone);
  await page.locator('#inputSSN').fill(testData.ssn);
  await page.locator('#inputUsername').fill(testData.username);
  await page.locator('#inputPassword').fill(testData.password);
  await page.locator('#inputConfirmPassword').fill(testData.password);
  await page.locator('button:has-text("Register")').click();

  await expect(page.locator('text=Registration Successful')).toBeVisible();
});

test('should product page have language selection', async ({ page }) => {
  await page.click('text=Products');

  await expect(page.locator('#listLanguages')).toBeVisible();
  await expect(page.locator('text=English')).toBeVisible();
  await expect(page.locator('text=French')).toBeVisible();
  await expect(page.locator('text=German')).toBeVisible();
  await expect(page.locator('text=Spanish')).toBeVisible();
});
