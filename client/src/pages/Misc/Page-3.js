
import React, { useState } from "react";

const Transaction = () => {
  const [id, setId] = useState("");
  const [receiverId, setReceiverId] = useState("");
  const currentDate = new Date().toLocaleDateString();
  const [amount, setAmount] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    // perform deposit logic here
  };

  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gray-200">
      <h1 className="text-2xl font-bold mb-4">Transact Money</h1>
      <form onSubmit={handleSubmit} className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
        <div className="mb-4">
          <label className="block text-gray-700 font-bold mb-2" htmlFor="id">
            Your ID
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="id"
            type="text"
            placeholder="Your ID"
            value={id}
            onChange={(e) => setId(e.target.value)}
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 font-bold mb-2" htmlFor="receiverId">
            Receiver ID
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="receiverId"
            type="text"
            placeholder="Receiver ID"
            value={receiverId}
            onChange={(e) => setReceiverId(e.target.value)}
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 font-bold mb-2" htmlFor="date">
          Date :{currentDate}
          </label>
          
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 font-bold mb-2" htmlFor="amount">
            Amount
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="amount"
            type="number"
            placeholder="Amount"
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
          />
        </div>
        <div className="flex items-center justify-center">
          <button
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            type="submit"
          >
            Transact
          </button>
        </div>
      </form>
    </div>
  );
};

export default Transaction;


