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
    return new Promise((resolve, reject) => {
      this.request({ url: `clinics/${id}` })
        .then((response) => resolve(response.data))
        .catch((error) => reject(error));
    });
  }
}

module.exports = new ClinicService();
