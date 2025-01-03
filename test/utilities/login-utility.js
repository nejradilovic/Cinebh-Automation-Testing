const LoginPage = require("../pageobjects/login-page");
const HomePage = require("../pageobjects/home-page");
const CommonUtility = require("./common-utility");
const testData = require("../data/test-data");


class LoginUtility extends CommonUtility {
    async login({ email = "", password = "" } = {}) {
        await LoginPage.signInButton.click();
        await LoginPage.emailInput.setValue(email);
        await LoginPage.passwordInput.setValue(password);
        await LoginPage.submitButton.click();
    }

    async verifySuccessfulLogin(email) {
        const expectedUsername = email.split('@')[0];
        await this.verifyMessage(HomePage.usernameDropdown, expectedUsername);
    }
}

module.exports = new LoginUtility();
