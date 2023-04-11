const express = require("express");
const router = new express.Router();
const signup = require( "../../Controllers/Auth/SignupController" ); 
const login = require( "../../Controllers/Auth/LoginController" ); 
const Loan = require('../models/Loandb');
const bodyParser = require('body-parser');
const path = require('path');

router.use(bodyParser.urlencoded({ extended: true }));
router.use(express.static(path.resolve(__dirname, 'public')));

//Routes

router.post("/User/Signup", signup.userSignUp);

router.post("/User/Login", login.userLogin);

router.get('/loans', (req, res) => {
  Loan.find()
    .then(loans => res.json(loans))
    .catch(error => console.log(error));
});

router.post('/loans', (req, res) => {
  const { amount } = req.body;
  const loan = new Loan({ amount });
  loan.save()
    .then(newLoan => res.json(newLoan))
    .catch(error => console.log(error));
});

router.put('/loans/:id', (req, res) => {
  const { id } = req.params;
  const { paymentAmount } = req.body;
  Loan.findById(id)
    .then(loan => {
      loan.payments.push({ amount: paymentAmount });
      if (loan.amount === loan.payments.reduce((total, p) => total + p.amount, 0)) {
        loan.status = 'Approved';
      }
      loan.save()
        .then(updatedLoan => res.json(updatedLoan))
        .catch(error => console.log(error));
    })
    .catch(error => console.log(error));
});




module.exports = router;
