const CurrentlyShowingPage = require("../pageobjects/currently-showing-page");
const MovieDetailsPage = require("../pageobjects/movie-details-page");
const CommonUtility = require("../utilities/common-utility");
const testData = require("../data/test-data");

class CurrentlyShowingUtility {
  async loadAllAndVerifyMovies() {
    await CurrentlyShowingPage.loadAllMovies();
    await CurrentlyShowingPage.verifyMoviesCount();
  }

  async searchAndOpenMovie(searchTerm, movieIndex = 0) {
    await CurrentlyShowingPage.searchForMovie(searchTerm);
    await this.verifySearchResults(searchTerm);
    await CurrentlyShowingPage.openMovieDetails(movieIndex);
    await MovieDetailsPage.titleText.waitForDisplayed();
    await CommonUtility.checkUrlContains(testData.movie.id);
  }

  async verifySearchResults(searchTerm) {
    const movieList = await CurrentlyShowingPage.movieList.getElements(); 
    for (const movie of movieList) {
      const title = await movie.getText(); 
      expect(title.toLowerCase()).toContain(searchTerm.toLowerCase())
    }
  }
}

module.exports = new CurrentlyShowingUtility();
