 import React, { useState } from 'react'

const Login = () => {

    const func = async (e) => {
        e.preventDefault();

        }
    


    return (
        
  <>
  <section className="bg-gray-100 h-screen flex items-center justify-center">
    <div className="max-w-xl mx-auto px-6 py-12 bg-white rounded-md shadow-md">
      <div className="mb-6">
        <h1 className="text-2xl font-bold text-gray-800">Welcome Back, Log In</h1>
        <p className="text-gray-500">Hi, we are glad you are back. Please log in.</p>
      </div>
      <form>
        <div className="mb-4">
          <label htmlFor="username" className="block mb-2 font-bold text-gray-800">Username</label>
          <input type="text" placeholder="Enter Your Username" className="w-full px-3 py-2 border rounded-md text-gray-700 focus:outline-none focus:shadow-outline-blue focus:border-blue-500" />
        </div>
        <div className="mb-4">
          <label htmlFor="password" className="block mb-2 font-bold text-gray-800">Password</label>
          <input type="password" placeholder="Enter Your Password" className="w-full px-3 py-2 border rounded-md text-gray-700 focus:outline-none focus:shadow-outline-blue focus:border-blue-500" />
        </div>
        <button onClick={func} className="w-full px-4 py-2 text-white bg-green-500 rounded-md hover:bg-green-600 focus:outline-none focus:bg-green-600">
          Login
        </button>
      </form>
    </div>
  </section>
</>


      
    )
}

export default Login