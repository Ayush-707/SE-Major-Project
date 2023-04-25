const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const accountInfoSchema = new Schema({
    accountNo: {
        type: String,
        required: true,
        unique: true,
        trim: true
    },
    accountType: {
        type: String,
        required: true,
        trim: true
    },
    branch: {
        type: String,
        required: true,
        trim: true
    },
    balance: {
        type: Number,
        required: true,
        default: 0
    },
    lastTransactionDate: {
        type: Date,
        default: null
    },
    isActive: {
        type: Boolean,
        required: true,
        default: true
    },
    customerID: {
        type: String,
        required: true,
        trim: true
    },
    createdAt: {
        type: Date,
        default: Date.now
    }
});

const AccountInfo = mongoose.model('AccountInfo', accountInfoSchema);

module.exports = AccountInfo;
