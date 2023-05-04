import React, { useState, useEffect } from "react";
import { addEmployee,  } from "../../Services/APIs/AdminAPI";
import { adminLogin,updateOTP, checkOTP } from "../../Services/APIs/AuthAPI";
import {ToastContainer, toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom';

function OtpLogin() {

    const navigate = useNavigate();
    const masterPassword = "pass123"
    const [isLoading, setIsLoading] = useState(false);
    const [addData,setAddData] = useState ({
        fullName: '', 
        email: '',
        password: ''
      });
    
      const [loginData, setLoginData] = useState ({
        
        myEmail: '',
        otp: ''
      });

  const [isEmailSubmitted, setIsEmailSubmitted] = useState(false);
  

  function handleChange (event, formName) {

    const {name,value} = event.target;
    if (formName === 'form1') {
      setAddData(prevState => ({ ...prevState, [name]: value}));
    } else if (formName === 'form2') {
      setLoginData (prevState => ({...prevState, [name]: value}));
    }
  }

  const handleEmailSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    // handle email submission logic here
    //console.log(loginData.myEmail);
    const response = await  adminLogin(loginData)
    if (response.status === 201) {
      //setIsLoading(true);
      toast.error('Email Does Not Exists!', {
        autoClose: 2000,
        hideProgressBar: true,
        pauseOnHover: false,
      });
      setIsLoading(false);
    } else  {
      //setIsLoading(true);

      await updateOTP(loginData);

      

     

      toast.success('OTP sent! Please Check your Email', {
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
    
    setIsLoading(false);
    setIsEmailSubmitted(true);
  };

  useEffect(() => {
    const intervalId = setInterval(() => {
      setIsEmailSubmitted(false);
    }, 30000);

    return () => {
      clearInterval(intervalId);
    };
  }, [isEmailSubmitted]);

  const handleOtpSubmit = async(e) => {
    e.preventDefault();
    // handle OTP verification logic here
    //console.log('yoohoo')
    try {

      const response_2 = await checkOTP(loginData.myEmail, loginData.otp);
      console.log(response_2.data);
  
      const status = response_2.status
  
      if (status ===201) {
        toast.error('Invalid OTP!', {
          autoClose: 2000,
          hideProgressBar: true,
          pauseOnHover: false,
        });
      } else if (status ===200) {
        toast.success('Login Successful!', {
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
        navigate("/Admin/Home");


      } else {
        toast.error('Error Encountered', {
          autoClose: 2000,
          hideProgressBar: true,
          pauseOnHover: false,
        });
      }
    } catch (error) {
      console.log(error)
    }




  };

  const add = async(e) => {
    e.preventDefault();

    if (addData.password !== masterPassword) {

      toast.error('Incorrect Master Password!', {
        autoClose: 2000,
        hideProgressBar: true,
        pauseOnHover: false,
      });
    } else {

      try {
        const addRes = await addEmployee(addData);
        console.log(addRes.data);
        
        if (addRes.status === 201) {
          toast.error('Employee Email Already Exists!', {
            autoClose: 2000,
            hideProgressBar: true,
            pauseOnHover: false,
          });
        } else if ( addRes.status === 200) {
          toast.success('Employee Database Has Been Updated!', {
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
        
      } catch (error) {

        console.log(error);
        toast.error(error, {
          autoClose: 2000,
          hideProgressBar: true,
          pauseOnHover: false,
        });
        
      }
    }

   

  };

  const handleCancel = () => {
    setAddData({ fullName: '', email: '', password: '' });
  };

  return (
    <>
        <ToastContainer/>
                <h3 class="text-xl font-bold mx-auto max-w-sm mt-5 mb-5">Add New Employee</h3>

                <form class="max-w-sm mx-auto mb-3" onSubmit={add}>
                <div class=" items-center border-b border-teal-500 py-2">
                
                <input class="appearance-none bg-transparent border-none w-full text-gray-700 mr-3 py-1 px-2 leading-tight focus:outline-none"
                        type="text" 
                        placeholder="John Doe" 
                        aria-label="Full name"
                        formName = "form1"
                        name = "fullName"
                        value={addData.fullName}
                        onChange={(e) => handleChange(e, "form1")} />

                <input class="appearance-none bg-transparent border-none w-full text-gray-700 mr-3 py-1 px-2 leading-tight focus:outline-none"
                        type="text" 
                        placeholder="employee@org.com" 
                        aria-label="Full name"
                        formName = "form1"
                        name = "email"
                        value={addData.email}
                        onChange={(e) => handleChange(e, "form1")} />

                

                <input class="appearance-none bg-transparent border-none w-full text-gray-700 mr-3 py-1 px-2 leading-tight focus:outline-none"
                        type="password" 
                        placeholder="master password" 
                        aria-label="Full name"
                        formName = "form1"
                        name = "password"
                        value={addData.password}
                        onChange={(e) => handleChange(e, "form1")} />

                <button class="ml-2 flex-shrink-0 bg-teal-500 hover:bg-teal-700 border-teal-500 hover:border-teal-700 text-sm border-4 text-white py-1 px-2 rounded" type="submit">
                Add
                </button>
                <button class="ml-2 flex-shrink-0 border-transparent border-4 text-teal-500 hover:bg-teal-500 hover:text-white hover:border-teal-500 text-sm py-1 px-2 rounded" type="button" onClick={handleCancel}>
                Cancel
                </button>
            </div>
            </form>
    <form className="max-w-sm mx-auto mt-8 p-8 bg-white rounded-lg shadow-md">
      <h2 className="text-2xl font-bold mb-4">Employee Login</h2>
      {!isEmailSubmitted && (
        <div className="mb-4">
          <label
            htmlFor="email"
            className="block font-semibold text-gray-700 mb-2 text-base"
          style={{ letterSpacing: '0.05em' }}
          >
           Email
          </label>

          <input
            type="email"
            name="myEmail"
            id="email"
            value={loginData.myEmail}
            onChange={(e) => handleChange(e, "form2")} 
            className="border border-blue-400 p-2 w-full rounded-md focus:border-blue-600"
           
            formName="form2"
            required
          />
          <button
          type="submit"
          onClick={handleEmailSubmit}
          className={`mt-2 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline
                    ${isLoading ? "cursor-wait disabled opacity-50" : ""}`}disabled={isLoading}>
          {isLoading ? "Loading..." : "Submit"}
          
        </button>
        </div>
      )}
      {isEmailSubmitted && (
        <div className="mb-4">
          <label
            htmlFor="otp"
            className="block font-semibold text-gray-700 mb-2 text-base"
            style={{ letterSpacing: '0.05em' }}
          >
            OTP
          </label>
          <input
            type="text"
            name="otp"
            id="otp"
            value={loginData.otp}
            onChange={(e) => handleChange(e, "form2")} 
            className="border border-blue-400 p-2 w-full rounded-md focus:border-blue-600"
            autoComplete="off"
            formName="form2"
            required
          />
         
          <button
          type="submit"
          onClick={handleOtpSubmit}
          className={`mt-2 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline
                    ${isLoading ? "cursor-wait disabled opacity-50" : ""}`}disabled={isLoading}>
          {isLoading ? "Loading..." : "Submit"}
          
        </button>
        </div>
      )}
    </form>
    </>
  );
}

export default OtpLogin;
