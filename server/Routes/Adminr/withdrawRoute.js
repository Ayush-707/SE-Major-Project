// routes/withdrawRoutes.js
const express = require("express");
const withdrawController = require("../../Controllers/Adminc/withdrawController");

const router = express.Router();

router.post("/", withdrawController.withdrawMoney);

module.exports = router;
