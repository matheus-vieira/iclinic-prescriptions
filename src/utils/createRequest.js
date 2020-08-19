const cacheRequest = require("../config/cacheManager");
const requestPlus = require("request-plus");
const { error } = require("./logging/logger");

const createRequest = ({ url, token, method, timeout, retries, ttl }) => {
  try {
    return requestPlus({
      defaults: {
        baseUrl: url,
        headers: {
          Accept: "Accept: application/json",
          Authorization: `Bearer ${token}`,
        },
        method: method || "get",
        json: true,
        rejectUnauthorized: process.env.APP_ENV !== "development",
        timeout: timeout,
        retry: {
          attempts: retries,
        },
        cache: {
          cache: cacheRequest,
          cacheOptions: {
            ttl: ttl,
          },
        },
      },
    });
  } catch (e) {
    error(e);
  }
};

module.exports = createRequest;
