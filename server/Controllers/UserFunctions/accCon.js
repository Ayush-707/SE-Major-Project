
const Account = require("../../Database/Models/TransactRecords");


exports.sendAcc = async (req, res) => {
  try {
    const tableData = await Account.find();
    //console.log(tableData);
    res.status(200).json(tableData);
  } catch (error) {
    console.error(error);
    res.status(400).json({ error: "Internal Server Error" });
  }
};

exports.SendAcca = async (req, res) => {

  try {
    
    const {ID, Action} = req.body;
    
    if ( Action === true) {
      await InvestAccountt.updateOne({ _id: ID }, { $set: { status: "Approved" }});

      res.status(200).json({message: 'Request Approved'})
    }

    if ( Action === false) {
      
      await InvestAccountt.findOneAndRemove({ _id: ID });
      res.status(200).json({message: 'Request Rejected'})
    }
    
    

  } catch (error) {
    console.error(error);
    res.status(400).json({ message: "Error While Approving Request" });
  }
};

exports.SendAccb = async (req, res) => {
    try {
      const { ID,Action } = req.body;
      console.log(ID);
      const accountRequest = await InvestAccountt.findOneAndDelete({_id: ID});
      console.log(accountRequest);
      if (!accountRequest) {
        return res.status(404).json({ message: "Account request not found" });
      }
      const accountNumber = Math.floor(Math.random() * 10000000000);
      const newAccount = new userAccounts({
        accountNumber,
        accountHolderName: accountRequest.name,
        phone: accountRequest.phone,
        balance: '0'
      });
  
      await newAccount.save();
  
      res.status(201).json({ message: "Account created successfully" });
  
    } catch (error) {
      console.error(error);
      res.status(400).json({ message: "Error while creating account" });
    }
  };


