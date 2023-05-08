import React, { useState } from "react";
import { useNavigate } from 'react-router-dom';
import {Withd} from '../../Services/APIs/AdminAPI';
import toast, { Toaster } from 'react-hot-toast';
import 'react-toastify/dist/ReactToastify.css';

const Withdraw = () => {
  const [id, setId] = useState("");
  const currentDate = new Date().toLocaleDateString();
  const [amount, setAmount] = useState("");
  const [error, setError] = useState(null);
  const [confirming, setConfirming] = useState(false);
  const navigate = useNavigate();

  const validateInputs = () => {
    if (!id || !amount) {
      setError("Please fill out all fields");
      return false;
    }
    if (isNaN(amount) || amount <= 0) {
      setError("Please enter a valid amount");
      return false;
    }
    setError("");
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
      const withdrawData = {
        id,
        amount
      }

      const response = await Withd(withdrawData);
      // show success message to user
      alert('Withdraw completed successfully!');
      // redirect to transaction history page
      setTimeout(() => {
        navigate("/Admin/Home")
      }, 2000) 
      toast.success("Amount Withdrawn successfully", {
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
    <Toaster position="top-right"
  reverseOrder={false}/>
    <section style={ styles }>
    <div className="flex flex-col items-center justify-center h-screen">
      <h1 className="text-2xl font-bold mb-4">Withdraw Money</h1>
      {confirming ? (
        <div className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
          <h2 className="text-xl font-bold mb-4">
            Confirm Withdraw Details
          </h2>
          <p className="mb-4">
            You are about to Withdraw {amount} units to the account with ID{" "}
            {id}.
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
              Enter User's Account Number
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="id"
              type="text"
              placeholder="Enter User's Account Number"
              value={id}
              onChange={(e) => setId(e.target.value)}
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
              placeholder="Enter Amount to be Withdraw"
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

export default Withdraw;

/*import React, { useState } from "react";
import { useNavigate } from 'react-router-dom';
import {Withd} from '../../Services/APIs/AdminAPI';

const Withdraw = () => {
  const [accountNumber, setId] = useState("");
  const currentDate = new Date().toLocaleDateString();
  const [amount, setAmount] = useState("");
  const [error, setError] = useState(null);
  const [confirming, setConfirming] = useState(false);
  const navigate = useNavigate();

  const validateInputs = () => {
    if (!accountNumber || !amount) {
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
      const depositData = {
        accountNumber,
        amount
      }
        const response = await Withd(depositData);
      // show success message to user
      alert('Withdrawn successfully!');
      // redirect to   Home page
      setTimeout(() => {
        navigate("/Admin/Home")
      }, 1000) 
    } catch (error) {
      setError(error.message);
    }
  };
  

  const handleCancel = () => {
    setId("");
    setAmount("");
    setError(null);
    setConfirming(false);
  };

  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gray-200">
      <h1 className="text-2xl font-bold mb-4">Withdraw Money</h1>
      {confirming ? (
        <div className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
          <h2 className="text-xl font-bold mb-4">
            Confirm Withdraw Details
          </h2>
          <p className="mb-4">
            You are about to withdraw {amount} units to the account of this ID{" "}
            {accountNumber}.
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
          className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4"
        >
          <div className="mb-4">
            <label className="block text-gray-700 font-bold mb-2" htmlFor="id">
              User's Account Number
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="id"
              type="text"
              placeholder=" Enter User's Acc. No."
              value={accountNumber}
              onChange={(e) => setId(e.target.value)}
            />
          </div>
          
          <div className="mb-4">
            <label className="block text-gray-700 font-bold mb-2" htmlFor="date">
            Date :{currentDate}
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
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
              type="submit"
            >
              Submit
            </button>
            <button
              className="bg-gray-500 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline ml-4"
              onClick={handleCancel}
            >
              Cancel
            </button>
          </div>
        </form>
      )}
    </div>
  );
};

export default Withdraw;

*/
