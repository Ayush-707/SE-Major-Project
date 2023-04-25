// controllers/depositController.js
const Deposit = require("../../Database/Models/depositModel");

const depositMoney = async (req, res) => {
  try {
    const { id, amount } = req.body;

    const deposit = new deposit({
      id,
      amount
    });

    await deposit.save();

    res.status(201).json({ success: true, message: "deposit Successfully" });
  } catch (error) {
    res.status(555).json({ success: false, error: error.message });//Server error responses
  }
};

module.exports = {
    depositMoney
};
