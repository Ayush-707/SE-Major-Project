// controllers/depositController.js
const Deposit = require("../Models/depositModel");

const createDeposit = async (req, res) => {
  try {
    const { id, amount } = req.body;

    const deposit = new Deposit({
      id,
      amount
    });

    await deposit.save();

    res.status(201).json({ success: true, message: "Deposit created successfully" });
  } catch (error) {
    res.status(500).json({ success: false, error: error.message });
  }
};

module.exports = {
  createDeposit
};
