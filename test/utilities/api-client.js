const axios = require("axios");
const { baseUrl } = require("../data/config");

class ApiClient {
  constructor(baseURL = baseUrl) {
    this.client = axios.create({
      baseURL,
      headers: {
        "Content-Type": "application/json",
      },
    });

    this.client.interceptors.request.use((config) => {
      console.log(`Request: ${config.method.toUpperCase()} ${config.url}`);
      return config;
    });

    this.client.interceptors.response.use(
      (response) => response,
      (error) => {
        console.error(`API Error: ${error.message}`);
        return Promise.reject(error);
      }
    );
  }

  get(url, params) {
    return this.client.get(url, { params });
  }

  post(url, data) {
    return this.client.post(url, data);
  }

  put(url, data) {
    return this.client.put(url, data);
  }

  delete(url) {
    return this.client.delete(url);
  }
}

module.exports = ApiClient;
