const express = require("express");
const router = new express.Router();
const signup = require( "../../Controllers/Auth/SignupController" ); 
const login = require( "../../Controllers/Auth/LoginController" ); 
const bodyParser = require('body-parser');
const path = require('path');

router.use(bodyParser.urlencoded({ extended: true }));
router.use(express.static(path.resolve(__dirname, 'public')));

//Routes

router.post("/User/Signup", signup.userSignUp);

router.post("/User/Login", login.userLogin);







module.exports = router;
