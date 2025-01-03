const HomePage = require("../pageobjects/home-page");
const { LoginPage } = require("../pageobjects/pageobjects");
const CommonUtility = require("./common-utility");

class HomeUtility extends CommonUtility {
  async signOut() {
    await HomePage.signOut();
    await LoginPage.signInButton.waitForDisplayed(); 
    expect(await LoginPage.signInButton.isDisplayed()).toBe(true);
  }
}

module.exports = new HomeUtility();