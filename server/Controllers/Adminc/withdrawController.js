// controllers/withdrawController.js
const Withdraw = require("../../Database/Models/withdrawModel");

const withdrawMoney = async (req, res) => {
  try {
    const { id, amount } = req.body;

    const withdraw = new withdraw({
      id,
      amount
    });

    await withdraw.save();

    res.status(201).json({ success: true, message: "withdraw Successfully" });
  } catch (error) {
    res.status(555).json({ success: false, error: error.message });//Server error responses
  }
};

module.exports = {
    withdrawMoney
};
