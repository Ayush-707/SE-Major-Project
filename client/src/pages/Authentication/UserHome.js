import React from "react";

const UserHomePage = () => {
  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gray-100">
      <div className="max-w-md mx-auto bg-white rounded-lg shadow-lg overflow-hidden">
        <div className="px-4 py-5 sm:p-6">
          <div className="mb-4">
            <img
              className="h-16 w-16 rounded-full mx-auto"
              src={process.env.PUBLIC_URL + '/sound.jpg'}              alt="User Avatar"
            />
          </div>
          <h1 className="text-2xl font-bold text-gray-800 text-center mb-2">
            Jane Doe
          </h1>
          <p className="text-sm text-gray-600 text-center mb-4">
            Account holder
          </p>
          <p className="text-gray-700 text-center leading-relaxed mb-4">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat.
          </p>
          <div className="flex justify-center">
            <button className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-700 focus:outline-none focus:bg-blue-700">
              Edit Profile
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserHomePage;
