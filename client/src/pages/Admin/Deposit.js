import React, { useState } from "react";

const Deposit = () => {
  const [id, setId] = useState("");
  
  const currentDate = new Date().toLocaleDateString();
  const [amount, setAmount] = useState("");
  const [isDepositSuccessful, setIsDepositSuccessful] = useState(false); // Added state for deposit success


  const handleSubmit = (e) => {
    e.preventDefault();
    // perform deposit logic here
   
   const currentDate = new Date().toLocaleDateString(); // Get current date
   const requestBody = JSON.stringify({ id, currentDate, amount });

   fetch("/api/deposits", {
     method: "post",
     headers: {
       "Content-Type": "application/json",
     },
     body: requestBody,
   })
     .then((response) => {
       if (!response.ok) {
         throw new Error("Failed to deposit money");
       }
       // Perform additional actions after successful deposit, e.g., show success message, update UI, etc.
       setIsDepositSuccessful(true);
     })
     .catch((error) => {
       console.error(error);
       // Handle error, e.g., show error message to user, etc.
     });
   
  };

  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gray-200">
      {isDepositSuccessful && (
        <div className="bg-green-500 text-white font-bold py-2 px-4 rounded mb-4">
          Your money has been deposited successfully.
        </div>
      )}
      <h1 className="text-2xl font-bold mb-4">Deposit Money</h1>
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
            Deposit
          </button>
        </div>
      </form>
    </div>
  );
};

export default Deposit;



