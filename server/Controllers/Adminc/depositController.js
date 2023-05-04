// controllers/depositController.js
const Deposit = require("../../Database/Models/depositModel");
//const UserDetails = require("../../Database/Models/UserDetails");

exports.depositMoney = async (req, res) => {
  try {
    console.log(req.body);
    const { accountNumber, date, amount } = req.body;

     // Check if email exists in UserDetails collection
  

    const deposit = new Deposit({
      accountNumber,
      date,
      amount
    });

    await deposit.save();

    res.status(201).json({ success: true, message: "deposit Successfully" });
  } catch (error) {
    console.error(error);
    res.status(555).json({ success: false, error: error.message });//Server error responses
  }
};

/*module.exports = {
    depositMoney
};*/
