const mongoose = require('mongoose');

const userBankAccountSchema = new mongoose.Schema({
    accountNumber: {
        type: String,
        required: true,
        unique: true
      },
      accountHolderName: {
        type: String,
        required: true
      },
      phone: {
        type: String,
        required: true,
        
      },
      balance: {
        type: String,
        required: true,
        default: 0
      }
      
}, { timestamps: true });

module.exports = mongoose.model('UserBankAccount', userBankAccountSchema);
