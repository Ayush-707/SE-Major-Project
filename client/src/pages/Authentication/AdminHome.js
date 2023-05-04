import React, { useEffect, useState } from "react";
import { GetAccountInfoEmployee } from "../../Services/APIs/AdminAPI";


const UserHomePage = () => {

  const currentUser = JSON.parse(localStorage.getItem('currentUser'));
    
  const styles = {
    backgroundImage: `url(${process.env.PUBLIC_URL}/gvTIFs.webp)`,
    overflow: `hidden`
  }

  const [isLoading, setIsLoading] = useState(true);
  const [name, setName] = useState("");
  const [emID, setemID] = useState("");
  const [email, setEmail] = useState("");


  useEffect(() => {
    const fetchAccountInfo = async () => {
      try {
        setIsLoading(true);
        const response = await GetAccountInfoEmployee({ user: currentUser });
        setName(response.data.userTableData.Name);
        setEmail(response.data.userTableData.Email);
        setemID(response.data.userTableData.EmployeeID);
      } catch (error) {
        console.error(error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchAccountInfo();
  }, [currentUser]);

  return (
<>
<div className="flex flex-col items-center justify-center h-screen  bg-gray-100" style={styles}>
        <div className="bg-white rounded-lg shadow-lg height " style={{height: "500px", width: "500px"}}>
          <div className="px-4 py-5 sm:p-6">
            <div className="mb-4">
              <img
                className="h-16 w-16 rounded-full mx-auto"
                src={process.env.PUBLIC_URL + '/sound.jpg'}
                alt="User Avatar"
              />
            </div>
            <p className="text-sm text-gray-600 text-center mb-4">
              Employee
            </p>
            <div className="flex flex-col text-gray-700 mb-4">
              <span>
                <span className="ml-2">Full Name:</span>
                <span className="ml-2 font-bold">{ name }</span>
              </span>
            </div>
            <div className="flex flex-col text-gray-700 mb-4">
              <span>
                <span className="ml-2">Employee ID:</span>
                <span className="ml-2 font-bold">{ emID }</span>
              </span>
            </div>
            <div className="flex flex-col text-gray-700 mb-4">
              <span>
                <span className="ml-2">Registered Email:</span>
                <span className="ml-2 font-bold">{ email }</span>
              </span>
            </div>
          </div>
        </div>
      </div>
</>
  );
};

export default UserHomePage;
