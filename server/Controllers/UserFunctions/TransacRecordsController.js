const TransactionRecord = require('../../Database/Models/TransactRecords');
const BankAccount = require('../../Database/Models/userAccounts');

exports.getTransactionRecords = async (req, res) => {
  try {
    const { user } = req.body;

    // Find the bank account for the user to get their ID
    const bankAccount = await BankAccount.findOne({ userName:user });
    if (!bankAccount) {
      return res.status(404).json({ error: 'User not found' });
    }
    const userId = bankAccount.accountNumber;

    // Find all transaction records where the user is either the sender or receiver
    const transactionRecords = await TransactionRecord.find({
      $or: [{ senderaccnum: userId }, { receiveraccnum: userId }],
    }).sort({ date: -1 });

    // Map the transaction records to include the sender and receiver usernames
    const transactions = await Promise.all(
      transactionRecords.map(async (record) => {
        const sender = await BankAccount.findOne({ accountNumber: record.senderaccnum }).select('userName _id');
        const receiver = await BankAccount.findOne({ accountNumber: record.receiveraccnum }).select('userName _id');
        return {
          sender: sender ? sender.userName : 'Unknown',
          receiver: receiver ? receiver.userName : 'Unknown',
          amount: record.amount,
          date: record.date.toLocaleString(),
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
