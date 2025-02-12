
const newAccountActions = require('./createaccount');
const fakeEmail = require('../../utility/utilities')

class CreateAccountAction {
    async clickMyAccount() {
        await newAccountActions.myaccountXpath.click();
    }

    async clickregisterbutton(){
        await newAccountActions.clickRegister.click()
        await browser.pause(3000)
    }

    async enterTheInfomart(){
        await newAccountActions.firstName.setValue("Md Asadul");
        await newAccountActions.lastName.setValue("Haque");
        await newAccountActions.email.setValue(await fakeEmail.RandomEmail());
        await newAccountActions.password.setValue("123456789");
        await newAccountActions.confirmPassword.setValue("123456789");
        await newAccountActions.telephone.setValue("1230254578");
        await newAccountActions.policeButton.click();
        await newAccountActions.continueButton.click();
        const verifyText = await newAccountActions.accountCreteVerify.getText();
        console.log(verifyText)
        await expect(verifyText).toContain("Your Account Has Been Created!");
        await newAccountActions.cButton.click();

    }
}

module.exports = new CreateAccountAction();
