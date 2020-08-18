const router = require('express').Router();
const validator = require('../../middlewares/validators/PrescriptionValidator');
const controller = require('../../controllers/PrescriptionController');

//Routes
console.log('Setando rotas para prescriptions');
router.post('/prescriptions', validator, controller.save);

module.exports = router;