const Page = require('./page');
const selectors = require('../utilities/selectors'); 
const BaseElement = require('../utilities/elements/base-element'); 
 
class MovieDetailsPage extends Page {
  get titleText() {
    return new BaseElement(selectors.movieDetailsPage.titleText);
  }

  async verifyUrlContains(expectedSubstring) {
    const currentUrl = await browser.getUrl();
    expect(currentUrl).toContain(expectedSubstring);
  }
}

module.exports = new MovieDetailsPage();
