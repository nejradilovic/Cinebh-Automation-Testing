const CurrentlyShowingPage = require("../pageobjects/currently-showing-page");
const MovieDetailsPage = require("../pageobjects/movie-details-page");
const CommonUtility = require("./common-utility");
const testData = require("../data/test-data");

class CurrentlyShowingUtility extends CommonUtility {
  async loadAllAndVerifyMovies() {
    await CurrentlyShowingPage.loadAllMovies();
    await CurrentlyShowingPage.verifyMoviesCount();
  }

  async searchAndOpenMovie(searchTerm, movieIndex = 0) {
    await CurrentlyShowingPage.searchForMovie(searchTerm);
    await CurrentlyShowingPage.verifySearchResults(searchTerm);
    await CurrentlyShowingPage.openMovieDetails(movieIndex);
    await MovieDetailsPage.titleText.waitForDisplayed();
    await MovieDetailsPage.verifyUrlContains(testData.movie.id);
  }
}

module.exports = new CurrentlyShowingUtility();
