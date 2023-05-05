const express = require("express");
const router = new express.Router();
const sendMail = require( "../../Controllers/UserFunctions/ContactController" ); 
const newAccountRequest = require( "../../Controllers/UserFunctions/RqstAcntCntrlr" ); 
const inAccount = require("../../Controllers/UserFunctions/InController");
const accountInfo = require("../../Controllers/UserFunctions/AccountInfoController");
const transactController = require("../../Controllers/UserFunctions/TransactionController");
const bodyParser = require('body-parser');
const path = require('path');
const acc = require("../../Controllers/UserFunctions/accCon");

router.use(bodyParser.urlencoded({ extended: true }));
router.use(express.static(path.resolve(__dirname, 'public')));

//Routes

router.post("/User/Contact", sendMail.userCare);
router.post("/User/New-Account", newAccountRequest.userNewAccountRequest);
router.post('/User/InAccount', inAccount.investAccount );
router.post('/User/Home', accountInfo.getAccountInfo);
router.post('/User/Transaction', transactController.createTransaction);

router.get("/User/UserA", acc.sendAcc);

router.patch("/User/UserB", acc.SendAcca);

router.post("/User/UserC", acc.SendAccb);


module.exports = router;
