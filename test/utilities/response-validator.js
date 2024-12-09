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

  validateEquality(actual, expected) {
    expect(actual).toEqual(expected);
  }

  validateFields(response, expectedFields) {
    expectedFields.forEach((field) => {
      expect(response.data).toBeDefined(field);
    });
  }

  validateEntityFields(response, entityType) {
    const fields = fieldDefinitions[`${entityType}Fields`];
    const content = response.data.content || response.data;

    if (Array.isArray(content) && content.length > 0) {
      content.forEach((entity) => {
        this.validateFields({ data: entity }, fields);
      });
    } else if (content.length === 0) {
      expect(content).toEqual([]);
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
