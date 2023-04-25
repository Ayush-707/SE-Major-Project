const mongoose = require("mongoose");

const depositSchema = new mongoose.Schema({
  id: {
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
}, {
  collection: "deposit" // Fix: Added closing parenthesis here
});

const Deposit = mongoose.model("Deposit", depositSchema);

module.exports = Deposit;
