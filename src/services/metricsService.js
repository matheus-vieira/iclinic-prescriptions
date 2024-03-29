const BaseService = require("./baseService");

const buildMetricObject = ({ clinic, patient, physician }) => {
  return {
    clinic_id: clinic ? clinic.id : null,
    clinic_name: clinic ? clinic.name : null,
    physician_id: physician.id,
    physician_name: physician.fullName,
    physician_crm: physician.crm,
    patient_id: patient.id,
    patient_name: patient.fullName,
    patient_email: patient.email,
    patient_phone: patient.phone,
  };
};

class MetricsService extends BaseService {
  constructor() {
    super();

    this.url = process.env.METRICS_API_URI;
    this.token = process.env.METRICS_API_TOKEN;
    this.timeout = process.env.METRICS_API_RETRIES;
    this.retries = process.env.METRICS_API_TIMEOUT;
    this.ttl = process.env.METRICS_API_TTL;
    this.errorMessage = require("../utils/errorMessageUtil")["04"];
    this.method = "post";
  }

  async save(param) { 
    return this.post("api/metrics", buildMetricObject(param));
  }
}

module.exports = new MetricsService();
