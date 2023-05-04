// routes/depositRoutes.js
const express = require("express");
const depositController = require("../../Controllers/Adminc/depositController");
const req = require("../../Controllers/Adminc/AccountController")
const withdrawController = require("../../Controllers/Adminc/withdrawController");
const addNew = require("../../Controllers/Adminc/AddEmployee");

const router = express.Router();

router.post("/Admin/Deposit", depositController.depositMoney);

router.get("/Admin/Requests", req.sendTableData);

router.post("/Admin/Withdraw", withdrawController.withdrawMoney);

router.patch("/Admin/Approve", req.accountRequest);

router.post("/Admin/Create", req.createAccount);

router.post("/Admin/Add", addNew.adminAdd)



module.exports = router;
