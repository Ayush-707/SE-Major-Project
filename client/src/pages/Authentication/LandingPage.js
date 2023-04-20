import React from "react";
import { useNavigate } from "react-router-dom";

function LoginPage() {
  const navigate = useNavigate();

  const handleEmployeeLoginClick = () => {};

  const handleCustomerLoginClick = () => {
    navigate("/User/Auth");
  };

  const styles = {
    backgroundImage: `url(${process.env.PUBLIC_URL}/gvTIFs.webp)`,
    overflow: "hidden",
  };

  return (
    <div
      className="flex flex-col items-center justify-start min-h-screen bg-gray-100"
      style={styles}
    >
      <div className="flex flex-col md:flex-row items-center mt-36">
        <div
          className="card bg-white rounded-lg shadow-lg w-80 p-6 m-4 cursor-pointer transform transition duration-300 hover:shadow-xl hover:-translate-y-2 hover:text-black flex flex-col justify-center items-center"
          onClick={handleEmployeeLoginClick}
        >
          <i className="icon fa-regular fa-building text-6xl mb-2"></i>
          <h2 className="text-lg font-bold">Employee</h2>
          <p className="text-gray-700 text-sm mt-2">
            Access administrative functions and customer information.
          </p>
        </div>
        <div
          className="card bg-white rounded-lg shadow-lg w-80 p-6 m-4 cursor-pointer transform transition duration-300 hover:shadow-xl hover:-translate-y-2 hover:text-black flex flex-col justify-center items-center"
          onClick={handleCustomerLoginClick}
        >
          <i className="icon fa-regular fa-user text-6xl mb-2"></i>
          <h2 className="text-lg font-bold">Customer</h2>
          <p className="text-gray-700 text-sm mt-2">
            Access your account information and make transactions.
          </p>
        </div>
      </div>

      <style>
        {`
          .card:hover .icon {
            animation: rotate 2s infinite linear;
          }

          @keyframes rotate {
            0% {
              transform: rotateY(0deg);
            }
            100% {
              transform: rotateY(360deg);
            }
          }
        `}
      </style>
    </div>
  );
}

export default LoginPage;
