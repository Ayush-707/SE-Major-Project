import React, { useState } from 'react';
import {Investment} from '../../Services/APIs/UserAPI';
import {ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const InvestmentForm = () => {

   
  // State variables to store form inputs
 const [userID, setUserID] = useState('');
  const [phoneNo, setPhoneNo] = useState('');
  const [fundType, setFundType] = useState('');
  const [investmentAmount, setInvestmentAmount] = useState('');
  const [duration, setDuration] = useState('');

  // Handle form submission

  const handleSubmit = async (event) => {
  //  event.preventDefault();
  if(parseInt({investmentAmount}["investmentAmount"])<0){
    alert("Enter a +ve amount to be invest")
  }
    try {
        // Call the Investment API with form data
    const invests =  await Investment({
          "userID":userID,
          "phoneNo":phoneNo,
          "fundType":fundType,
          "investmentAmount":investmentAmount,
          "duration":duration
        });
        if (invests.status === 201 ) {
            console.log(invests.data);
            toast.error("userID already exists.", {
              autoClose: 2000,
              hideProgressBar: true,
              pauseOnHover: false,
            });
  
          } 
          else {

            console.log(invests.data);
            toast.success("Investment account Creation Successfull.", {
              position: toast.POSITION.TOP_CENTER,
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
  
  
        // Show success message using react-toastify
     /*   toast.success('Form submitted successfully!', {
          position: toast.POSITION.TOP_CENTER
        });*/
  
        // Reset form inputs
      /*  setInvestData('');*/
      /* setUserID('');
      setPhoneNo('');
      setFundType('');
      setInvestmentAmount('');
      setDuration('');*/

        //new
        

      



      } catch (error) {
        // Handle error from API
        console.error('Failed to submit form:', error);
        // Show error message using react-toastify
        toast.error('Failed to submit form. Please try again later.', {
          position: toast.POSITION.TOP_CENTER
        });
      }
      

  
  };



 

  return (
    <>
    <ToastContainer/>
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
          value={userID}
          onChange={(event) =>setUserID(event.target.value)}
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
          value={phoneNo}
          onChange={(event) => setPhoneNo(event.target.value)}
        />
      </div>
      <div className="mb-4">
        <label htmlFor="fundType" className="block text-sm font-medium mb-1">
          Fund Type
        </label>
        <select
          id="fundType"
          className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-blue-500"
          value={fundType}
          onChange={(event) => setFundType(event.target.value)}
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
          value={investmentAmount}
          onChange={(event) => setInvestmentAmount(event.target.value)}
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
          value={duration}
          onChange={(event) => setDuration(event.target.value)}
        />
      </div>
      <button
        
        className="w-full bg-blue-500 text-white py-3 rounded-md font-medium hover:bg-blue-600 transition duration-200"
        type="submit"
        onClick={handleSubmit}
      >
        Submit
      </button>
    </form>
    </>
  );
};

export default InvestmentForm;

