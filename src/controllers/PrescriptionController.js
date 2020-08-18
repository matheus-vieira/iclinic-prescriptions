const { validationResult } = require("express-validator");
const Messages = require("../utils/errorMessageUtil");
const logger = require("../utils/logging/logger");

class PrescriptionController {
  async save(req, res) {
    logger.debug("checking validation");
    const errors = validationResult(req);

    if (!errors.isEmpty()) {
      logger.debug("has errors");
      return res.status(400).json(Messages["01"]);
    }
    
    res.status(200).json(Messages["00"]);
  }
}

module.exports = new PrescriptionController();
