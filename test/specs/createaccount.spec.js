const CreateAccount = require('../pageobjects/createaccount/createaccount.page.js')

describe("Create new account and loign with valid user name and vaild password", () =>{

    it("Create new account with user name and password", async ()=>{
        await CreateAccount.clickMyAccount();
        await CreateAccount.clickregisterbutton();
        await CreateAccount.enterTheInfomart()

    })
})