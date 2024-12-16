const ApiClient = require("../utilities/api-client");

class VenuesEndpoint extends ApiClient {
  constructor() {
    super();
    this.baseEndpoint = "/api/venues/";
  }

  async getAllVenues() {
    return this.get(`${this.baseEndpoint}all`);
  }

  async getPaginatedVenues(page = 0, size = 4) {
    const params = { page, size };
    return this.get(this.baseEndpoint, params);
  }
}

module.exports = new VenuesEndpoint();
