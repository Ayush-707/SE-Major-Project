import React, { useState } from 'react';
import {Investment} from '../../Services/APIs/UserAPI';
import {ToastContainer, toast } from 'react-toastify';
const InvestmentForm = () => {
  // State variables to store form inputs

  const [investData, setInvestData] = useState({
      userID:'',
      phoneNo:'',
      fundType:'',
      investmentAmount: '',
      duration: '',
    });

    const handleChange = (event) => {
      const { id, value } = event.target;
      const trimmedValue = value.trim(); 
      setInvestData((prevFormData) => ({
        ...prevFormData,
        [id]: trimmedValue,
      }));
    };


 /* const [userID, setUserID] = useState('');
  const [phoneNo, setPhoneNo] = useState('');
  const [fundType, setFundType] = useState('');
  const [investmentAmount, setInvestmentAmount] = useState('');
  const [duration, setDuration] = useState('');*/

  const handleSubmit = async (event) => {
    event.preventDefault();


    console.log(investData);
    

    const response = await  Investment(investData);
    console.log(response.body);
    if (response.status === 201 ) {
      
      toast.error("Invalid Phone Number!", {
        autoClose: 2000,
        hideProgressBar: true,
        pauseOnHover: false,
      });

    }  else if (response.status === 400) {
      toast.error("Internal Server Error!", {
        autoClose: 2000,
        hideProgressBar: true,
        pauseOnHover: false,
        
      });
    }
    else {

      
      toast.success("Form Submitted Successfully", {
        autoClose: 5000,
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

   

  };
 
  
 /* const handleSubmit = async (event) => {
    event.preventDefault();
  
    // Do something with form data, e.g. submit to a backend API
    const investmentData = {
      userID: userID,
      phoneNo: phoneNo,
      fundType: fundType,
      investmentAmount: investmentAmount,
      duration: duration
    };

    try {
      // Call the backend API to submit the form data
      await Investment.createInvestment(investmentData);
      console.log('Investment data submitted:', investmentData);
      // Reset form inputs after successful submission
      setUserID('');
      setPhoneNo('');
      setFundType('');
      setInvestmentAmount('');
      setDuration('');
    } catch (error) {
      console.error('Failed to submit investment data:', error);
    }
   
  };*/
  
  return (

    <>
    <ToastContainer />
    <form className="w-96 max-w-md mx-auto mt-8" onSubmit={handleSubmit}>
      <h1 className="text-2xl font-semibold mb-6">Investment Form</h1>
      <div className="mb-4">
        <label htmlFor="userID" className="block text-sm font-medium mb-1">
          User ID
        </label>
        <input
          type="text"
          id="userID"
          className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-blue-500"
          placeholder="Enter User ID"
          value={investData.userID}
          onChange={handleChange}
        />
      </div>
      <div className="mb-4">
        <label htmlFor="phoneNumber" className="block text-sm font-medium mb-1">
          Phone Number
        </label>
        <input
          type="text"
          id="phoneNumber"
          className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-blue-500"
          placeholder="Enter Phone Number"
          value={investData.phoneNo}
          onChange={handleChange}
        />
      </div>
      <div className="mb-4">
        <label htmlFor="fundType" className="block text-sm font-medium mb-1">
          Fund Type
        </label>
        <select
          id="fundType"
          className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-blue-500"
          value={investData.fundType}
          onChange={handleChange}
        >
          <option value="">Select fund type</option>
          <option value="Equity">Equity</option>
          <option value="Debt">Debt</option>
          <option value="Hybrid">Hybrid</option>
        </select>
      </div>
      <div className="mb-4">
        <label htmlFor="investmentAmount" className="block text-sm font-medium mb-1">
          Investment Amount
        </label>
        <input
          type="number"
          id="investmentAmount"
          className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-blue-500"
          placeholder="Enter investment amount"
          value={investData.investmentAmount}
          onChange={handleChange}
        />
      </div>
      <div className="mb-4">
        <label htmlFor="duration" className="block text-sm font-medium mb-1">
          Duration (in years)
        </label>
        <input
          type="number"
          id="duration"
          className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-blue-500"
          placeholder="Enter the duration"
          value={investData.duration}
          onChange={handleChange}
        />
      </div>
      <button
        type="submit"
        onClick={handleSubmit}
        className="w-full bg-blue-500 text-white py-3 rounded-md font-medium hover:bg-blue-600 transition duration-200"
      >
        Submit
      </button>
    </form>
    </>
  );
};

export default InvestmentForm;

/* const investData = {
      userID,
      phoneNo,
      fundType,
      investmentAmount,
      duration
    };
  
    try {
      const response = await fetch('http://localhost:4002/User/Investment', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(investData)
      });
  
      if (response.ok) {
        // Reset form inputs
        setUserID('');
        setPhoneNo('');
        setFundType('');
        setInvestmentAmount('');
        setDuration('');
  
        console.log('Form data submitted successfully:', investData);
      } else {
        console.error('Failed to submit form data:', response.status);
      }
    } catch (error) {
      console.error('Failed to submit form data:', error);
    } */