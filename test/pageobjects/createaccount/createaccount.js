class createAccount{
    get myaccountXpath(){
        return $ ('//a[@title="My Account"]')
    }
    get clickRegister(){
        return $ ("//a[text()='Register']")
    }
    get firstName(){
        return $ ('//input[@name="firstname"]')
    }
    get lastName (){
        return $ ('//input[@name="lastname"]')
    }
    get email(){
        return $ ('//input[@name="email"]')
    }
    get telephone(){
        return $ ('//input[@name="telephone"]')
    }
    get password(){
        return $ ('//input[@name="password"]')
    }
    get confirmPassword(){
        return $ ('//input[@name="confirm"]')
    }
    get policeButton(){
        return $ ('//input[@name="agree"]')
    }
    get continueButton(){
        return $ ('//input[@type="submit"]')
    }
    get accountCreteVerify (){
        return $ ("//h1[text()='Your Account Has Been Created!']")
    }
    get cButton(){
        return $ ("//a[text()='Continue']")
    }

}

module.exports = new createAccount();