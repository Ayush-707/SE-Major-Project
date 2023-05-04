const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const accountInvestSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  phone: {
    type: String,
    required: true,
  },

  email: {
    type: String,
    required: true,
  },
  accountType: {
    type: String,
    required: true,
  },
  address: {
    type: String,
    required: true,
  },
 
},{ timestamps: true });
 


const InvestAccount = mongoose.model('InvestAccount', accountInvestSchema);

module.exports = InvestAccount;
