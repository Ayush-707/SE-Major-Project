const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const accountRequestSchema = new Schema({
  email: {
    type: String,
    required: true,
  },
  accountType: {
    type: String,
    required: true,
  },
  approved: {
    type: Boolean,
    default: false,
  },
}, {
  timestamps: true, // Add createdAt and updatedAt fields
});

const AccountRequests = mongoose.model('AccountRequests', accountRequestSchema);

module.exports = AccountRequests;
