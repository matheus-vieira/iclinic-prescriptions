const router = require("express").Router();
const validator = require("../../middlewares/validators/PrescriptionValidator");
const controller = require("../../controllers/PrescriptionController");

//Routes
router.post("/prescriptions", validator, (req, res) =>
  controller.save(req, res)
);

module.exports = router;
