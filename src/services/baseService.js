const makeRequest = require("../utils/request");

class BaseService {
  constructor() {
    this.url;
    this.token;
    this.timeout;
    this.retries;
    this.ttl;
    this.errorMessage;
    this.method = "get";
  }

  async get(route) {
    const { data } = await makeRequest(this, route);
    return data;
  }

  async post(route, data) {
    return await makeRequest(this, route, data);
  }
}

module.exports = BaseService;
