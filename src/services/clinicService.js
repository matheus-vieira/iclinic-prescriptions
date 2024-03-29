const BaseService = require('./baseService');
const { error } = require('../utils/logging/logger');

class ClinicService extends BaseService {
  constructor() {
    super();

    this.url = process.env.CLINICS_API_URL;
    this.token = process.env.CLINICS_API_TOKEN;
    this.timeout = process.env.CLINICS_API_TIMEOUT;
    this.retries = process.env.CLINICS_API_RETRIES;
    this.ttl = process.env.CLINICS_API_TTL;
    this.errorMessage = '';
  }

  async getById(id) {
    try {
      return await this.get(`clinics/${id}`);
    } catch (err) {
      error(JSON.stringify(err));
    }
    return null;
  }
}

module.exports = new ClinicService();
