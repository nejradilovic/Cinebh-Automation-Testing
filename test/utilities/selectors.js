module.exports = {
    homePage: {
        currentlyShowingLink: '//a[@href="/currently-showing"]',
        seeAllCurrentlyShowingLink: '//a[contains(@class, "_see_all_2gndr_22") and @href="/currently-showing"]',
        usernameDropdown: '//button[contains(@class, "_container_xick5_6")]//div[@class="_content_xick5_25"]/div',
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

    loginPage: {
        signInButton: '//button[contains(@class, "_button_224q1_1 _navbar_224q1_25") and text()="Sign In"]', // Dugme za otvaranje forme
        emailInput: '//input[@placeholder="Email Address" and @name="email"]', // Polje za unos emaila
        passwordInput: '//input[@placeholder="Password" and @name="password"]', // Polje za unos lozinke
        submitButton: '//button[contains(@class, "_button_224q1_1 _solid_224q1_13") and text()="Sign In"]', // Dugme za potvrdu prijave
    },
};
