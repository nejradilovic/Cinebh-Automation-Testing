const {HomePage, CurrentlyShowingPage} = require("../pageobjects/pageobjects");
const {CurrentlyShowingUtility, LoginUtility, RegistrationUtility, HomeUtility} = require("../utilities/utilities");
const testData = require("../data/test-data");

const {email, password} = testData.existingUser;

describe('Cinebh Smoke Test', () => {
    beforeAll(async () => {
        await HomePage.open(); 
    });

    it('should register successfully', async () => {
        await RegistrationUtility.registerUser({email: testData.newUser.email, password: testData.newUser.password});
        await RegistrationUtility.verifyUserLoggedIn(testData.newUser.email);
    });

    it('should sign out successfully', async () => {
        await HomeUtility.signOut();
    });

    it('should login successfully', async () => {
        await LoginUtility.loginUser({email, password});
        await LoginUtility.verifyUserLoggedIn(email);
    });

    it('should navigate to Currently Showing page', async () => {
        await HomePage.clickCurrentlyShowing();
        await CurrentlyShowingPage.verifyUrlContains('/currently-showing');
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
