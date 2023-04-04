const express = require("express");
const router = new express.Router();
const controller = require( "../../Controllers/Auth/AuthController" ); 
const bodyParser = require('body-parser');
const path = require('path');

router.use(bodyParser.urlencoded({ extended: true }));
router.use(express.static(path.resolve(__dirname, 'public')));

//Routes

router.post("/User/Signup", controller.userSignUp);

router.post("/User/Login", controller.userLogin);







module.exports = router;
