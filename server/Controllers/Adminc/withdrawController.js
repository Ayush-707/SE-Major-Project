const User = require("../../Database/Models/userAccounts");

const withdrawMoney = async (req, res) => {
    console.log(req.body);
    const { id, amount } = req.body;
  
    // Validate inputs
    if (!id || !amount) {
      return res.status(400).json({ message: "Please fill out all fields" });
    }
    if (isNaN(amount) || amount <= 0) {
      return res.status(400).json({ message: "Please enter a valid amount" });
    }
  
    // Parse the amount parameter
    const parsedAmount = parseFloat(amount);
  
    try {
      // Find user
     const user = await User.findOne({accountNumber: id });
     
      // Update user balance
      user.balance = (Number(user.balance) - parsedAmount).toString();
  
      // Save changes to the database
      await user.save();
  
      // Return success response
      return res.status(200).json({ message: "Withdraw completed successfully!" });
    } catch (error) {
      console.log(error);
      return res.status(500).json({ message: "Internal server error" });
    }
  };
  
  module.exports ={withdrawMoney};



