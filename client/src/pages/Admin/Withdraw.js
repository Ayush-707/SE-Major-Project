import React, { useState } from "react";
import axios from 'axios';
import {WithdrawCall} from '../../Services/APIs/AdminAPI';
import {ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


const Withdraw = () => {
  const [id, setId] = useState("");
  const currentDate = new Date().toLocaleDateString();
  const [balance, setBalance] = useState(null);
  const [amount, setAmount] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    // perform deposit logic here
  };

  const handleCheckBalance = async (e) => {
    setBalance(400);// This line to be deleted
    e.preventDefault();
    try {
      const response = await axios.get(`/api/balance/${id}`);
      setBalance(response.data.balance);
    } catch (err) {
      console.error(err);
      // handle error, e.g. show an error message to the user
    }
  };

  const doWithdraw = async (e) =>{
    if(balance==null){
      alert("check balance first")
    }
    else if(String({amount}["amount"])==''){
      alert("Enter the amount to be withdrawn")
    }
    else if(parseInt({amount}["amount"])>parseInt(balance)){
      alert("Amount to be withdrawn should be less than or equal to Current Balance, which is "+balance)
    }
    else if(parseInt({amount}["amount"])<0){
      alert("Enter a +ve amount to be withdrawn")
    }
    else{
      
    const response = await WithdrawCall({"id":id,"amount":amount});
    console.log(response.data);
    if (response.status === 201 ) {
      
      toast.error("Error While Withdrawing the amount", {
        autoClose: 2000,
        hideProgressBar: true,
        pauseOnHover: false,
      });

    } else {
      setBalance(parseInt(balance)-parseInt({amount}["amount"]));
      
      toast.success("Amount withdrawn Successfully", {
        autoClose: 2000,
        hideProgressBar: true,
        pauseOnHover: false,
        style: {
          background: "#4BB543",
          color: "#fff",
          borderRadius: "8px",
          fontWeight: "bold",
          border: "none",
          boxShadow: "0px 0px 10px rgba(0,0,0,0.2)",
        },
      });
      
    }

    }
    console.log(parseInt({amount}["amount"]));
    
    
  };

  return (
    <>
    <ToastContainer/>
    <div className="flex flex-col items-center justify-center h-screen bg-gray-200">
      <h1 className="text-2xl font-bold mb-4">Withdraw Money</h1>
      <form onSubmit={handleSubmit} className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4 max-w-xxxl">
        <div className="mb-4">
          <label className="block text-gray-700 font-bold mb-2" htmlFor="id">
          Withdrawer's ID
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="id"
            type="text"
            placeholder="Withdrawer's ID"
            value={id}
            onChange={(e) => setId(e.target.value)}
          />
        </div>
        <div className="mb-4 flex items-center justify-center">
          <button
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            type="submit"
            onClick={handleCheckBalance}
          >
            Check Balance
          </button>
        </div>
        <div className="mb-4">
        {balance !== null && (
        <p>
          Current balance is: {balance}
        </p>
      )}
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
            onClick={doWithdraw}
          >
            Withdraw
          </button>
        </div>
      </form>
    </div>
    </>
  );
};

export default Withdraw;
