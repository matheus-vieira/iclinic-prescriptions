const { validationResult } = require("express-validator");

const Messages = require("../utils/errorMessageUtil");
const { debug } = require("../utils/logging/logger");

//Services
const ClinicService = require("../services/clinicService");
const PatientService = require("../services/patientService");

class PrescriptionController {
  constructor() {
    this.clinic = null;
  }
  async save(req, res) {
    debug("checking validation");
    const errors = validationResult(req);

    if (!errors.isEmpty()) {
      debug("has errors");
      return res.status(400).json(Messages["01"]);
    }

    const { clinic, patient } = req.body;

    this.clinic = await this.getClinic(clinic.id);
    this.patient = await this.getPatient(patient.id);
    if (this.patient == null) {
      return res.status(400).json(Messages["03"]);
    }

    return res.status(200).json({
      data: this.getReturnData()
    });
  }

  getReturnData() {
    return {
      id: "some new id",
      clinic: {
        id: this.clinic.id,
      },
      patient: {
        id: this.patient.id
      }
    }
  }

  async getClinic(id) {
    let clinicObj;
    try {
      debug("calling ClinicService.getById")
      clinicObj = await ClinicService.getById(id);
    }
    catch (e) {
      clinicObj = { name: null };
    }
    return clinicObj;
  }

  async getPatient(id) {
    let clinicObj;
    try {
      debug("calling PatientService.getById")
      clinicObj = await PatientService.getById(id);
    }
    catch (e) {
      clinicObj = { name: null };
    }
    return clinicObj;
  }
}

module.exports = new PrescriptionController();
