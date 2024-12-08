const ApiResponseValidator = require("../../utilities/response-validator");
const ProjectionTimesEndpoint = require("../../api/projection-times-endpoint");

describe("API Tests for Projection Times", () => {
  it("should return a list of projection times when GET /api/projection-times/ is called", async () => {
    const response = await ProjectionTimesEndpoint.getProjectionTimes();

    ApiResponseValidator.validateStatus(response, 200);
    ApiResponseValidator.validateArrayResponse(response);
    ApiResponseValidator.validateProjectionFields(response);
  });
});
