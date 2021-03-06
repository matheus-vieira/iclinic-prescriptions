const cacheRequest = require("../config/cacheManager");
const requestPlus = require("request-plus");
const { error, debug } = require("./logging/logger");

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

const makeRequest = async (reqOpt, route, data) => {
  try {
    debug("makeRequest method");
    debug(`calling ${reqOpt.method} ${reqOpt.url}/${route}`);
    let opt = { url: route };
    if (data) {
      debug(`with data: ${JSON.stringify(data)}`);
      opt.body = data;
    }
    const reqFn = createRequest(reqOpt);
    return await reqFn(opt);
  } catch (err) {
    err.message = reqOpt.errorMessage;
    err.statusCode = err.statusCode || 500;

    error(JSON.stringify(err));
    throw err;
  }
};

module.exports = makeRequest;
