import React, { useState } from "react";
import {RequestNewAccount} from '../../Services/APIs/NewAccountAPI';
import {ToastContainer, toast } from 'react-toastify';

function Page4() {

  // const [name, setName] = useState("");
  // const [phone, setPhoneNo] = useState("");
  // const [dob, setDOB] = useState("");
  // const [email, setEmail] = useState("");
  // const [accountType, setAccountType] = useState("");
  // const [street, setStreetAddr] = useState("");
  // const [city, setCity] = useState("");
  // const [pin, setPin] = useState("")
  // const [state, setState] = useState("");

  const [formData, setFormData] = useState({
    username: '',
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
    console.log(1453);
    // add logic for submitting form data

    const response = await RequestNewAccount(formData);
    console.log(response.data);
    if (response.status === 400 ) {
      
      toast.error("Error While doing things!", {
        autoClose: 2000,
        hideProgressBar: true,
        pauseOnHover: false,
      });

    } else if(response.status === 200){
     
      toast.error("You got it!", {
        autoClose: 2000,
        hideProgressBar: true,
        pauseOnHover: false,
        
      });
    } else {

      
      toast.success(response.status+"%bad", {
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
          <label className="block text-gray-700 font-bold mb-1" htmlFor="username">
            Username
            <span className="text-red-500">*</span>
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            type="text"
            name="username"
            value={formData.username}
            onChange={handleChange}
            placeholder="Your Username"
            required
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 font-bold mb-1" htmlFor="name">
            Full Name
            <span className="text-red-500">*</span>
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            placeholder="Your Name"
            required
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 font-bold mb-1" htmlFor="phoneNo">
            Phone Number
            <span className="text-red-500">*</span>
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            type="text"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            placeholder="Mobile"
            required
          />
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
            <option value="Assam">Assam</option>
            <option value="Bihar">Bihar</option>
            <option value="Chhattisgarh">Chhattisgarh</option>
            <option value="Goa">Goa</option>
            <option value="Gujarat">Gujarat</option>
            <option value="Haryana">Haryana</option>
            <option value="Himachal Pradesh">Himachal Pradesh</option>
            <option value="Jharkhand">Jharkhand</option>
            <option value="Karnataka">Karnataka</option>
            <option value="Kerala">Kerala</option>
            <option value="Madhya Pradesh">Madhya Pradesh</option>
            <option value="Maharashtra">Maharashtra</option>
            <option value="Manipur">Manipur</option>
            <option value="Meghalaya">Meghalaya</option>
            <option value="Mizoram">Mizoram</option>
            <option value="Nagaland">Nagaland</option>
            <option value="Odisha">Odisha</option>
            <option value="Punjab">Punjab</option>
            <option value="Rajasthan">Rajasthan</option>
            <option value="Sikkim">Sikkim</option>
            <option value="Tamil Nadu">Tamil Nadu</option>
            <option value="Telangana">Telangana</option>
            <option value="Tripura">Tripura</option>
            <option value="Uttar Pradesh">Uttar Pradesh</option>
            <option value="Uttarakhand">Uttarakhand</option>
            <option value="West Bengal">West Bengal</option>
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

        {/* <div className="mb-4">
          <label className="block text-gray-700 font-bold mb-1" htmlFor="pdf">
            Upload PDF of valid identity card
            <span className="text-red-500">*</span>
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="pdf"
            type="file"
            accept=".pdf"
            onChange={(e) => handleFileUpload(e.target.files[0])}
            required
          />
        </div> */}

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