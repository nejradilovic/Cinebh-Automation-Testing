const Page = require('./page');
const selectors = require('../utilities/selectors'); 
const BaseElement = require('../utilities/elements/base-element'); 
 
class MovieDetailsPage extends Page {
  get titleText() {
    return new BaseElement(selectors.movieDetailsPage.titleText);
  }
}

module.exports = new MovieDetailsPage();
