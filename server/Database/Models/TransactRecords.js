const mongoose = require('mongoose');

const transactionRecordSchema = new mongoose.Schema({
  sender: { type: String, required: true },
  receiver: { type: String, required: true },
  senderId: { type: mongoose.Schema.Types.ObjectId, ref: 'BankAccount' },
  receiverId: { type: mongoose.Schema.Types.ObjectId, ref: 'BankAccount' },
  amount: { type: Number, required: true },
  date: { type: Date, default: Date.now },
});

const TransactionRecord = mongoose.model(
  'TransactionRecord',
  transactionRecordSchema
);

module.exports = TransactionRecord;
    