const Page = require('./page');
const selectors = require('../utilities/selectors'); 
const BaseElement = require('../utilities/elements/base-element'); 
const Button = require('../utilities/elements/button');

class HomePage extends Page {
    open() {
        return super.open(""); 
    }       

    get currentlyShowingLink() {
        return new BaseElement(selectors.homePage.currentlyShowingLink);
    }

    get usernameDropdown() {
        return new BaseElement(selectors.homePage.usernameDropdown);
    }

    get signOutButton() {
        return new Button(selectors.homePage.signOutButton);
    }

    get seeAllCurrentlyShowingLink() {
        return new BaseElement(selectors.homePage.seeAllCurrentlyShowingLink); 
    }

    async clickCurrentlyShowing() {
        await this.currentlyShowingLink.click();
    }

    async clickSeeAllCurrentlyShowing() {
        await this.seeAllCurrentlyShowingLink.click(); 
    }

    async signOut() {
        await this.usernameDropdown.click();
        await this.signOutButton.click();
    }
}

module.exports = new HomePage();
