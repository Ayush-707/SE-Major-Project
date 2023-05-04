const User = require("../../Database/Models/userAccounts");

const createTransaction = async (req, res) => {
    console.log(req.body);
    const { id, receiverId, amount } = req.body;
  
    // Validate inputs
    if (!id || !receiverId || !amount) {
      return res.status(400).json({ message: "Please fill out all fields" });
    }
    if (isNaN(amount) || amount <= 0) {
      return res.status(400).json({ message: "Please enter a valid amount" });
    }
  
    // Parse the amount parameter
    const parsedAmount = parseFloat(amount);
  
    try {
      // Find sender and receiver users
      const sender = await User.findOne({ idaccountNumber: id });
      const receiver = await User.findOne({ accountNumber: receiverId });
  
      // Check if sender has enough funds
      if (sender.balance < parsedAmount) {
        return res.status(400).json({ message: "Insufficient funds" });
      }
  
      // Update sender and receiver balances
      sender.balance = (Number(sender.balance) - parsedAmount).toString();
      receiver.balance = (Number(receiver.balance) + parsedAmount).toString();
        
    const transaction = new Transaction({

      sender: sender.userName,
      receiver: receiver.userName,
      senderId: sender._id,
      receiverId: receiver._id,
      amount: parsedAmount,
    });
  
      // Save changes to the database
      await sender.save();
      await receiver.save();
      await transaction.save();
  
      // Return success response
      return res.status(200).json({ message: "Transaction completed successfully!" });
    } catch (error) {
      console.log(error);
      return res.status(500).json({ message: "Internal server error" });
    }
  };
  
  module.exports ={createTransaction};
