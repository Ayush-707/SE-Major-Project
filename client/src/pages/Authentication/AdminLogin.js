import React, { useState, useEffect } from "react";

function OtpLogin() {

    const masterPassword = "pass123"
    const [addData,setAddData] = useState ({
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

  const handleEmailSubmit = (e) => {
    e.preventDefault();
    // handle email submission logic here
    setIsEmailSubmitted(true);
  };

  useEffect(() => {
    const intervalId = setInterval(() => {
      setIsEmailSubmitted(false);
    }, 10000);

    return () => {
      clearInterval(intervalId);
    };
  }, [isEmailSubmitted]);

  const handleOtpSubmit = (e) => {
    e.preventDefault();
    // handle OTP verification logic here
  };

  const addEmployee = (e) => {
    e.preventDefault();

    


    
  };

  const handleCancel = () => {
    setAddData({ email: '', password: '' });
  };

  return (
    <>
        
                <h3 class="text-xl font-bold mx-auto max-w-sm mt-5 mb-5">Add New Employee</h3>

                <form class="max-w-sm mx-auto mb-3" onSubmit={addEmployee}>
                <div class=" items-center border-b border-teal-500 py-2">
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

                <button class="ml-2 flex-shrink-0 bg-teal-500 hover:bg-teal-700 border-teal-500 hover:border-teal-700 text-sm border-4 text-white py-1 px-2 rounded" type="button">
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
            autoComplete="email"
            formName="form2"
            required
          />
          <button
            type="submit"
            className="bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded-md transition-colors duration-300 mt-4"
            onClick={handleEmailSubmit}
          >
            Submit
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
            className="bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded-md transition-colors duration-300 mt-4"
            onClick={handleOtpSubmit}
          >
            Submit
          </button>
        </div>
      )}
    </form>
    </>
  );
}

export default OtpLogin;
