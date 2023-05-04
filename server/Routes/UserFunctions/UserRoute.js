const express = require("express");
const router = new express.Router();
const sendMail = require( "../../Controllers/UserFunctions/ContactController" ); 
const newAccountRequest = require( "../../Controllers/UserFunctions/RqstAcntCntrlr" ); 
const inAccount = require("../../Controllers/UserFunctions/InController");
const accountInfo = require("../../Controllers/UserFunctions/AccountInfoController");
const transactController = require("../../Controllers/UserFunctions/TranactionController");
const bodyParser = require('body-parser');
const path = require('path');

router.use(bodyParser.urlencoded({ extended: true }));
router.use(express.static(path.resolve(__dirname, 'public')));

//Routes

router.post("/User/Contact", sendMail.userCare);
router.post("/User/New-Account", newAccountRequest.userNewAccountRequest);
router.post('/User/InAccount', inAccount.investAccount );


module.exports = router;
