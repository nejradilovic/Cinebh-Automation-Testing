const Page = require('./page');
const selectors = require('../utilities/selectors'); 
const Button = require("../utilities/elements/button");
const InputField = require("../utilities/elements/input-field");

class RegistrationPage extends Page {
    open() {
        return super.open(""); 
    }

    get emailInput() {
        return new InputField(selectors.loginPage.emailInput);
    }

    get passwordInput() {
        return new InputField(selectors.loginPage.passwordInput);
    }

    get confirmPasswordInput() {
        return new InputField(selectors.registrationPage.confirmPasswordInput);
    }

    get signUpButton() {
        return new Button(selectors.registrationPage.signUpButton);
    }

    get backButton() {
        return new Button(selectors.registrationPage.backButton);
    }

    get signUpLink() {
        return new Button(selectors.loginPage.signUpLink); 
    }
}

module.exports = new RegistrationPage();
