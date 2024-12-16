module.exports = {
    homePage: {
        currentlyShowingLink: '//a[@href="/currently-showing"]',
        seeAllCurrentlyShowingLink: '//a[contains(@class, "_see_all_2gndr_22") and @href="/currently-showing"]',
    },

    currentlyShowingPage: {
        movieList: '//div[@class="_content_iq57s_6"]//a[@class="_container_ajfnb_1"]',
        loadMoreLink: 'div._load_more_iq57s_13:not(._disabled_iq57s_30) > p._load_more_text_iq57s_20',
        titleText: '//p[@class="_title_18g5g_1"]',
        searchInputField: '//input[@placeholder="Search Movies"]',
        filter: (filterName) => `div._select_1bj95_49=${filterName}`,
        filterOption: (option) => `div._dropdown_item_1bj95_87=${option}`,    
        dateBlockByText: (dateText) => `//div[contains(@class, '_date_block_l5j1h_11') and .//p[contains(@class, '_date_l5j1h_11') and text()='${dateText}']]`,
    },
    
    movieDetailsPage: {
        titleText : '//div[contains(@class, "_page_title_1rxy4_6") and text()="Movie Details"]',
    },
};
