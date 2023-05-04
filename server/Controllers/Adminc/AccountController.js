// controllers/depositController.js
const AccountRequest = require("../../Database/Models/AccountRequests");
const userAccounts = require("../../Database/Models/userAccounts");

exports.sendTableData = async (req, res) => {
  try {
    const tableData = await AccountRequest.find();
    //console.log(tableData);
    res.status(200).json(tableData);
  } catch (error) {
    console.error(error);
    res.status(400).json({ error: "Internal Server Error" });
  }
};

exports.accountRequest = async (req, res) => {

  try {
    
    const {ID, Action} = req.body;
    
    if ( Action === true) {
      await AccountRequest.updateOne({ _id: ID }, { $set: { status: "Approved" }});

      res.status(200).json({message: 'Request Approved'})
    }

    if ( Action === false) {
      
      await AccountRequest.findOneAndRemove({ _id: ID });
      res.status(200).json({message: 'Request Rejected'})
    }
    
    

  } catch (error) {
    console.error(error);
    res.status(400).json({ message: "Error While Approving Request" });
  }
};

exports.createAccount = async (req, res) => {
  try {
    const { ID,Action } = req.body;
    console.log(ID);
    const accountRequest = await AccountRequest.findOneAndDelete({_id: ID});
    console.log(accountRequest);
    if (!accountRequest) {
      return res.status(404).json({ message: "Account request not found" });
    }
    const accountNumber = Math.floor(Math.random() * 10000000000);
    const newAccount = new userAccounts({
      accountNumber,
      accountHolderName: accountRequest.name,
      userName: accountRequest.userName,
      balance: '0'
    });

    await newAccount.save();

    res.status(201).json({ message: "Account created successfully" });

  } catch (error) {
    console.error(error);
    res.status(400).json({ message: "Error while creating account" });
  }
};
