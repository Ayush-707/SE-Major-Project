const express = require('express');
const { createInvestment } = require("../../Controllers/UserFunctions/investController");

const router = express.Router();

// Route for handling form submission
router.post('/', createInvestment);

module.exports = router;
