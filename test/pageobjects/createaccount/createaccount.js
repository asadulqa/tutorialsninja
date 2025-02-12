class createAccount{
    get myaccountXpath(){
        return $ ('//a[@title="My Account"]')
    }
    get clickRegister(){
        return $ ("//a[text()='Register']")
    }

}

module.exports = new createAccount();