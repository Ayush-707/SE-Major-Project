import React, { useState, useEffect } from 'react'
import { Login,Signup } from '../../Services/APIs/AuthAPI';
import { useNavigate } from 'react-router-dom';
import {ToastContainer, toast } from 'react-toastify';

function Auth () {

  const [loginData,setLoginData] = useState ({
    userName: '',
    pass: ''
  });


  const [signupData, setSignupData] = useState ({
    fullName: '',
    newUserName: '',
    email: '',
    passWord: '',
    confirmPass: ''
  });

  const navigate = useNavigate();

  const styles = {
    backgroundImage: 'url(/gvTIFs.webp)',
    
    // height: "89.5vh",
    overflow: "hidden"
  }
  
  function handleChange (event, formName) {

    const {name,value} = event.target;
    if (formName === 'form1') {
      setLoginData(prevState => ({ ...prevState, [name]: value}));
    } else if (formName === 'form2') {
      setSignupData (prevState => ({...prevState, [name]: value}));
    }
  }

  
  const handleSubmit1 = async (event) => {
    event.preventDefault();
    //console.log(formData1);
    //apicall

    try {
      const loginRes = await Login (loginData);
      console.log(loginRes.data);
      
      if (loginRes.status === 201 ) {
          toast.error('Username does not Exists', {
          autoClose: 2000,
          hideProgressBar: true,
          pauseOnHover: false,
        });
      } else if ( loginRes.status === 202 ) {

          toast.error('Incorrect Password', {
          autoClose: 2000,
          hideProgressBar: true,
          pauseOnHover: false,
        });
      } else if ( loginRes.status === 200 ) {

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

        localStorage.setItem('currentUser', JSON.stringify(loginData.userName));
        navigate("/User/Home");

      } else {
        throw new Error(loginRes);
      }

    } catch (error) {
      console.log(error);
    }


  };

  const handleSubmit2 = async (event) => {
    event.preventDefault();
    console.log(signupData.passWord);

    if ( signupData.passWord.length < 5 ) {
      toast.error('Password should be at Least 6 Characters Long', {
        autoClose: 2000,
        hideProgressBar: true,
        pauseOnHover: false,
      });

    } else if ( signupData.passWord !== signupData.confirmPass) {

      toast.error('Passwords do not Match!', {
        autoClose: 2000,
        hideProgressBar: true,
        pauseOnHover: false,
      });
        
    } else {

      try {
        const signupRes = await Signup(signupData);
      
        if (signupRes.status === 201 ) {
          console.log(signupRes.data);
          toast.error("Username already exists.", {
            autoClose: 2000,
            hideProgressBar: true,
            pauseOnHover: false,
          });

        } else if(signupRes.status === 202){
          console.log(signupRes.data);
          toast.error("Email already exists.", {
            autoClose: 2000,
            hideProgressBar: true,
            pauseOnHover: false,
          });
        } else {

          console.log(signupRes.data);
          toast.success("Account Creation Successfull.", {
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
        
  <div>
  
<ToastContainer />

<div style = {styles} >
    <div class="flex justify-center">
      <div class="w-1/3 scale-95 mt-20 ml-28">
        <div class="bg-gray-200 rounded-lg shadow-lg p-6 mb-4">

          <div className="mb-6">
            <h1 className="text-2xl font-bold text-gray-800">Welcome Back, Log In</h1>
            <p className="text-gray-500">Hi, we are glad you are back. Please log in.</p>
          </div>

          <form onSubmit = {handleSubmit1}>
            <div className="mb-4">
              <label htmlFor="username" className="block mb-2 font-semibold text-gray-800">Username</label>
              <input data-testid="login_user_username" type="text" name="userName" value = {loginData.userName} formName = "form1" onChange={(e) => handleChange(e, "form1")}   placeholder="Enter Your Username" className="w-full px-3 py-2 border rounded-md text-gray-700 focus:outline-none focus:shadow-outline-blue focus:border-blue-500" required />
            </div>
            <div className="mb-4">
              <label htmlFor="password" className="block mb-2 font-semibold text-gray-800">Password</label>
              <input data-testid="login_user_password" type="password" name="pass" value = {loginData.pass} formName = "form1" onChange={(e) => handleChange(e, "form1")}  placeholder="Enter Your Password" className="w-full px-3 py-2 border rounded-md text-gray-700 focus:outline-none focus:shadow-outline-blue focus:border-blue-500" required />
            </div>
              <button data-testid="login_user_button" type = "submit" className="w-full px-4 py-2 text-white bg-blue-500 rounded-md hover:bg-blue-700 focus:outline-none focus:bg-blue-600">
                Login
              </button>
          </form>

    </div>
  </div>
  <div class="px-4 transform scale-90 transform-origin-center w-1/2">
    <div class="bg-gray-200 rounded-lg shadow-lg p-6 mb-4">

    <div className="mb-6">
        <h1 className="text-2xl font-bold text-gray-800">Create New Profile</h1>
        <p className="text-gray-500">Sign up to get started</p>
      </div>

      

      <form onSubmit = {handleSubmit2}>
        <div className="mb-4">
          <label htmlFor="name" className="block mb-2 font-semibold text-gray-800">Name</label>
          <input data-testid="signup_name" type="text" name="fullName" value = {signupData.fullName} onChange={(e) => handleChange(e, "form2")}  placeholder="Enter Your Full Name" className="w-full px-3 py-2 border rounded-md text-gray-700 focus:outline-none focus:shadow-outline-blue focus:border-blue-500" required />
        </div>
        <div className="mb-4">
          <label htmlFor="username" className="block mb-2 font-semibold text-gray-800">Username</label>
          <input data-testid="signup_username" type="text" name = "newUserName" value = {signupData.newUserName} onChange={(e) => handleChange(e, "form2")}  placeholder="Enter Username" className="w-full px-3 py-2 border rounded-md text-gray-700 focus:outline-none focus:shadow-outline-blue focus:border-blue-500" required />
        </div>
        <div className="mb-4">
        
          <label htmlFor="email" className="block mb-2 font-semibold text-gray-800">Email</label>
          <input data-testid="signup_email" type="email" name = "email" value = {signupData.email} onChange={(e) => handleChange(e, "form2")} placeholder="Enter Your Email" className="w-full px-3 py-2 border rounded-md text-gray-700 focus:outline-none focus:shadow-outline-blue focus:border-blue-500" required/>
        </div>
        <div className="flex mb-4">
  <div className="w-1/2 inline-block mr-2">
    <label htmlFor="password" className="block mb-2 font-semibold text-gray-800">Password</label>
    <input data-testid="signup_password" type="password" name="passWord" value={signupData.passWord} onChange={(e) => handleChange(e, "form2")} placeholder="Enter Password" className="w-full px-3 py-2 border rounded-md text-gray-700 focus:outline-none focus:shadow-outline-blue focus:border-blue-500" required />
  </div>
  <div className="w-1/2 inline-block ml-2">
    <label htmlFor="confirmPassword" className="block mb-2 font-semibold text-gray-800">Confirm Password</label>
    <input data-testid="signup_confpassword" type="password" name="confirmPass" value={signupData.confirmPass} onChange={(e) => handleChange(e, "form2")} placeholder="Confirm Password" className="w-full px-3 py-2 border rounded-md text-gray-700 focus:outline-none focus:shadow-outline-blue focus:border-blue-500" required />
  </div>
</div>


        <button data-testid="signup_button" type="submit" className="w-full px-4 py-2 text-white bg-blue-500 rounded-md hover:bg-blue-700 focus:outline-none focus:bg-blue-600">
            Sign Up
            </button>
        </form>

    </div>
  </div>
</div>

</div>

</div>


      
    )
}

export default Auth