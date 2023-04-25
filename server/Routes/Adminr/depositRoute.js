// routes/depositRoutes.js
const express = require("express");
const depositController = require("../../Controllers/Adminc/depositController");

const router = express.Router();

router.post("/", depositController.depositMoney);

module.exports = router;
