const { validationResult } = require('express-validator');
const { '01': malFormedUrl } = require('../utils/errorMessageUtil');

const { debug, error } = require('../utils/logging/logger');

const PrescriptionBusinessService = require('../businessService/PrescriptionBusinessService');

class PrescriptionController {
  constructor() {
    this.businessService = new PrescriptionBusinessService();
  }

  async save(req, res) {
    debug('checking validation');
    const result = validationResult(req);

    if (!result.isEmpty()) {
      Array.from(result.errors).forEach((e) => error(JSON.stringify(e)));
      return res.status(400).json(malFormedUrl);
    }

    try {
      debug('Calling this.businessService', req.body);
      const data = await this.businessService.callServices(req.body);
      return res.status(200).json({ data });
    } catch (err) {
      error(err);
      const statusCode = err.statusCode || 500;
      return res.status(statusCode).json(err.message);
    }
  }
}

module.exports = new PrescriptionController();
