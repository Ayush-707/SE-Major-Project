import React, { useEffect, useState } from "react";
import { GetAccountInfo } from "../../Services/APIs/UserAPI";
import { useLocation } from "react-router-dom";




const UserHomePage = () => {

  // const { state } = useLocation();
  // const { username } = state;

  // const [username, setUsername] = useState("");

  const username = JSON.parse(localStorage.getItem('currentUser'));


  // useEffect(() => {
  //   const item = JSON.parse(localStorage.getItem('currentUser'));
  //   if (item) {
  //     setUsername(item);
  //   }
  // }, [username]);
    
  const styles = {
    backgroundImage: `url(${process.env.PUBLIC_URL}/gvTIFs.webp)`,
    overflow: `hidden`
  }

  const [isLoading, setIsLoading] = useState(true);
  // const [userTableData, setUserTableData] = useState(null);
  const [name, setName] = useState("");
  const [acNo, setACNo] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [balance, setBalance] = useState("");


  useEffect(() => {
    const fetchAccountInfo = async () => {
      try {
        setIsLoading(true);
        const response = await GetAccountInfo({ user: username });
        setName(response.data.userTableData.Name);
        setEmail(response.data.userTableData.Email);
        if (response.data.accountTableData.userName === username) {
          setACNo(response.data.accountTableData.accountNumber);
          setPhone(response.data.accountTableData.phone);
          setBalance(response.data.accountTableData.balance);
        }
      } catch (error) {
        console.error(error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchAccountInfo();
  }, [username]);


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
            <h1 className="text-2xl font-bold text-gray-800 text-center mb-2">
              { username }
            </h1>
            <p className="text-sm text-gray-600 text-center mb-4">
              Account holder
            </p>
            <div className="flex flex-col text-gray-700 mb-4">
              <span>
                <span className="ml-2">Full Name:</span>
                <span className="ml-2 font-bold">{ name }</span>
              </span>
            </div>
            <div className="flex flex-col text-gray-700 mb-4">
              <span>
                <span className="ml-2">Account Number:</span>
                <span className="ml-2 font-bold">{ acNo }</span>
              </span>
            </div>
            <div className="flex flex-col text-gray-700 mb-4">
              <span>
                <span className="ml-2">Registered Email:</span>
                <span className="ml-2 font-bold">{ email }</span>
              </span>
            </div>
            <div className="flex flex-col text-gray-700 mb-4">
              <span>
                <span className="ml-2">Registered Phone :</span>
                <span className="ml-2 font-bold">{ phone }</span>
              </span>
            </div>
            <div className="flex flex-col text-gray-700 mb-4">
              <span>
                <span className="ml-2">Account Balance :</span>
                <span className="ml-2 font-bold">{ balance }</span>
              </span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default UserHomePage;
