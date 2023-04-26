const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const accountRequestSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  phone: {
    type: String,
    required: true,
  },
  dob: {
    type: String,
    default: false,
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
  status: {
    type: String,
    required: true,
  },
}, {
  timestamps: true, // Add createdAt and updatedAt fields
});

const AccountRequests = mongoose.model('AccountRequests', accountRequestSchema);

module.exports = AccountRequests;
