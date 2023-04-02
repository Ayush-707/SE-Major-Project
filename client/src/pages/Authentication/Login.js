 import React, { useState } from 'react'

const Login = () => {

    const func = async (e) => {
        e.preventDefault();

        }
    


    return (
        
  <>
  {/* <section className="bg-gray-100 h-screen flex items-center justify-center">
  <div className="max-w-xl mx-auto px-6 py-12 bg-white rounded-md shadow-md flex">
    <div className="w-1/2 pr-4">
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
        <button onClick={func} className="w-full px-4 py-2 text-white bg-blue-500 rounded-md hover:bg-blue-600 focus:outline-none focus:bg-blue-600">
          Login
        </button>
      </form>
    </div>
    <div className="w-1/2 pl-4 border-l">
      <div className="mb-6">
        <h1 className="text-2xl font-bold text-gray-800">Create an Account</h1>
        <p className="text-gray-500">Sign up to get started</p>
      </div>
      <form>
        <div className="mb-4">
          <label htmlFor="name" className="block mb-2 font-bold text-gray-800">Name</label>
          <input type="text" placeholder="Enter Your Name" className="w-full px-3 py-2 border rounded-md text-gray-700 focus:outline-none focus:shadow-outline-blue focus:border-blue-500" />
        
        
          <label htmlFor="email" className="block mb-2 font-bold text-gray-800">Email</label>
          <input type="email" placeholder="Enter Your Email" className="w-full px-3 py-2 border rounded-md text-gray-700 focus:outline-none focus:shadow-outline-blue focus:border-blue-500" />
        
          <label htmlFor="password" className="block mb-2 font-bold text-gray-800">Password</label>
          <input type="password" placeholder="Enter Your Password" className="w-full px-3 py-2 border rounded-md text-gray-700 focus:outline-none focus:shadow-outline-blue focus:border-blue-500" />
        
          <label htmlFor="confirmPassword" className="block mb-2 font-bold text-gray-800">Confirm Password</label>
          <input type="password" placeholder="Confirm Your Password" className="w-full px-3 py-2 border rounded-md text-gray-700 focus:outline-none focus:shadow-outline-blue focus:border-blue-500" />
          
        </div>
        <button type="submit" className="w-full px-4 py-2 text-white bg-blue-500 rounded-md hover:bg-blue-600 focus:outline-none focus:bg-blue-600">
            Sign Up
            </button>
        </form>

        </div>
        </div>

</section> */}
 <div style={{ backgroundImage: 'url(/gvTIFs.webp'}}>
<div class="flex justify-center">
  <div class="w-1/3 px-4 mt-28">
    <div class="bg-gray-200 rounded-lg shadow-lg p-6 mb-4">

    <div className="mb-6">
        <h1 className="text-2xl font-bold text-gray-800">Welcome Back, Log In</h1>
        <p className="text-gray-500">Hi, we are glad you are back. Please log in.</p>
      </div>
      <form>
        <div className="mb-4">
          <label htmlFor="username" className="block mb-2 font-semibold text-gray-800">Username</label>
          <input type="text" placeholder="Enter Your Username" className="w-full px-3 py-2 border rounded-md text-gray-700 focus:outline-none focus:shadow-outline-blue focus:border-blue-500 placeholder-thin" />
        </div>
        <div className="mb-4">
          <label htmlFor="password" className="block mb-2 font-semibold text-gray-800">Password</label>
          <input type="password" placeholder="Enter Your Password" className="w-full px-3 py-2 border rounded-md text-gray-700 focus:outline-none focus:shadow-outline-blue focus:border-blue-500" />
        </div>
        <button onClick={func} className="w-full px-4 py-2 text-white bg-blue-500 rounded-md hover:bg-blue-600 focus:outline-none focus:bg-blue-600">
          Login
        </button>
      </form>

    </div>
  </div>
  <div class="w-1/3 px-4 mt-10">
    <div class="bg-gray-200 rounded-lg shadow-lg p-6 mb-4">

    <div className="mb-6">
        <h1 className="text-2xl font-bold text-gray-800">Create an Account</h1>
        <p className="text-gray-500">Sign up to get started</p>
      </div>
      <form>
        <div className="mb-4">
          <label htmlFor="name" className="block mb-2 font-semibold text-gray-800">Name</label>
          <input type="text" placeholder="Enter Your Name" className="w-full px-3 py-2 border rounded-md text-gray-700 focus:outline-none focus:shadow-outline-blue focus:border-blue-500" />
        </div>
        <div className="mb-4">
        
          <label htmlFor="email" className="block mb-2 font-semibold text-gray-800">Email</label>
          <input type="email" placeholder="Enter Your Email" className="w-full px-3 py-2 border rounded-md text-gray-700 focus:outline-none focus:shadow-outline-blue focus:border-blue-500" />
        </div>
        <div className="mb-4">
          <label htmlFor="password" className="block mb-2 font-semibold text-gray-800">Password</label>
          <input type="password" placeholder="Enter Your Password" className="w-full px-3 py-2 border rounded-md text-gray-700 focus:outline-none focus:shadow-outline-blue focus:border-blue-500" />
        </div>
        <div className="mb-4">
          <label htmlFor="confirmPassword" className="block mb-2 font-semibold text-gray-800">Confirm Password</label>
          <input type="password" placeholder="Confirm Your Password" className="w-full px-3 py-2 border rounded-md text-gray-700 focus:outline-none focus:shadow-outline-blue focus:border-blue-500" />
          
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

export default Login