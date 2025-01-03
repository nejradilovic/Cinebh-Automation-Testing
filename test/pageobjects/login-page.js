const Page = require('./page');
const selectors = require('../utilities/selectors'); 
const Button = require("../utilities/elements/button");
const InputField = require("../utilities/elements/input-field");

class LoginPage extends Page {
    open() {
        return super.open(""); 
    }

    get signInButton() {
        return new Button(selectors.loginPage.signInButton);
    }

    get emailInput() {
        return new InputField(selectors.loginPage.emailInput);
    }

    get passwordInput() {
        return new InputField(selectors.loginPage.passwordInput);
    }

    get submitButton() {
        return new Button(selectors.loginPage.submitButton);
    }
}

module.exports = new LoginPage();
