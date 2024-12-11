const HomePage = require('../pageobjects/home-page');
const CommonUtility = require('../utilities/common-utility'); 
const CurrentlyShowingUtility = require('../utilities/currently-showing-utility');
const CurrentlyShowingPage = require('../pageobjects/currently-showing-page');
const testData = require("../data/test-data");

describe('Cinebh Smoke Test', () => {
    beforeAll(async () => {
        await HomePage.open(); 
    });

    it('should navigate to Currently Showing page', async () => {
        await HomePage.clickCurrentlyShowing();
        await CommonUtility.checkUrlContains('/currently-showing');
    });
    
    it('should display all movies on the Currently Showing page', async () => {
        await CurrentlyShowingUtility.loadAllAndVerifyMovies();
    });

    it('should apply filters on movies', async () => {
        await CurrentlyShowingPage.applyFilters(testData.filters);
    });

    it('should dynamically select a specific date from the date picker', async () => {
        await CurrentlyShowingPage.selectDate(testData.date); 
    });    

    it('should allow searching for a movie and viewing its details', async () => {
        await CurrentlyShowingUtility.searchAndOpenMovie(testData.movie.title);
    });
});
