const ApiClient = require("../utilities/api-client");

class MoviesEndpoint extends ApiClient {
  constructor() {
    super();
    this.baseEndpoint = "/api/movies/";
  }

  async getPaginatedMovies(page = 0, size = 4) {
    const params = { page, size };
    return this.get(this.baseEndpoint, params);
  }

  async getMovieById(movieId) {
    return this.get(`${this.baseEndpoint}${movieId}`);
  }

  async getSimilarMovies(movieId, page = 0, size = 4) {
    const params = { page, size };
    return this.get(`${this.baseEndpoint}${movieId}/similar`, params);
  }

  async getUpcomingMovies(page = 0, size = 4, filters={}) {
    const params = { page, size, ...filters };
    return this.get(`${this.baseEndpoint}upcoming`, params);
  }

  async getFeaturedMovies() {
    return this.get(`${this.baseEndpoint}featured`);
  }

  async getCurrentlyShowingMovies(page = 0, size = 4, filters={}) {
    const params = { page, size, ...filters };
    return this.get(`${this.baseEndpoint}currently-showing`, params);
  }
}

module.exports = new MoviesEndpoint();
