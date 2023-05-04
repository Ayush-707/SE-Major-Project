// routes/depositRoutes.js
const express = require("express");
const depositController = require("../../Controllers/Adminc/depositController");
const req = require("../../Controllers/Adminc/AccountController")
const withdrawController = require("../../Controllers/Adminc/withdrawController");
const invest =  require("../../Controllers/Adminc/InvestC");
const balanceCheck = require("../../Controllers/AdminAndUser/BallanceController");

const router = express.Router();

router.post("/Admin/Deposit", depositController.depositMoney);

router.get("/Admin/Requests", req.sendTableData);

router.post("/Admin/Withdraw", withdrawController.withdrawMoney);

router.patch("/Admin/Approve", req.accountRequest);

router.get("/Admin/Balance/:accountNumber", balanceCheck.tellBalance);

router.patch("/Admin/Balance/:accountNumber", balanceCheck.updateBalance);

// router.get("/Admin/Deposit",balanceCheck.tellBalance);
// router.get("/Admin/Withdraw",balanceCheck.tellBalance);

router.post("/Admin/Create", req.createAccount);

router.get("/Admin/Invest", invest.sendTable);

router.patch("/Admin/InvestF", invest.accountForms);

router.post("/Admin/CreateA", invest.createInvest);



module.exports = router;
