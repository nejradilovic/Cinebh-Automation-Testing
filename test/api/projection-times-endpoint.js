const ApiClient = require("../utilities/api-client");

class ProjectionTimesEndpoint extends ApiClient {
  constructor() {
    super();
    this.baseEndpoint = "/api/projection-times/";
  }

  async getProjectionTimes() {
    return this.get(this.baseEndpoint);
  }
}

module.exports = new ProjectionTimesEndpoint();
