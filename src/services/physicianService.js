const BaseService = require("./baseService");
const { debug } = require("../utils/logging/logger");

class PhysicianService extends BaseService {
  constructor() {
    super();

    this.url = process.env.PHYSICIANS_API_URI;
    this.token = process.env.PHYSICIANS_API_TOKEN;
    this.timeout = process.env.PHYSICIANS_API_TIMEOUT;
    this.retries = process.env.PHYSICIANS_API_RETRIES;
    this.ttl = process.env.PHYSICIANS_API_TTL;
    this.errorMessage = require("../utils/errorMessageUtil")["02"];

    this.configure();
  }

  async getById(id) {
    debug(`calling ${this.url}/physicians/${id}`);
    return this.get(`physicians/${id}`);
  }
}

module.exports = new PhysicianService;