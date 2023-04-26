const Customer = require("../../Database/Models/Customers");
const AccountRequest = require("../../Database/Models/AccountRequests");

exports.userNewAccountRequest = async (req, res) => {
  const { fullName, phone, dob, email, accountType, street, city, pin, state, userName } = req.body;

  const customerInfo = {
    customerId: 'myCustomerID',
    name: fullName,
    email: email,
    mobile: phone,
    dob: dob,
    address: {street, city, pin, state},
    userName: userName,
  };

  const accountInfo = {
    accountType: accountType,
    hasApproved: false,
    remarks: '',
    customerId: 'myCustomerID'
  };

  const newCustomer = new Customer(customerInfo);

  const newAccountRequest = new AccountRequest(accountInfo);

  try {

    await newCustomer.save();
    console.log(2345);
    await newAccountRequest.save();
    
    return res.status(200).json({ message: "Customer details has been saved to the database and Request sent" });
  } catch (error) {
    console.log(error);
    return res.status(400).json({ message: "An error occurred while saving the customer details." });
  }
};


