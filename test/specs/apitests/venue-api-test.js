const venuesEndpoint = require("../../api/venues-endpoint");
const ApiResponseValidator = require("../../utilities/response-validator");

describe("API Tests for Venues", () => {
  it("should return a list of venues when GET /api/venues/all is called", async () => {
    const response = await venuesEndpoint.getAllVenues();

    ApiResponseValidator.validateStatus(response, 200);

    expect(Array.isArray(response.data)).toBe(true);
    ApiResponseValidator.validateVenueFields(response);
  });

  it("should return a paginated list of venues when GET /api/venues/ is called", async () => {
    const response = await venuesEndpoint.getPaginatedVenues();

    ApiResponseValidator.validateStatus(response, 200);

    expect(Array.isArray(response.data.content)).toBe(true);

    if (response.data.content.length > 0) {
      ApiResponseValidator.validateVenueFields(response);
    }
    ApiResponseValidator.validatePaginatedResponse(response);
  });
});
