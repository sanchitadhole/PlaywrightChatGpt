test('get started link', async ({ page }) => {
    await page.goto('https://www.webdriveruniversity.com/Contact-Us/contactus.html');
  
    // Click the get started link.
    await page.locat
  
    // Expects page to have a heading with the name of Installation.
    await expect(page.getByRole('heading', { name: 'Installation' })).toBeVisible();
  });
  

  
  cy.visit('https://www.webdriveruniversity.com/Contact-Us/contactus.html');
  cy.get("input[placeholder='First Name']").type('sanchita');