describe('locating elements', () => {
    beforeEach(async () => {
        await browser.maximizeWindow();
        await browser.url("https://selectors.webdriveruniversity.com/");
    });

    it('$ - locate element', async() => {
        await browser.$("//a[@href='#portfolio']").click();
        await browser.pause(3000);

        const webdriverioButton = await $('[data-target="#portfolioModal1"]');
        await webdriverioButton.click();
        await browser.pause(3000);
    });

    it('$$ - locate elememts', async() => {
        const expectedTitles = [
            "#",
            "First",
            "Last",
            "Handle",
            "1",
            "2",
            "3",
            "Firstname",
            "Lastname",
            "Age"
        ]
        const actualTitles = await $$('//table//th').map(element => element.getText());
        expect(expectedTitles).toEqual(actualTitles);
    });
});