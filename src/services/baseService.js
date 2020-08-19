const cacheRequest = require("../config/cacheManager");
const requestPlus = require("request-plus");
const { error, debug, info } = require("../utils/logging/logger");

const errorHandler = (err, msg) => {
  err.message = msg;
  err.statusCode = 500;

  error(err);
  throw err;
};
class BaseService {
  constructor() {
    this.url;
    this.token;
    this.timeout;
    this.retries;
    this.ttl;
    this.errorMessage;
  }

  configure(method) {
    try {
      this.request = requestPlus({
        defaults: {
          baseUrl: this.url,
          headers: {
            Accept: "Accept: application/json",
            Authorization: `Bearer ${this.token}`,
          },
          method: method || "get",
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

  async get(route) {
    this.configure("get");
    try {
      debug("get method");
      debug(`calling get ${this.url}/${route}`);
      const { data } = await this.request({ url: route });
      return data;
    } catch (err) {
      errorHandler(err, this.errorMessage);
    }
  }

  async post(route, data) {
    this.configure("post");
    try {
      debug("post method");
      debug(`calling post ${this.url}/${route} with ${JSON.stringify(data)}`);
      await this.request({ url: route, body: data });
    } catch (err) {
      errorHandler(err, this.errorMessage);
    }
  }
}

module.exports = BaseService;
