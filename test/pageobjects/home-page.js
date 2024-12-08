const Page = require('./page');

class HomePage extends Page {
    open() {
        return super.open("");
    }

    get currentlyShowingLink() {
        return $('a._link_1hrwq_22[href="/currently-showing"]');
    }

    get upcomingMoviesLink() {
        return $('a._link_1hrwq_22[href="/upcoming"]');
    }

    get venuesLink() {
        return $('a._link_1hrwq_22[href="/venues"]');
    }

    async clickCurrentlyShowing() {
        await this.currentlyShowingLink.click();
    }

    async clickUpcomingMovies() {
        await this.upcomingMoviesLink.click();
    }

    async clickVenues() {
        await this.venuesLink.click();
    }
}

module.exports = new HomePage();
