const fieldDefinitions = require("../data/field-definitions");

class ApiResponseValidator {
  validateStatus(response, statusCode = 200) {
    expect(response.status).toBe(statusCode);
    expect(response.data).toBeDefined();
  }

  isArray(responseData) {
    expect(Array.isArray(responseData)).toBe(true);
  }

  async validateArrayResponse(response) {
    const data = response.data.content || response.data;
    await this.isArray(data); 
  }

  validateFields(response, expectedFields) {
    expectedFields.forEach(field => {
      expect(response.data).toBeDefined(field);
    });
  }

  validateMovieFields(response) {
    const movieFields = fieldDefinitions.movieFields;

    if (Array.isArray(response.data.content)) {
      response.data.content.forEach(movie => {
        this.validateFields({ data: movie }, movieFields);
      });
    } else {
      this.validateFields(response, movieFields);
    }
  }

  validateVenueFields(response) {
    const venueFields = fieldDefinitions.venueFields;

    if (Array.isArray(response.data.content)) {
      response.data.content.forEach(venue => {
        this.validateFields({ data: venue }, venueFields);
      });
    } else {
      this.validateFields(response, venueFields);
    }
  }

  validateGenreFields(response) {
    this.validateFields(response, fieldDefinitions.genreFields);
  }

  validateProjectionFields(response) {
    this.validateFields(response, fieldDefinitions.projectionFields);
  }

  validatePaginatedResponse(response, page = 0, size = 4) {
    expect(response.data.pageable.pageNumber).toBeGreaterThanOrEqual(page);
    expect(response.data.pageable.pageSize).toBeGreaterThanOrEqual(size);
    expect(response.data.totalElements).toBeGreaterThanOrEqual(0);
  }
}

module.exports = new ApiResponseValidator();
