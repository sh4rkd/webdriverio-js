describe('webdriveruniversity - contact us page', () => {
    beforeEach(() => {
        browser.maximizeWindow()
    });

    it('valid submission - submit all information', async() => {
        await browser.url('/Contact-Us/contactus.html')
        //first name
        const firstName = await $('[placeholder="First Name"]')
        await firstName.setValue('Fred')
        //last name
        const lastName = await $('[placeholder="Last Name"]')
        await lastName.setValue('Miramontes')
        //email address
        const email = await $('[name="email"]')
        await email.setValue('developer@fredmiramontes.dev')
        //message
        const message = await $('[placeholder="Comments"]')
        await message.setValue("Hi I'm Fred Miramontes and I'm QA Automation!")
        //submit button
        const submit = await $('.contact_button[type="submit"]')
        await submit.click()

        //confirm 
        const submissionSucessfull = await $('#contact_reply>h1')
        await expect(submissionSucessfull).toHaveText('Thank You for your Message!')
    });

    it('invalid submission - dont submit all information', async() => {
        await browser.url('/Contact-Us/contactus.html')
        //first name
        const firstName = await $('[placeholder="First Name"]')
        await firstName.setValue('Fred')
        //last name
        const lastName = await $('[placeholder="Last Name"]')
        await lastName.setValue('Miramontes')
        //message
        const message = await $('[placeholder="Comments"]')
        await message.setValue("Hi I'm Fred Miramontes and I'm QA Automation!")
        //submit button
        const submit = await $('.contact_button[type="submit"]')
        await submit.click()

        //confirm 
        const submissionSucessfull = await $('body')
        await expect(submissionSucessfull).toHaveTextContaining(['Error: all fields are required','Error: Invalid email address '])
    });
});