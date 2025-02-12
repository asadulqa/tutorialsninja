
const newAccountActions = require('./createaccount');

class CreateAccountAction {
    async clickMyAccount() {
        await newAccountActions.myaccountXpath.click();
        await browser.pause(3000);
    }
}

module.exports = new CreateAccountAction();
