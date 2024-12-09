const fieldDefinitions = require("../data/field-definitions");

class ApiResponseValidator {
  validateStatus(response, statusCode = 200) {
    expect(response.status).toBe(statusCode);
    expect(response.data).toBeDefined();
  }

  isArray(responseData) {
    expect(Array.isArray(responseData)).toBe(true);
  }

  validateArrayResponse(response) {
    const data = response.data.content || response.data;
    this.isArray(data); 
  }

  validateFields(response, expectedFields) {
    expectedFields.forEach(field => {
      expect(response.data).toBeDefined(field);
    });
  }

  validateEntityFields(response, entityType) {
    const fields = fieldDefinitions[`${entityType}Fields`];
    if (Array.isArray(response.data.content)) {
      response.data.content.forEach(entity => {
        this.validateFields({ data: entity }, fields);
      });
    } else {
      this.validateFields(response, fields);
    }
  }

  validatePaginatedResponse(response, page = 0, size = 4) {
    expect(response.data.pageable.pageNumber).toBe(page);
    expect(response.data.pageable.pageSize).toBeLessThanOrEqual(size);
    expect(response.data.totalElements).toBeGreaterThanOrEqual(0);
  }
}

module.exports = new ApiResponseValidator();
