const { validationResult } = require("express-validator");
const Messages = require("../utils/errorMessageUtil");

class PrescriptionController {
  async save(req, res) {
    console.log("checking validation");
    const errors = validationResult(req);

    if (!errors.isEmpty()) {
      console.log("has errors");
      return res.status(400).json(Messages["01"]);
    }
    
    res.status(200).json(Messages["00"]);
  }
}

module.exports = new PrescriptionController();
