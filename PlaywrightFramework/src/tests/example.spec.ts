import { test, expect, chromium, Page} from '@playwright/test';
import {ExampleClass} from '../pages/example.page';

test.describe('test',async()=>{
  let page:Page;
  test.beforeAll(async ({browser}) =>{
    page = await browser.newPage();
  });

  test('Navigate to Google', async () => {
    await page.goto('https://google.com/');
    const url=await page.url();
    expect(url).toContain('google');
  });

  test('Search for Playwright', async () => {
   // await page.goto('https://google.com/');
    let exampletest = new ExampleClass(page);
    await exampletest.typeSearchText();
    await exampletest.pressEnter();
    const text = await exampletest.searchResult();
    await console.log(text);
    expect(text).toContain('Playwright: Fast and reliable');
  });
});