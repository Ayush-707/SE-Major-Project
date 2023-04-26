



const express = require('express');
const investController = require("../../Controllers/UserFunctions/investController");

const router = express.Router();

// Route for handling form submission
router.post('/', investController.createInvestment);

module.exports = router;
