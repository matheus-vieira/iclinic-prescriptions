const Messages = require("../utils/errorMessageUtil");
const { debug, error } = require("../utils/logging/logger");

//Services
const ClinicService = require("../services/clinicService");
const PatientService = require("../services/patientService");
const PhysicianService = require("../services/physicianService");
const MetricsService = require("../services/metricsService");

//Database
const PrescriptionRepository = require("../repository/PrescriptionRepository");

const notFoundError = (key) => {
  let e = new Error(Messages[key]);
  e.statusCode = 404;
  throw e;
};

class PrescriptionBusinessService {
  constructor() {
    this.clinic = null;
    this.patient = null;
    this.physician = null;
    this.prescription = null;
    this.text = null;
  }

  async callServices({ clinic, patient, physician, text }) {
    this.text = text;
    try {
      this.clinic = await ClinicService.getById(clinic.id);
    } catch (err) {
      error(err);
    }
    this.clinic = this.clinic || { name: null };

    try {
      this.physician = await PhysicianService.getById(physician.id);
      if (physician == null) notFoundError("02");

      this.patient = await PatientService.getById(patient.id);
      if (patient == null) notFoundError("03");

      this.prescription = await PrescriptionRepository.createPrescription(this);

      debug("able to save prescription {0}", this.prescription)
      // save to metrics
      await MetricsService.save(this);
    } catch (err) {
      error(err);
      throw err;
    }

    return this.getReturnData();
  }

  getReturnData() {
    return {
      id: this.prescription.id,
      clinic: {
        id: this.clinic.id,
      },
      patient: {
        id: this.patient.id,
      },
      physician: {
        id: this.physician.id,
      },
    };
  }
}

module.exports = new PrescriptionBusinessService();
