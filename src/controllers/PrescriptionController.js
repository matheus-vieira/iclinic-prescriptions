const { validationResult } = require("express-validator");

const { debug, error } = require("../utils/logging/logger");

//BusinessService
const PrescriptionBusinessService = require("../businessService/PrescriptionBusinessService");

class PrescriptionController {
  constructor() {}

  async save(req, res) {
    debug("checking validation");
    const errors = validationResult(req);

    if (!errors.isEmpty()) {
      debug("has errors");
      return res.status(400).json(require("../utils/errorMessageUtil")["01"]);
    }

    try {
      debug("Calling PrescriptionBusinessService", req.body)
      const data = await PrescriptionBusinessService.callServices(req.body);
      return res.status(200).json({ data: data });
    } catch (err) {
      error(err);
      const statusCode = err.statusCode || 500;
      return res.status(statusCode).json(err.message);
    }
  }
}

module.exports = new PrescriptionController();
