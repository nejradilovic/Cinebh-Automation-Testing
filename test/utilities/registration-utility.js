const { LoginPage, HomePage } = require("../pageobjects/pageobjects");
const RegistrationPage = require("../pageobjects/registration-page");
const CommonUtility = require("./common-utility");

class RegistrationUtility extends CommonUtility{
    async openRegistrationForm() {
        await LoginPage.signInButton.click();
        await RegistrationPage.signUpLink.click();
    }

    async registerUser({ email = "", password = ""} = {}) {
        await this.openRegistrationForm();
        await RegistrationPage.emailInput.setValue(email); 
        await RegistrationPage.passwordInput.setValue(password); 
        await RegistrationPage.confirmPasswordInput.setValue(password); 
        await RegistrationPage.signUpButton.click(); 
        await RegistrationPage.backButton.click();
    }
}

module.exports = new RegistrationUtility();
