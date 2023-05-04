const mongoose = require("mongoose");

const depositSchema = new mongoose.Schema({
  accountNumber: {
    type: String,
    required: true
  },
  date: {
    type: Date,
    default: Date.now
  },
  amount: {
    type: Number,
    required: true
  }
}, 
);

const Deposit = mongoose.model("Deposit", depositSchema);

module.exports = Deposit;
