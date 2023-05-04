const express = require("express");
const router = new express.Router();
const signup = require( "../../Controllers/Auth/SignupController" ); 
const login = require( "../../Controllers/Auth/LoginController" ); 
const admin = require ("../../Controllers/Auth/AdminLogin");
//const Loan = require('../models/Loandb');

const bodyParser = require('body-parser');
const path = require('path');

router.use(bodyParser.urlencoded({ extended: true }));
router.use(express.static(path.resolve(__dirname, 'public')));

//Routes

router.post("/User/Signup", signup.userSignUp);

router.post("/User/Login", login.userLogin);

router.post("/Admin/Auth", admin.login )

router.patch("/Admin/myotp", admin.otpValidation)

router.get("/Admin/checkotp", admin.checkoneTimePass)


module.exports = router;
