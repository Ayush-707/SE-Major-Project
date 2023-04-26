import React, { useState } from "react";
import {RequestNewAccount} from '../../Services/APIs/UserAPI';
import {ToastContainer, toast } from 'react-toastify';

function Page4() {


  const [formData, setFormData] = useState({
    
    name: '',
    phone: '',
    dob: '',
    email: '',
    accountType:'',
    street:'',
    city: '',
    pin:'',
    state:'',
  });

  // const [isLoading, setIsLoading] = useState(false);

  const handleChange = (event) => {
    const { name, value } = event.target;
    const trimmedValue = value.trim(); 
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: trimmedValue,
    }));
  };

  const handleSubmit = async (event) => {
    event.preventDefault();


    console.log(formData);
    // console.log(1453);
    // add logic for submitting form data

    const response = await RequestNewAccount(formData);
    console.log(response.body);
    if (response.status === 201 ) {
      
      toast.error("Invalid Phone Number!", {
        autoClose: 2000,
        hideProgressBar: true,
        pauseOnHover: false,
      });

    } else if(response.status === 202){
     
      toast.error("Invalid Date of Birth!", {
        autoClose: 2000,
        hideProgressBar: true,
        pauseOnHover: false,
        
      });
    } else if(response.status === 203) {
      toast.error("Invalid PIN Code!", {
        autoClose: 2000,
        hideProgressBar: true,
        pauseOnHover: false,
        
      });
    } else if (response.status === 204) {
      toast.error("Web Account is needed for the Entered Email ID to request for a New Bank Account!", {
        autoClose: 2000,
        hideProgressBar: true,
        pauseOnHover: false,
        
      });
    } else if (response.status === 400) {
      toast.error("Internal Server Error!", {
        autoClose: 2000,
        hideProgressBar: true,
        pauseOnHover: false,
        
      });
    }
    else {

      
      toast.success("New Account Requested Has Been Submitted", {
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

    // setIsLoading(false);

  };




  const styles = {
    width:"600px",
    border:"black",
    borderRadius: "10px",
    background:"transparent",
    boxShadow: "0px 0px 5px rgba(0, 0, 0, 0.3), 0px 0px 10px rgba(0, 0, 0, 0.2)"
  }

  

  // const handleMobVerify = (e) => {
  //   e.preventDefault();
  // }

  // const handleFileUpload = (file) => {
  //   // TODO
  //   // logic
  // };

  return (
  <>
    <ToastContainer />
  
    
    <div className="flex flex-col items-center justify-center h-screen bg-gray-200">
  <form onSubmit={handleSubmit} className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4" style={styles}>
    <div className="mb-4">
      <label className="block text-gray-700 font-bold mb-1" htmlFor="name">
        Full Name
        <span className="text-red-500">*</span>
      </label>
      <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" type="text" name="name" value={formData.name} onChange={handleChange} placeholder="Your Name" required />
    </div>
    <div className="mb-4">
      <label className="block text-gray-700 font-bold mb-1" htmlFor="phoneNo">
        Phone Number
        <span className="text-red-500">*</span>
      </label>
      <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" type="text" name="phone" value={formData.phone} onChange={handleChange} placeholder="Mobile" required />
    </div>
 

        <div className="mb-4">
          <label className="block text-gray-700 font-bold mb-1" htmlFor="dob">
            Date of Birth
            <span className="text-red-500">*</span>
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            name="dob"
            type="date"
            value = {formData.dob}
            onChange={handleChange}
            placeholder="date"
            required
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 font-bold mb-1" htmlFor="email">
            Email
            <span className="text-red-500">*</span>
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            name="email"
            type="email"
            placeholder="Email Id"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </div>

        <div className="mb-4">
          <label className="block text-gray-700 font-bold mb-1" htmlFor="street">
            Mailing Home Address
            <span className="text-red-500">*</span>
          </label>
          <div className="mb-3">
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              name="street"
              type="text"
              placeholder="Street Address"
              value={formData.street}
              onChange={handleChange}
              required
          />
          </div>
          <div className="mb-3">
            <div className="flex space-x-4">
              <input
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                name="city"
                type="text"
                placeholder="City"
                value={formData.city}
                onChange={handleChange}
                required
              />
              <input
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                name="pin"
                type="text"
                placeholder="Pincode"
                value={formData.pin}
                onChange={handleChange}
                required
            />
            </div>
          </div>
          <select
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            name="state"
            value={formData.state}
            onChange={handleChange}
            required
          >
            <option value="">--Select State--</option>
            <option value="Andhra Pradesh">Andhra Pradesh</option>
            <option value="Arunachal Pradesh">Arunachal Pradesh</option>
            
          </select>

        </div>

        <div className="mb-4">
          <label className="block text-gray-700 font-bold mb-1" htmlFor="accountType">
            Account Type
            <span className="text-red-500">*</span>
          </label>
          <select
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            name="accountType"
            value={formData.accountType}
            onChange={handleChange}
            required
          >
            <option value="">--Select Account Type--</option>
            <option value="Savings">Savings</option>
            <option value="Current">Current</option>
            <option value="Fixed Deposit">Fixed Deposit</option>
          </select>
        </div>

        <div className="flex items-center justify-center">
          <button
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            type="submit"
          >
            Submit Request
          </button>
        </div>
      </form>
    </div>
    </>
  )
}

export default Page4