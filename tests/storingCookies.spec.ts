import {test, expect} from '@playwright/test'
import fs from 'fs'


test.describe('storing cookies', async()=>{



    test.beforeEach('login', async ({page})=>{

        await page.goto("https://www.saucedemo.com/");
    await page.locator("#user-name").fill("standard_user");
    await page.locator("#password").fill("secret_sauce");
    await page.waitForTimeout(5000);
    //login-button
    await page.locator("#login-button").click();
    await page.waitForTimeout(5000);
    const cookie = await page.context().cookies();
    fs.writeFileSync('cookies.json', JSON.stringify(cookie));
    console.log('Cookies saved!');

    })

    test('login using cookies', async({page})=>{
        

         const cookies = JSON.parse(fs.readFileSync('cookies.json', 'utf8'));
         console.log('cookies are:', cookies);

        // await page.context().addCookies(cookies);
        await page.goto("https://www.saucedemo.com/inventory.html");
        await page.waitForTimeout(5000);

    })



    

    



    


})