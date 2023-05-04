const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const employeeDetailsSchema = new Schema({
    Name: {
        type: String,
        required: true,
        trim: true
    },

   
    Email: {
        type: String,
        required: true,
        unique: true,
        trim: true
    },
    
    createdAt: {
        type: Date,
        default: Date.now
    }
});

const EmployeeDetails = mongoose.model('EmployeeDetails', employeeDetailsSchema);

module.exports = EmployeeDetails;
