// controllers/depositController.js
const User = require("../../Database/Models/userAccounts");

exports.tellBalance = async (req, res) => {
    const { accountNumber } = req.params;

    try {
        const user = await User.findOne({ accountNumber });
        if (!user) {
        return res.status(404).json({ error: 'User not found' });
        }
        const { balance } = user;
        return res.json({ balance: balance });
    } catch (error) {
        console.error(error);
        return res.status(500).json({ error: 'Internal server error' });
    }
}

exports.updateBalance = async (req, res) => {
    const { accountNumber } = req.params;
    const { amount } = req.body;
  
    try {
      const user = await User.findOne({ accountNumber });
      if (!user) {
        return res.status(404).json({ error: 'User not found' });
      }
  
      // Update user's balance
      user.balance += amount;
      await user.save();
  
      return res.json({ message: 'Balance updated successfully', balance: user.balance });
    } catch (error) {
      console.error(error);
      return res.status(500).json({ error: 'Internal server error' });
    }
  };
  