// routes/depositRoutes.js
const express = require("express");
const depositController = require("../../Controllers/Adminc/depositController");
const req = require("../../Controllers/Adminc/acntReqCntrlr")

const router = express.Router();

router.post("/", depositController.depositMoney);

router.get("/Admin/Requests", req.sendTableData);

module.exports = router;
