
const mongoose = require("mongoose");

const withdrawSchema = new mongoose.Schema({
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
  collection: "deposit",
}

);

const Withdraw = mongoose.model("Withdraw", withdrawSchema);

module.exports = Withdraw;
