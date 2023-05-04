const express = require("express");
const router = new express.Router();
const sendMail = require( "../../Controllers/UserFunctions/ContactController" ); 
const newAccountRequest = require( "../../Controllers/UserFunctions/RqstAcntCntrlr" ); 
const inAccount = require("../../Controllers/UserFunctions/InController");
<<<<<<< HEAD
const accountInfo = require("../../Controllers/UserFunctions/AccountInfoController");
const transactController = require("../../Controllers/UserFunctions/TranactionController");
=======
const transactController = require("../../Controllers/UserFunctions/TransactionController");
>>>>>>> 69e8a5a1e67714597fa2d9c9aa1a5deca8663307
const bodyParser = require('body-parser');
const path = require('path');

router.use(bodyParser.urlencoded({ extended: true }));
router.use(express.static(path.resolve(__dirname, 'public')));

//Routes

router.post("/User/Contact", sendMail.userCare);
router.post("/User/New-Account", newAccountRequest.userNewAccountRequest);
router.post('/User/InAccount', inAccount.investAccount );
router.post('/User/Home', accountInfo.getAccountInfo)
router.post('/User/Transaction', transactController.createTransaction);


module.exports = router;
