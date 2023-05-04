const mongoose = require('mongoose');

const investmentSchema = new mongoose.Schema({
  userID: {
    type: String,
    required: true
  },
  phoneNo: {
    type: String,
    required: true
  },
  fundType: {
    type: String,
    required: true
  },
  investmentAmount: {
    type: Number,
    required: true
  },
  duration: {
    type: Number,
    required: true
  }
},


);

const Investment = mongoose.model('Investment', investmentSchema);

module.exports = Investment;
/*
{
  collection: "invest" 
}
 */