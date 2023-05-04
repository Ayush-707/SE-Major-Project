const User = require("../../Database/Models/userAccounts");

const deposit = async (req, res) => {
    console.log(req.body);
    const { accountNumber, amount } = req.body;
  
    // Validate inputs
    if (!accountNumber || !amount) {
      return res.status(400).json({ message: "Please fill out all fields" });
    }
    if (isNaN(amount) || amount <= 0) {
      return res.status(400).json({ message: "Please enter a valid amount" });
    }
  
    // Parse the amount parameter
    const parsedAmount = parseFloat(amount);
  
    try {
      // Find sender and receiver users
     const user = await User.findOne({accountNumber: accountNumber });
     // const user = await User.findOne({ accountNumber: receiverId });
  
      // Check if sender has enough funds
    
  
      // Update sender and receiver balances
     // sender.balance = (Number(receiver.balance) - parsedAmount).toString();
      user.balance = (Number(user.balance) + parsedAmount).toString();
  
      // Save changes to the database
   //   await sender.save();
      await user.save();
  
      // Return success response
      return res.status(200).json({ message: "Transaction completed successfully!" });
    } catch (error) {
      console.log(error);
      return res.status(500).json({ message: "Internal server error" });
    }
  };
  
  module.exports ={deposit};



/*const User = require("../../Database/Models/userAccounts");

const Deposit = async (req, res) => {
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
      // Find users
      const user = await User.findOne({ idaccountNumber: id });
      

  
      // Update user balance
      user.balance += parsedAmount;
  
      // Save changes to the database
      await user.save();
  
      // Return success response
     return res.status(200).json({ message: "Deposit completed successfully!" });
    } catch (error) {
      console.log(error);
      return res.status(500).json({ message: "Internal server error" });
    }
  };
  
  module.exports ={Deposit};
*/