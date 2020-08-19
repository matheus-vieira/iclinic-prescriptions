const BaseService = require("./baseService");
const { debug } = require("../utils/logging/logger");

class PatientService extends BaseService {
  constructor() {
    super();

    this.url = process.env.PATIENTS_API_URI;
    this.token = process.env.PATIENTS_API_TOKEN;
    this.timeout = process.env.PATIENTS_API_TIMEOUT;
    this.retries = process.env.PATIENTS_API_RETRIES;
    this.ttl = process.env.PATIENTS_API_TTL;
    this.errorMessage = require("../utils/errorMessageUtil")["03"];
  }

  async getById(id) {
    debug(`calling ${this.url}/patients/${id}`);
    return this.get(`patients/${id}`);
  }
}

module.exports = new PatientService();
