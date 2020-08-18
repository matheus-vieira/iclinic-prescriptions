const BaseService = require("./baseService");
const { error, debug } = require("../utils/logging/logger");

class ClinicService extends BaseService {
  constructor() {
    super();

    this.url = process.env.CLINICS_API_URL;
    this.token = process.env.CLINICS_API_TOKEN;
    this.timeout = process.env.CLINICS_API_TIMEOUT;
    this.retries = process.env.CLINICS_API_RETRIES;
    this.ttl = process.env.CLINICS_API_TTL;

    this.configure();
  }

  async getById(id) {
    debug(`calling ${this.url}/clinics/${id}`);
    return this.get(`clinics/${id}`);
  }
}

module.exports = new ClinicService();
