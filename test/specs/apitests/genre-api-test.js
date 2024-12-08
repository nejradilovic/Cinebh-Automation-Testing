const GenresEndpoint = require("../../api/genres-endpoint");
const ApiResponseValidator = require("../../utilities/response-validator");

describe("API Tests for Genres", () => {
  it("should return a list of genres when GET /api/genres/ is called", async () => {
    const response = await GenresEndpoint.getAllGenres();

    ApiResponseValidator.validateStatus(response, 200);
    ApiResponseValidator.validateArrayResponse(response);
    ApiResponseValidator.validateGenreFields(response);
  });
});
