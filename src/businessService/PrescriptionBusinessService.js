const Messages = require("../utils/errorMessageUtil");
const { debug, error } = require("../utils/logging/logger");

//Services
const ClinicService = require("../services/clinicService");
const PatientService = require("../services/patientService");
const PhysicianService = require("../services/physicianService");

class PrescriptionBusinessService {
  constructor() {
    this.clinic = null;
    this.patient = null;
    this.physician = null;
  }

  async callServices({ clinic, patient, physician }) {
    try {
      this.clinic = await ClinicService.getById(clinic.id);
    } catch (err) {
      error(err);
    }
    this.clinic = this.clinic || { name: null };

    try {
      this.physician = await PhysicianService.getById(physician.id);
      if (physician == null) this.notFoundError("02");

      this.patient = await PatientService.getById(patient.id);
      if (patient == null) this.notFoundError("03");

      // save to database
      // save to metrics
    } catch (err) {
      error(err);
      throw err;
    }

    // try save info database and metrics service;
    return this.getReturnData();
  }

  getReturnData() {
    return {
      id: "some new id",
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

  notFoundError(key) {
    let e = new Error(Messages[key]);
    e.statusCode = 404;
    throw e;
  }
}

module.exports = new PrescriptionBusinessService();
