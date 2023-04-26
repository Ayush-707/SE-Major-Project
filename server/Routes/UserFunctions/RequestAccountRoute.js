const express = require("express");
const router = new express.Router();
const newAccountRequest = require( "../../Controllers/UserFunctions/RequestAccountController" ); 
const bodyParser = require('body-parser');
const path = require('path');

router.use(bodyParser.urlencoded({ extended: true }));
router.use(express.static(path.resolve(__dirname, 'public')));

//Routes

router.post("/User/New-Account", newAccountRequest.userNewAccountRequest);

module.exports = router;
