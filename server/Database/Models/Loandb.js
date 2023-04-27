const mongoose = require('mongoose');

const loanSchema = new mongoose.Schema({
  UserName: {
        type: String,
        required: true,
        unique: true,
        trim: true
    },
  amount: {
    type: Number,
    required: true,
  },
  status: {
    type: String,
    enum: ['Pending', 'Approved', 'Rejected'],
    default: 'Pending',
  },
  payments: {
    type: [
      {
        amount: Number,
        date: {
          type: Date,
          default: Date.now,
        },
      }
    ],
    default: [],
  },
});

const Loan = mongoose.model('Loan', loanSchema);

module.exports = Loan;
