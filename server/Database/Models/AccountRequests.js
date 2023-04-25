const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const accountRequestSchema = new Schema({
    accountType: {
        type: String,
        required: true,
        trim: true
    },
    hasApproved: {
        type: Boolean,
        required: true,
    },
    remarks: {
        type: String,
        required: true
    },
    customerId: {
        type: Schema.Types.ObjectId,
        ref: 'Customer',
        required: true
    }
});

const AccountRequests = mongoose.model('AccountRequests', accountRequestSchema);

module.exports = AccountRequests;

// module.exports = mongoose.model('AccountRequests', accountRequestSchema);