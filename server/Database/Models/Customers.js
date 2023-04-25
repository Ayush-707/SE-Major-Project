const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const customerSchema = new Schema({
    customerID: {
        type: String,
        required: true,
        unique: true,
        trim: true
    },
    name: {
        type: String,
        required: true,
        trim: true
    },
    email: {
        type: String,
        required: true,
        unique: true,
        trim: true
    },
    mobile: {
        type: String,
        required: true,
        trim: true
    },
    dob: {
        type: Date,
        required: true
    },
    address: {
        street: {
          type: String,
          required: true,
          trim: true
        },
        city: {
          type: String,
          required: true,
          trim: true
        },
        pincode: {
          type: String,
          required: true,
          trim: true
        },
        state: {
          type: String,
          required: true,
          trim: true
        }
      },
    username: {
        type: Schema.Types.ObjectId,
        ref: 'UserDetails',
        required: true
    }
});

const CustomerDetails = mongoose.model('Customers', customerSchema);

module.exports = CustomerDetails;
// module.exports = mongoose.model('Customer', customerSchema);