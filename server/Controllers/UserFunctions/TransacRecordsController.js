const TransactionRecord = require('../../Database/Models/TransactRecords');
const BankAccount = require('../../Database/Models/userAccounts');

exports.getTransactionRecords = async (req, res) => {
  try {
    const { user } = req.body;

    // Find the bank account for the user to get their ID
    const bankAccount = await BankAccount.findOne({ user });
    //console.log('Bank Account:', bankAccount);
    const userId = bankAccount._id;

    // Find all transaction records where the user is either the sender or receiver
    const transactionRecords = await TransactionRecord.find({
      $or: [{ senderId: userId }, { receiverId: userId }],
    }).sort({ date: -1 });
    //console.log('Transaction Records:', transactionRecords);

    // Map the transaction records to include the sender and receiver usernames
    const transactions = await Promise.all(
      transactionRecords.map(async (record) => {
        //console.log('Transaction Record:', record);
        const sender = await BankAccount.findById(record.senderId).select(
            'userName _id'
        );
        const receiver = await BankAccount.findById(record.receiverId).select(
            'userName _id'
        );
        //console.log('Sender:', sender);
        //console.log('Receiver:', receiver);
        return {
          sender: sender.userName,
          receiver: receiver.userName,
          amount: record.amount,
          date: record.date,
        };
      })
    );

    console.log('Transactions:', transactions);
    res.status(200).json(transactions);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
};
