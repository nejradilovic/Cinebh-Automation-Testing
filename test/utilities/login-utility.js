const LoginPage = require("../pageobjects/login-page");
const CommonUtility = require("./common-utility");


class LoginUtility extends CommonUtility {
    async loginUser({ email = "", password = "" } = {}) {
        await LoginPage.signInButton.click();
        await LoginPage.emailInput.setValue(email);
        await LoginPage.passwordInput.setValue(password);
        await LoginPage.submitButton.click();
    }
}

module.exports = new LoginUtility();
