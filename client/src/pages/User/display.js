import React, { useState, useEffect } from "react";
import { TransactRec } from "../../Services/APIs/UserAPI";

const TransactionRecords = () => {
  const [transactions, setTransactions] = useState([]);

  const username = JSON.parse(localStorage.getItem('currentUser'));

  useEffect(() => {
    // Make API call to get transaction records
    TransactRec({ user: username })
      .then((response) => {
        //console.log(response);
        setTransactions(response.data);
      })
      .catch((error) => { 
        console.error(error);
      });
  }, []);
  console.log('arrray')
  //console.log(transactions.data);

  return (
    <div className="min-h-screen bg-gray-100 text-gray-900">
      <main className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 pt-4">
        <div className="">
          <h1 className="text-xl font-semibold">Transaction History</h1>
        </div>
        <div className="mt-6">
          <table className="min-w-full divide-y divide-gray-200">
            <thead className="bg-gray-50">
              <tr>
                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Sender
                </th>
                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Receiver
                </th>
                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Amount
                </th>
                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Date
                </th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {Array.isArray(transactions) && transactions.map((transaction, index) => (
                <tr key={index}>
                  <td className="px-6 py-4 whitespace-nowrap">
                    {transaction.sender}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    {transaction.receiver}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    {transaction.amount}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    {transaction.date}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </main>
    </div>
  );
};

export default TransactionRecords;
