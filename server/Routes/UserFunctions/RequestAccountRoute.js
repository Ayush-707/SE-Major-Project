const express = require('express');
const { userNewAccountRequest  } = require("../../Controllers/UserFunctions/RqstAcntCntrlr");

const router = express.Router();

// Route for handling form submission
router.post('/', userNewAccountRequest );

module.exports = router;
