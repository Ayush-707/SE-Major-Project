import React, { useState } from "react";
import { useNavigate } from 'react-router-dom';
import {Transact} from '../../Services/APIs/UserAPI';
import {ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Transaction = () => {
  const [id, setId] = useState("");
  const [receiverId, setReceiverId] = useState("");
  const currentDate = new Date().toLocaleDateString();
  const [amount, setAmount] = useState("");
  const [error, setError] = useState(null);
  const [confirming, setConfirming] = useState(false);
  const navigate = useNavigate();

  const validateInputs = () => {
    if (!id || !receiverId || !amount) {
      setError("Please fill out all fields");
      return false;
    }
    if (isNaN(amount) || amount <= 0) {
      setError("Please enter a valid amount");
      return false;
    }
    return true;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!validateInputs()) {
      return;
    }
    setConfirming(true);
  };

  
  const handleConfirm = async () => {
    try {
      const transactionData = {
        id,
        receiverId,
        amount
      }
        const response = await Transact(transactionData);
      // show success message to user
      alert('Transaction completed successfully!');
      // redirect to transaction history page
      setTimeout(() => {
        navigate("/Admin/Transact")
      }, 2000) 
      toast.success("Transaction successful", {
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
    } catch (error) {
      setError(error.message);
    }
  };
  

  const handleCancel = () => {
    setId("");
    setReceiverId("");
    setAmount("");
    setError(null);
    setConfirming(false);
  };

  const styles = {
    backgroundImage: `url(${process.env.PUBLIC_URL}/b.png)`,
    height: "100vh",
    
    
  }



  return (
    <>
    <ToastContainer/>
    <section style={ styles }>
    <div className="flex flex-col items-center justify-center h-screen">
      <h1 className="text-2xl font-bold mb-4">Transact Money</h1>
      {confirming ? (
        <div className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
          <h2 className="text-xl font-bold mb-4">
            Confirm Transaction Details
          </h2>
          <p className="mb-4">
            You are about to transfer {amount} units to the account with ID{" "}
            {receiverId}.
          </p>
          <p className="mb-4">
            Please review the details and click "Confirm" to proceed or "Cancel"
            to go back.
          </p>
          {error && <p className="text-red-500 font-bold mb-4">{error}</p>}
          <div className="flex items-center justify-center">
            <button
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline mr-4"
              onClick={handleConfirm}
            >
              Confirm
            </button>
            <button
              className="bg-gray-500 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
              onClick={handleCancel}
            >
              Cancel
            </button>
          </div>
        </div>
      ) : (
        <form
          onSubmit={handleSubmit}
          className=" bg-gray-100 shadow-md w-2/3 rounded px-8 pt-6 pb-8 mb-4"
        >
          <div className="mb-4">
            <label className="block text-gray-700 font-bold mb-2" htmlFor="id">
              Enter Your Account Number
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="id"
              type="text"
              placeholder="Type Here"
              value={id}
              onChange={(e) => setId(e.target.value)}
            />
          </div>
          <div className="mb-4">
            <label
              className="block text-gray-700 font-bold mb-2"
              htmlFor="receiverId"
            >
              Enter Receiver's Account Number
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="receiverId"
              type="text"
              placeholder="Type Here"
              value={receiverId}
              onChange={(e) => setReceiverId(e.target.value)}
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 font-bold mb-2" htmlFor="date">
            Date : <span className="font-normal">{currentDate}</span>
            </label>

          </div>
          <div className="mb-4">
            <label
              className="block text-gray-700 font-bold mb-2"
              htmlFor="amount"
            >
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
          <div className="mb-4">
            <p className="text-red-500 font-bold">{error}</p>
          </div>
          <div className="flex items-center justify-center">
            <button
              className="bg-blue-500 w-96 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
              type="submit"
            >
              Submit
            </button>
            <button
              className=" bg-gray-500 w-96 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline ml-4"
              onClick={handleCancel}
            >
              Cancel
            </button>
          </div>
        </form>
      )}
    </div>
    </section>
    </>
  );
};

export default Transaction;