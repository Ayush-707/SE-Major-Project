import React, { useState } from 'react'
import { Login,Signup } from '../../Services/APIs/Auth/AuthAPI';
import {ToastContainer, toast } from 'react-toastify';

const Auth = () => {

  const [formData1,setFormData1] = useState ({
    userName: '',
    pass: ''
  });

  const [formData2, setFormData2] = useState ({
    fullname: '',
    newUserName: '',
    Email: '',
    passWord: '',
    confirmPass: ''
  });

  
  function handleChange (event, formName) {

    const {name,value} = event.target;
    if (formName === 'form1') {
      setFormData1(prevState => ({ ...prevState, [name]: value}));
    } else if (formName === 'form2') {
      setFormData2 (prevState => ({...prevState, [name]: value}));
    }
  }

  
  const handleSubmit1 = async (event) => {
    event.preventDefault();
    console.log(formData1);
    //apicall

    const loginRes = await Login (formData1);


  };

  const handleSubmit2 = async (event) => {
    event.preventDefault();
    console.log(formData2);

    if ( formData2.passWord.length !== 6 ) {
      toast.error('Password should be at Least 6 Characters Long', {
        autoClose: 2000,
        hideProgressBar: true,
        pauseOnHover: false,
      });

    } else if ( formData2.passWord !== formData2.confirmPass) {

      toast.error('Passwords do not Match!', {
        autoClose: 2000,
        hideProgressBar: true,
        pauseOnHover: false,
      });
        
    } else {

      try {
        const signupRes = await Signup(formData2);
      
        if (signupRes.status === 200 ) {
          console.log(signupRes.data);
          toast.success('Signup Successful!', {
            autoClose: 2000,
            hideProgressBar: true,
            pauseOnHover: false,
          });

        } else {
          throw new Error(signupRes);
        }

      } catch (error) {
        console.error(error);
        toast.error( 'Account Creation Failed!', {
          autoClose: 2000,
          hideProgressBar: true,
          pauseOnHover: false
        });
      }
      
      
    }
    
      
  };


 

    return (
        
  <>
  
<ToastContainer />
<div style={{ backgroundImage: 'url(/gvTIFs.webp)' }}>
    <div class="flex justify-center">
      <div class="w-1/3 px-4 mt-32 scale-95 ">
        <div class="bg-gray-200 rounded-lg shadow-lg p-6 mb-4">

          <div className="mb-6">
            <h1 className="text-2xl font-bold text-gray-800">Welcome Back, Log In</h1>
            <p className="text-gray-500">Hi, we are glad you are back. Please log in.</p>
          </div>

          <form onSubmit = {handleSubmit1}>
            <div className="mb-4">
              <label htmlFor="username" className="block mb-2 font-semibold text-gray-800">Username</label>
              <input type="text" name="userName" value = {formData1.userName} formName = "form1" onChange={(e) => handleChange(e, "form1")}   placeholder="Enter Your Username" className="w-full px-3 py-2 border rounded-md text-gray-700 focus:outline-none focus:shadow-outline-blue focus:border-blue-500" required />
            </div>
            <div className="mb-4">
              <label htmlFor="password" className="block mb-2 font-semibold text-gray-800">Password</label>
              <input type="password" name="pass" value = {formData1.pass} formName = "form1" onChange={(e) => handleChange(e, "form1")}  placeholder="Enter Your Password" className="w-full px-3 py-2 border rounded-md text-gray-700 focus:outline-none focus:shadow-outline-blue focus:border-blue-500" required />
            </div>
              <button type = "submit" className="w-full px-4 py-2 text-white bg-blue-500 rounded-md hover:bg-blue-600 focus:outline-none focus:bg-blue-600">
                Login
              </button>
          </form>

    </div>
  </div>
  <div class="w-1/3 px-4 transform scale-90 transform-origin-center">
    <div class="bg-gray-200 rounded-lg shadow-lg p-6 mb-4">

    <div className="mb-6">
        <h1 className="text-2xl font-bold text-gray-800">Create an Account</h1>
        <p className="text-gray-500">Sign up to get started</p>
      </div>

      

      <form onSubmit = {handleSubmit2}>
        <div className="mb-4">
          <label htmlFor="name" className="block mb-2 font-semibold text-gray-800">Name</label>
          <input type="text" name="fullname" value = {formData2.fullname} onChange={(e) => handleChange(e, "form2")}  placeholder="Enter Your Full Name" className="w-full px-3 py-2 border rounded-md text-gray-700 focus:outline-none focus:shadow-outline-blue focus:border-blue-500" required />
        </div>
        <div className="mb-4">
          <label htmlFor="username" className="block mb-2 font-semibold text-gray-800">Username</label>
          <input type="text" name = "newUserName" value = {formData2.newUserName} onChange={(e) => handleChange(e, "form2")}  placeholder="Enter Username" className="w-full px-3 py-2 border rounded-md text-gray-700 focus:outline-none focus:shadow-outline-blue focus:border-blue-500" required />
        </div>
        <div className="mb-4">
        
          <label htmlFor="email" className="block mb-2 font-semibold text-gray-800">Email</label>
          <input type="email" name = "Email" value = {formData2.Email} onChange={(e) => handleChange(e, "form2")} placeholder="Enter Your Email" className="w-full px-3 py-2 border rounded-md text-gray-700 focus:outline-none focus:shadow-outline-blue focus:border-blue-500" required/>
        </div>
        <div className="mb-4">
          <label htmlFor="password" className="block mb-2 font-semibold text-gray-800">Password</label>
          <input type="password" name = "passWord" value = {formData2.passWord} onChange={(e) => handleChange(e, "form2")} placeholder="Enter Your Password" className="w-full px-3 py-2 border rounded-md text-gray-700 focus:outline-none focus:shadow-outline-blue focus:border-blue-500" required/>
        </div>
        <div className="mb-4">
          <label htmlFor="confirmPassword" className="block mb-2 font-semibold text-gray-800">Confirm Password</label>
          <input type="password" name = "confirmPass" value = {formData2.confirmPass} onChange={(e) => handleChange(e, "form2")} placeholder="Confirm Your Password" className="w-full px-3 py-2 border rounded-md text-gray-700 focus:outline-none focus:shadow-outline-blue focus:border-blue-500" required />
          
        </div>

        <button type="submit" className="w-full px-4 py-2 text-white bg-blue-500 rounded-md hover:bg-blue-600 focus:outline-none focus:bg-blue-600">
            Sign Up
            </button>
        </form>

    </div>
  </div>
</div>

</div>

</>


      
    )
}

export default Auth