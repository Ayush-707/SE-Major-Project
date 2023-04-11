import React, { useState, useEffect } from 'react';
import axios from 'axios';

function AdminLoanManagement() {
  const [loans, setLoans] = useState([]);

  useEffect(() => {
    axios.get('/api/admin/loans')
      .then(response => setLoans(response.data))
      .catch(error => console.log(error));
  }, []);

  const handleLoanApproval = (loanId, approval) => {
    axios.put(`/api/admin/loans/${loanId}`, { status: approval })
      .then(response => {
        // Update the loan status in the state
        const updatedLoans = loans.map(loan => {
          if (loan._id === loanId) {
            return {
              ...loan,
              status: response.data.status,
            };
          }
          return loan;
        });
        setLoans(updatedLoans);
      })
      .catch(error => console.log(error));
  }

  return (
    <div className="flex flex-col justify-center items-center h-screen">
      <h1 className="text-4xl font-bold mb-8">Loan Management System - Admin Panel</h1>
      <div className="bg-gray-200 p-8 rounded-lg shadow-lg">
        <h2 className="text-2xl font-bold mb-4">Loan Requests</h2>
        <ul>
          {loans.map(loan => (
            <li className="mb-4" key={loan._id}>
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
                  <button className="bg-green-500 hover:bg-green-600 text-white py-2 px-4 rounded mr-2" type="button" onClick={() => handleLoanApproval(loan._id, 'Approved')}>Approve</button>
                  <button className="bg-red-500 hover:bg-red-600 text-white py-2 px-4 rounded" type="button" onClick={() => handleLoanApproval(loan._id, 'Rejected')}>Reject</button>
                </div>
              )}
            </li>
          ))}
        </ul>
      </div>
    </div>
  )
}

export default AdminLoanManagement;
