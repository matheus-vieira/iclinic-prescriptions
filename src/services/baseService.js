const cacheRequest = require("../config/cacheManager");
const requestPlus = require("request-plus");
const { error, debug } = require("../utils/logging/logger");

class BaseService {
  constructor() {
    this.url = "";
    this.token = "";
    this.timeout = "";
    this.retries = "";
    this.ttl = "";
    this.errorMessage = "";
  }
  configure() {
    try {
      this.request = requestPlus({
        defaults: {
          baseUrl: this.url,
          headers: {
            Accept: "Accept: application/json",
            Authorization: `Bearer ${this.token}`,
          },
          json: true,
          rejectUnauthorized: process.env.APP_ENV !== "development",
          timeout: this.timeout,
          retry: {
            attempts: this.retries,
          },
          cache: {
            cache: cacheRequest,
            cacheOptions: {
              ttl: this.ttl,
            },
          },
        },
      });
    } catch (e) {
      error(e);
    }
  }
  get(url) {
    return new Promise((resolve, reject) => {
      this.request({ url: url })
        .then((response) => resolve(response.data))
        .catch((error) => reject(errorHandler(error)));
    });
  }
  

  errorHandler(err) {
    err.message = this.errorMessage;
    err.statusCode = 500
  }
}

module.exports = BaseService;
