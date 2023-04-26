const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const accountConfigurationSchema = new Schema({
    accountType: {
        type: String,
        required: true,
        trim: true
    },
    interestRate: {
        type: Number,
        required: true,
        default: 0
    },
    minBalance: {
        type: Number,
        required: true,
        default: 0
    },
    withdrawLimit: {
        type: Number,
        required: true,
        default: 0
    }
});

const AccountConfiguration = mongoose.model('AccountConfiguration', accountConfigurationSchema);

module.exports = AccountConfiguration;
