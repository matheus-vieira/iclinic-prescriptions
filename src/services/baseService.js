const { error, debug } = require("../utils/logging/logger");
const makeRequest = require("../utils/request");

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
    const { data } = await makeRequest(Object.assign(this, { method: "get" }), route);
    return data;
  }

  async post(route, data) {
    return await makeRequest(Object.assign(this, { method: "post" }), route, data);
  }

}

module.exports = BaseService;
