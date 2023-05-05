const mongoose = require('mongoose');

const transactionRecordSchema = new mongoose.Schema({
  sender: { type: String, required: true },
  receiver: { type: String, required: true },
  senderaccnum: { type: String, required: true },
  receiveraccnum: { type: String, required: true },
  amount: { type: Number, required: true },
  date: { type: Date, default: Date.now },
});

const TransactionRecord = mongoose.model(
  'TransactionRecord',
  transactionRecordSchema
);

module.exports = TransactionRecord;
