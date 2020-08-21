const { notFoundError } = require("../utils/notFoundError");
const { debug, error } = require("../utils/logging/logger");

//Services
const {
  ClinicService,
  PatientService,
  PhysicianService,
  MetricsService,
} = require("../services");

//Database
const PrescriptionRepository = require("../repository/PrescriptionRepository");

class PrescriptionBusinessService {
  constructor() {
    this.clinic;
    this.patient;
    this.physician;
    this.prescription;
    this.text;
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
      debug(`PrescriptionBusinessService::callServices::physician: ${JSON.stringify(this.physician)}`);
      if (this.physician == null) notFoundError("02");

      this.patient = await PatientService.getById(patient.id);
      debug(`PrescriptionBusinessService::callServices::patient: ${JSON.stringify(this.patient)}`);
      if (this.patient == null) notFoundError("03");

      this.prescription = await PrescriptionRepository.createPrescription(this);

      debug(`able to save prescription ${JSON.stringify(this.prescription)}`);
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
      clinic: { id: this.clinic.id },
      patient: { id: this.patient.id },
      physician: { id: this.physician.id },
    };
  }
}

module.exports = new PrescriptionBusinessService();
