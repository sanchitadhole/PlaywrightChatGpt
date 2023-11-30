const { test, expect } = require('@playwright/test');

test('find locators in multiple ways',async({page})=>{

    //find single elements
    await page.goto('https://webdriveruniversity.com/Contact-Us/contactus.html');
    let singleEle = await page.$('[name="contactme"]');
    expect(singleEle).not.toBeNull

    //find multiple element
    await page.goto('https://webdriveruniversity.com/Contact-Us/contactus.html');
    let multipleEle = await page.$$('input[type="text"]');
    expect(multipleEle.length).toBe(3)

    //find element by class name
    await page.goto('https://webdriveruniversity.com/Contact-Us/contactus.html');
    let className = await page.$$('.text-center');
    expect(className.length).toBe(2);

    
    //find element by id 
    await page.goto('https://webdriveruniversity.com/Contact-Us/contactus.html');
    let eleId = await page.$$('#contact_form');
    expect(eleId).not.toBeNull();

    // find element by css Selector
    await page.goto('https://webdriveruniversity.com/Contact-Us/contactus.html');
    let cssSelector = await page.$$('input[name = "first_name"]');
    expect(cssSelector).not.toBeNull

    // find element by Tagname
    await page.goto('https://webdriveruniversity.com/Contact-Us/contactus.html');
    let Tagname = await page.locator('h2').innerText();
    expect(Tagname).toEqual("CONTACT US")

});