const { validationResult } = require("express-validator");

const Messages = require("../utils/errorMessageUtil");
const { debug } = require("../utils/logging/logger");

//Services
const ClinicService = require("../services/clinicService");

class PrescriptionController {
  constructor() {}
  async save(req, res) {
    debug("checking validation");
    const errors = validationResult(req);

    if (!errors.isEmpty()) {
      debug("has errors");
      return res.status(400).json(Messages["01"]);
    }

    const { clinic } = req.body;

    let clinicObj;
    try {
      clinicObj = await ClinicService.getById(clinic.id);
    } catch (e) {
      clinicObj = { name: null };
    }

    return res.status(200).json({
      data: {
        id: "some new id",
        clinic: {
          id: clinicObj.id,
        },
      },
    });
  }

  async getClinic(id) {
    let clinic = null;
    try {
      clinic = await ClinicService.getById(clinic_id);
    } catch (e) {
      clinic = { name: null };
    }
    return clinic;
  }
}

module.exports = new PrescriptionController();
