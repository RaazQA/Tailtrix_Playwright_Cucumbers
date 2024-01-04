import { Given, When, Then } from "@cucumber/cucumber";
import { expect } from "@playwright/test"; 
import { page } from '../support/config/hooks'; // check path properly // this exported from hooks.ts 
import {login} from "../pages/Assignmentpages";


Given('User navigative to Tailtrix application', async ()=>{
   
    await page.goto('https://staging.talitrix.com/login')
})

When('User enter valid Email address {string}', async (mail)=>{
    await page.locator(login.Inputfeild.email).fill(mail);
    await page.waitForTimeout(4000);
});

When('User enter valid password {string}', async (pass)=>{
    await page.locator(login.Inputfeild.password).fill(pass);
});

Then('User able to click on Login button', async ()=>{
    await page.locator(login.Button.login).click();
    await page.waitForTimeout(10000);
   
});
When('User is able to render Talitrix Application',async ()=>{
    await expect(page.locator(login.Button.Global)).toHaveText('Global');
    await page.waitForTimeout(10000);
});

Then('User should be able to go to the right top of the page and click on manage account icon',async ()=>{
    await page.locator(login.Button.manageaccount).click();
})

When('User should be able to click on the icon to view below records Profile Settings Logout',async ()=>{
    await expect(page.locator(login.Button.profile)).toHaveText('Profile');
    await expect(page.locator(login.Button.settings)).toHaveText('Settings');
    await expect(page.locator(login.Button.logout)).toHaveText('Logout');
    await page.waitForTimeout(6000);
})

Then('User should be able to click on Logout button',async ()=>{
    await page.locator(login.Button.logout).click();
    await page.waitForTimeout(6000);
})

When('User should be able to Logout from the application and should appear login page',async ()=>{
    await expect(page.locator(login.Button.logtoaccount)).toHaveText('Log in to your account');

})

Then('User is able click on Case Notes', async ()=>{
    await page.locator("//span[@aria-label='profile']//*[name()='svg']").click();
});

Then('User has to able to view Add Note Export to PDF Export to ExcelColumn Chooser Global search', async ()=>{
   await page.waitForTimeout(6000);
   await expect(page.locator("//span[contains(text(),'Add Note')]")).toBeVisible();
   await expect(page.locator("//span[normalize-space()='Export to Excel']")).toBeVisible();
   await expect(page.locator("//span[normalize-space()='Export to PDF']")).toBeVisible();
   await expect(page.locator("//div[@title='Column Chooser']//div[@class='dx-button-content']")).toBeVisible();
   await expect(page.locator("//input[@aria-label='Search in the data grid']")).toBeVisible();
});


Then('User has to able to enter the Note ID in the search field and view the result in the column',async ()=>{
    const searchInput = await page.$('input[aria-label="Search in the data grid"]');

    if (searchInput) {
      await searchInput.fill('1456');
      await searchInput.press('Enter');
    } else {
      console.error("Search input element not found");
    }
// await page.waitForTimeout(10000);
});