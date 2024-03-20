describe.skip('async vs sync - webdriverio example', () => {
    it('async vs sync', async () => {
        await browser.url("/");

        await expect(browser).toHaveUrl("https://www.webdriveruniversity.com/");
    });

    it('async vs sync', () => {
        browser.url("/");
        expect(browser).toHaveUrl("whatever"); //pass without await
    });
});