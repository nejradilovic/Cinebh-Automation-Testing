const { expect } = require("@wdio/globals");
const { HomePage } = require("../pageobjects/pageobjects");

class CommonUtility {
  async verifyMessage(messageSelector, expectedMessage) {
    const actualMessage = await messageSelector.getText();
    expect(actualMessage).toContain(expectedMessage);
  }

  async verifyUserLoggedIn(email) {
    const expectedUsername = email.split('@')[0];  
    await this.verifyMessage(HomePage.usernameDropdown, expectedUsername); 
  }
}

module.exports = CommonUtility;