const { error, debug } = require("../utils/logging/logger");
const createRequest = require("./createRequest");

const errorHandler = (err, msg) => {
  err.message = msg;
  err.statusCode = 500;
  // console.log(err);
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

  async get(route) {
    const request = createRequest(Object.assign(this, { method: "get" }));
    try {
      debug("get method");
      debug(`calling get ${this.url}/${route}`);
      const { data } = await request({ url: route });
      return data;
    } catch (err) {
      errorHandler(err, this.errorMessage);
    }
  }

  async post(route, data) {
    const request = createRequest(Object.assign(this, { method: "post" }));
    try {
      debug("post method");
      debug(`calling post ${this.url}/${route} with ${JSON.stringify(data)}`);
      await request({ url: route, body: data });
    } catch (err) {
      errorHandler(err, this.errorMessage);
    }
  }
}

module.exports = BaseService;
