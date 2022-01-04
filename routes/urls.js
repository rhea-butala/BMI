const express = require('express');

const BmiController = require('../controllers/bmi.controller');

const router = express.Router();



const bmiController = new BmiController();
bmiController.register(router);



module.exports = router;
