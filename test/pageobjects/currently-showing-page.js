const Page = require("./page");
const selectors = require("../utilities/selectors");
const BaseElement = require("../utilities/elements/base-element");
const Button = require("../utilities/elements/button");
const InputField = require("../utilities/elements/input-field");

class CurrentlyShowingPage extends Page {
  open() {
    return super.open("currently-showing");
  }

  get loadMoreLink() {
    return new BaseElement(selectors.currentlyShowingPage.loadMoreLink);
  }
  
  get movieList() {
    return new BaseElement(selectors.currentlyShowingPage.movieList);
  }

  get titleText() {
    return new BaseElement(selectors.currentlyShowingPage.titleText);
  }

  get searchInputField() {
    return new InputField(selectors.currentlyShowingPage.searchInputField);
  }

  getFilter(filterName) {
    return new BaseElement(selectors.currentlyShowingPage.filter(filterName));
  }

  getFilterOption(filterOption) {
    return new BaseElement(selectors.currentlyShowingPage.filterOption(filterOption));
  }

  getDate(date) {
    return new Button(selectors.currentlyShowingPage.dateBlockByText(date));
  }

  async loadAllMovies() {
    while (true) {
      const loadMoreButton = await this.loadMoreLink.getElement();
      if (!await loadMoreButton.isExisting()) break;
      await loadMoreButton.click();
    }
  }

  async searchForMovie(movieName) {
    await this.searchInputField.setValue(movieName);
    await browser.keys("Enter");
  }

  async openMovieDetails(index) {
    const results = await this.movieList.getElements();
    if (results.length > index) await results[index].click();
  }

  async getMoviesCountFromTitle() {
    const titleText = await this.titleText.getText();
    const match = titleText.match(/\((\d+)\)/);
    return match ? parseInt(match[1], 10) : 0;
  }

  async verifyMoviesCount() {
    const expectedCount = await this.getMoviesCountFromTitle();
    const movies = await this.movieList.getElements();
    expect(movies.length).toBe(expectedCount);
  }

  async applyFilters(filters) {
    for (const filter of filters) {
      await this.getFilter(filter.name).click();
      await this.getFilterOption(filter.option).click();
    }
  }

  async selectDate(date) {
    const dateBlock = this.getDate(date);
    if (await dateBlock.isExisting()) await dateBlock.click();
    else throw new Error(`Date "${date}" not found in the date picker.`);
  }
}

module.exports = new CurrentlyShowingPage();
