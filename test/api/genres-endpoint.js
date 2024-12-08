const ApiClient = require("../utilities/api-client");

class GenresEndpoint extends ApiClient {
  constructor() {
    super();
    this.baseEndpoint = "/api/genres/";
  }

  async getAllGenres() {
    return this.get(this.baseEndpoint);
  }
}

module.exports = new GenresEndpoint();
