import React, { useState } from 'react';

function TransactionPage() {
  const [depositAmount, setDepositAmount] = useState('');
  const [withdrawalAmount, setWithdrawalAmount] = useState('');
  const [transferAmount, setTransferAmount] = useState('');
  const [transferAccount, setTransferAccount] = useState('');
  const [billPayAmount, setBillPayAmount] = useState('');
  const [billPayee, setBillPayee] = useState('');

  const handleDeposit = (e) => {
    e.preventDefault();
    // TODO: handle deposit logic
    console.log(`Deposited $${depositAmount}`);
    setDepositAmount('');
  }

  const handleWithdrawal = (e) => {
    e.preventDefault();
    // TODO: handle withdrawal logic
    console.log(`Withdrawn $${withdrawalAmount}`);
    setWithdrawalAmount('');
  }

  const handleTransfer = (e) => {
    e.preventDefault();
    // TODO: handle transfer logic
    console.log(`Transferred $${transferAmount} to account ${transferAccount}`);
    setTransferAmount('');
    setTransferAccount('');
  }

  const handleBillPay = (e) => {
    e.preventDefault();
    // TODO: handle bill pay logic
    console.log(`Paid $${billPayAmount} to ${billPayee}`);
    setBillPayAmount('');
    setBillPayee('');
  }

  return (
    <div className="flex flex-col justify-center items-center h-screen">
      <h1 className="text-4xl font-bold mb-8">Transaction Processing System</h1>
      <div className="bg-gray-200 p-8 rounded-lg shadow-lg">
        <h2 className="text-2xl font-bold mb-4">Deposit</h2>
        <form onSubmit={handleDeposit}>
          <div className="flex items-center mb-4">
            <label className="w-1/3 mr-4 text-gray-700">Amount:</label>
            <input className="w-2/3 py-2 px-4 border border-gray-400 rounded" type="number" value={depositAmount} onChange={(e) => setDepositAmount(e.target.value)} />
          </div>
          <button className="bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded" type="submit">Deposit</button>
        </form>
      </div>

      <div className="bg-gray-200 p-8 rounded-lg shadow-lg mt-8">
        <h2 className="text-2xl font-bold mb-4">Withdrawal</h2>
        <form onSubmit={handleWithdrawal}>
          <div className="flex items-center mb-4">
            <label className="w-1/3 mr-4 text-gray-700">Amount:</label>
            <input className="w-2/3 py-2 px-4 border border-gray-400 rounded" type="number" value={withdrawalAmount} onChange={(e) => setWithdrawalAmount(e.target.value)} />
          </div>
          <button className="bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded" type="submit">Withdraw</button>
        </form>
      </div>

      <div className="bg-gray-200 p-8 rounded-lg shadow-lg mt-8">
        <h2 className="text-2xl font-bold mb-4">Transfer</h2>
        <form onSubmit={handleTransfer}>
        <div className="flex items-center mb-4">
        <label className="w-1/3 mr-4 text-gray-700">Amount:</label>
        <input className="w-2/3 py-2 px-4 border border-gray-400 rounded" type="number" value={transferAmount} onChange={(e) => setTransferAmount(e.target.value)} />
      </div>
      <div className="flex items-center mb-4">
        <label className="w-1/3 mr-4 text-gray-700">Account:</label>
        <input className="w-2/3 py-2 px-4 border border-gray-400 rounded" type="text" value={transferAccount} onChange={(e) => setTransferAccount(e.target.value)} />
      </div>
      <button className="bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded" type="submit">Transfer</button>
    </form>
  </div>

  <div className="bg-gray-200 p-8 rounded-lg shadow-lg mt-8">
    <h2 className="text-2xl font-bold mb-4">Bill Payment</h2>
    <form onSubmit={handleBillPay}>
      <div className="flex items-center mb-4">
        <label className="w-1/3 mr-4 text-gray-700">Amount:</label>
        <input className="w-2/3 py-2 px-4 border border-gray-400 rounded" type="number" value={billPayAmount} onChange={(e) => setBillPayAmount(e.target.value)} />
      </div>
      <div className="flex items-center mb-4">
        <label className="w-1/3 mr-4 text-gray-700">Pay:</label>
        <input className="w-2/3 py-2 px-4 border border-gray-400 rounded" type="text" value={billPayee} onChange={(e) => setBillPayee(e.target.value)} />
      </div>
      <button className="bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded" type="submit">Pay Bill</button>
    </form>
  </div>
</div>
);
}

export default TransactionPage;

