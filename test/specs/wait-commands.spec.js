describe('wait commands - examples', () => {
    beforeEach(async () => {
        await browser.maximizeWindow()
        await browser.url('/Ajax-Loader/index.html')
    });

    it('pause command - timeout hardcoded', async() => {
        const clickMeButton = await $("//*[text()='CLICK ME!']/..")
        await browser.pause(5000)
        await clickMeButton.click()
        await browser.pause(1000)
    });

    it('pause command - waitForClickable with timeout', async() => {
        const clickMeButton = await $("//*[text()='CLICK ME!']/..")
        await clickMeButton.waitForClickable(5000)
        await clickMeButton.click()
        await browser.pause(1500)
    });

    it('pause command - waitForClickable without timeout', async() => {
        const clickMeButton = await $("//*[text()='CLICK ME!']/..")
        await clickMeButton.waitForClickable()
        await clickMeButton.click()
        await browser.pause(1500)
    });

    it('pause command - waitForDisplayed', async() => {
        const clickMeButton = await $("//*[text()='CLICK ME!']/..")
        await clickMeButton.waitForDisplayed()
        await clickMeButton.click()
        await browser.pause(1500)
    });

    it('pause command - waitForExist', async() => {
        const clickMeButton = await $("//*[text()='CLICK ME!']/..")
        await clickMeButton.waitForExist()
        await clickMeButton.click()
        await browser.pause(1500)
    });//dont work because the element exist in the DOM but no is clickable.

    it.only('pause command - waitUntil', async() => {
        await browser.url('/Accordion/index.html')
        const textBox = await $('#text-appear-box p')
        await textBox.waitUntil(async ()=>{
            return (await textBox.getText()) === 'LOADING COMPLETE.'
        },
        {
            timeout: 15000,
            timeoutMsg: 'Error: expected LOADING COMPLETE for 15 seconds.'
        })
    });
});