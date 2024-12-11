const Page = require('./page');
const selectors = require('../utilities/selectors'); 
const BaseElement = require('../utilities/elements/base-element'); 

class HomePage extends Page {
    open() {
        return super.open(""); 
    }

    get currentlyShowingLink() {
        return new BaseElement(selectors.homePage.currentlyShowingLink);
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
}

module.exports = new HomePage();
