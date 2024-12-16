const VenuesEndpoint = require("../../api/venues-endpoint");
const ApiResponseValidator = require("../../utilities/response-validator");

describe("API Tests for Venues", () => {
  it("should return a list of venues when GET /api/venues/all is called", async () => {
    const response = await VenuesEndpoint.getAllVenues();

    ApiResponseValidator.validateResponse(response);
    ApiResponseValidator.validateEntityFields(response, 'venue');
  });

  it("should return a paginated list of venues when GET /api/venues/ is called", async () => {
    const response = await VenuesEndpoint.getPaginatedVenues();

    ApiResponseValidator.validateResponse(response);
    ApiResponseValidator.validateEntityFields(response, 'venue');
    ApiResponseValidator.validatePaginatedResponse(response);
  });
});