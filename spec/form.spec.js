import faker from 'faker';
import puppeteer from 'puppeteer';

const APP = 'http://localhost:8008/#!/top/budget.budget-home';

const lead = {
  name: faker.name.firstName(),
  email: faker.internet.email(),
  phone: faker.phone.phoneNumber(),
  message: faker.random.words(),
};
let page;
let browser;
const width = 1920;
const height = 1080;

beforeAll(async () => {
  browser = await puppeteer.launch({
    headless: false,
    slowMo: 40,
    args: [`--window-size=${width},${height}`],
  });
  page = await browser.newPage();
  await page.setViewport({ width, height });
});
afterAll(() => {
  browser.close();
});

describe('Contact form', () => {
  test('lead can submit a contact request', async () => {
    await page.goto(APP);
    await page.waitForSelector('.webix_layout_line');
    await page.click('input[role=combobox]');
    await page.type('input[role=combobox]', lead.name);
    // await page.click('input[name=email]');
    // await page.type('input[name=email]', lead.email);
    // await page.click('input[name=tel]');
    // await page.type('input[name=tel]', lead.phone);
    // await page.click('textarea[name=message]');
    // await page.type('textarea[name=message]', lead.message);
    // await page.click('input[type=checkbox]');
    // await page.click('button[type=submit]');
    // await page.waitForSelector('.modal');
  }, 16000);
});
