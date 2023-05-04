// routes/depositRoutes.js
const express = require("express");

const req = require("../../Controllers/Adminc/AccountController")
const withdraw = require("../../Controllers/Adminc/withdrawController");
const invest =  require("../../Controllers/Adminc/InvestC");
const accountInfo = require("../../Controllers/Adminc/AccountInfoController");
const balanceCheck = require("../../Controllers/AdminAndUser/BallanceController");
const addNew = require("../../Controllers/Adminc/AddEmployee");
const dep = require("../../Controllers/Adminc/dController");

const router = express.Router();


router.get("/Admin/Requests", req.sendTableData);

router.post("/Admin/Withdraw", withdraw.withdrawMoney);

router.patch("/Admin/Approve", req.accountRequest);

router.get("/Admin/Balance/:accountNumber", balanceCheck.tellBalance);

router.patch("/Admin/Balance/:accountNumber", balanceCheck.updateBalance);

router.post('/Admin/Home', accountInfo.getAccountInfoEmp);

// router.get("/Admin/Deposit",balanceCheck.tellBalance);
// router.get("/Admin/Withdraw",balanceCheck.tellBalance);

router.post("/Admin/Create", req.createAccount);

router.get("/Admin/Invest", invest.sendTable);

router.patch("/Admin/InvestF", invest.accountForms);

router.post("/Admin/CreateA", invest.createInvest);



router.post("/Admin/Add", addNew.adminAdd)
router.post("/Admin/Deposit", dep.deposit)



module.exports = router;
