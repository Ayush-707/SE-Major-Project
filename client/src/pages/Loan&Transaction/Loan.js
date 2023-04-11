//user loan FE
import React, { useState, useEffect } from 'react';
import axios from 'axios';

function LoanManagement() {
  const [loans, setLoans] = useState([]);
  const [loanAmount, setLoanAmount] = useState('');
  const [loanStatus, setLoanStatus] = useState('');
  const [loanId, setLoanId] = useState('');
  const [paymentAmount, setPaymentAmount] = useState('');

  useEffect(() => {
    axios.get('/api/loans')
      .then(response => setLoans(response.data))
      .catch(error => console.log(error));
  }, []);

  const applyLoan = (e) => {
    e.preventDefault();
    axios.post('/api/loans', { amount: loanAmount })
      .then(response => setLoans([...loans, response.data]))
      .catch(error => console.log(error));
    setLoanAmount('');
  }

  const makePayment = (e) => {
    e.preventDefault();
    axios.put(`/api/loans/${loanId}`, { paymentAmount })
      .then(response => setLoanStatus(response.data.status))
      .catch(error => console.log(error));
    setPaymentAmount('');
  }

  return (
    <div className="flex flex-col justify-center items-center h-screen">
      <h1 className="text-4xl font-bold mb-8">Loan Management System</h1>
      <div className="bg-gray-200 p-8 rounded-lg shadow-lg">
        <h2 className="text-2xl font-bold mb-4">Apply for a Loan</h2>
        <form onSubmit={applyLoan}>
          <div className="flex items-center mb-4">
            <label className="w-1/3 mr-4 text-gray-700">Loan Amount:</label>
            <input className="w-2/3 py-2 px-4 border border-gray-400 rounded" type="number" value={loanAmount} onChange={(e) => setLoanAmount(e.target.value)} />
          </div>
          <button className="bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded" type="submit">Apply</button>
        </form>
      </div>

      <div className="bg-gray-200 p-8 rounded-lg shadow-lg mt-8">
        <h2 className="text-2xl font-bold mb-4">View Loan Status</h2>
        <ul>
          {loans.map(loan => (
            <li className="mb-4" key={loan.id}>
              <div className="flex justify-between items-center mb-2">
                <div className="font-bold text-gray-700">Loan Amount:</div>
                <div>${loan.amount}</div>
              </div>
              <div className="flex justify-between items-center mb-2">
                <div className="font-bold text-gray-700">Status:</div>
                <div>{loan.status}</div>
              </div>
              {loan.status === 'Pending' && (
                <div>
                  <form onSubmit={makePayment}>
                    <div className="flex items-center mb-2">
                      <label className="w-1/3 mr-4 text-gray-700">Payment Amount:</label>
                      <input className="w-2/3 py-2 px-4 border border-gray-400 rounded" type="number" value={paymentAmount} onChange={(e) => setPaymentAmount(e.target.value)} />
                    </div>
                    <button className="bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded" type="submit" onClick={() => setLoanId(loan.id)}>Make Payment</button>
                    </form>
                </div>
              )}
            </li>
          ))}
        </ul>
      </div>
    </div>
  )
}

export default LoanManagement;
