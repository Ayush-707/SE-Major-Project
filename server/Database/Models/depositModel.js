
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
},
{
  collection: "Deposit",
}

);

const Deposit = mongoose.model("Deposit", depositSchema);

module.exports = Deposit;
