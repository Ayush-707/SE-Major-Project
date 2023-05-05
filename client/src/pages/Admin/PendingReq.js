import React, { useEffect, useState } from "react";
import { GetAccountReq, AccountReq, createNew } from "../../Services/APIs/AdminAPI";
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import Button from '@mui/material/Button';
import {ToastContainer, toast } from 'react-toastify';



function PendingReq() {
  const [requests, setRequests] = useState([]);
 
  useEffect(() => {
    const fetchRequests = async () => {
      const response = await GetAccountReq();
      setRequests(response.data);  
    };
    fetchRequests();
  },[]);

  const handleApprove = async (id) => {

    const obj1 = {
      ID: id,
      Action: true
    }
    const res = await AccountReq(obj1);
    
    if (res.status === 200) {
      const updatedRequests = requests.map(req => {
        if (req._id === id) {
          toast.success("Request Approved!", {
            autoClose: 1000,
            hideProgressBar: false,
            pauseOnHover: false,
            style: {
              background: "#6ACF6A",
              color: "#fff",
              borderRadius: "8px",
              fontWeight: "bold",
              border: "none",
              boxShadow: "0px 0px 10px rgba(0,0,0,0.2)",
            },
          });

          createAccount(obj1);

          
          return { ...req, status: "Approved" }
        } else {
          return req;
        }
      });
      setRequests(updatedRequests);
    }
  }
  const createAccount = async (obj) => {
    
    const serverRes = await createNew(obj);
    console.log(serverRes.data);

    if (serverRes.status === 201) {
      toast.success("New Account Created!", {
        autoClose: 2000,
        hideProgressBar: true,
        pauseOnHover: false,
        style: {
          background: "#6ACF6A",
          color: "#fff",
          borderRadius: "8px",
          fontWeight: "bold",
          border: "none",
          boxShadow: "0px 0px 10px rgba(0,0,0,0.2)",
        },
      });
    } else {
      toast.error("Error While Creating New Account")
    }

  }
  const handleReject = async (id) => {

    const obj2 = {
      ID: id,
      Action: false
    }
    const res = await AccountReq(obj2);
    
    if (res.status === 200) {
      const updatedRequests = requests.map(req => {
        if (req._id === id) {
          toast.error("Request Rejected", {
            autoClose: 2000,
            hideProgressBar: true,
            pauseOnHover: false,
          });
          
          return { ...req, status: "Rejected" }
        } else {
          return req;
        }
      });
      setRequests(updatedRequests);
    }
  }


  if ( requests.length === 0) {
    return(
      <div class="flex h-screen items-center justify-center">
      <span class="text-gray-500 text-3xl">No Pending Account Requests at the Moment</span>  
    </div>
    
    )
    
  } else {

  return (

                 <>

      
                    <ToastContainer />
                                    <TableContainer 
                                    component={Paper} 
                                    sx={{ 
                                      width: '85%', 
                                      marginLeft: '140px', 
                                      marginRight: '0px', 
                                      overflowX: 'auto',
                                      borderRadius: '10px', // add a border radius value here
                                      boxShadow: '0 0 20px rgba(255, 255, 255, 0.5), 0 0 10px rgba(255, 255, 255, 0.5), 0 0 5px rgba(255, 255, 255, 0.5)'
                                    }}
                                      >
                                      <Table aria-label="simple table" sx={{ textAlign: 'center' }}>
                                      <TableHead sx={{ 
                                        borderBottom: '2px solid white', 
                                        borderTop: '1px solid', 
                                        backgroundColor: 'purple',
                                        boxShadow: '0 0 20px rgba(255, 255, 255, 0.5), 0 0 10px rgba(255, 255, 255, 0.5), 0 0 5px rgba(255, 255, 255, 0.5)'
                                      }}>     
                                <TableRow>
                              <TableCell sx={{ color: 'white', fontFamily: 'Bahnschrift SemiBold', fontSize: '18px', width: '10%', textAlign: 'center' }}>NAME</TableCell>
                              <TableCell sx={{ color: 'white', fontFamily: 'Bahnschrift SemiBold', fontSize: '18px', textAlign: 'center' }}>PHONE</TableCell>
                              <TableCell sx={{ color: 'white', fontFamily: 'Bahnschrift SemiBold', fontSize: '18px', width: '10%', textAlign: 'center' }}>USERNAME</TableCell>
                              <TableCell sx={{ color: 'white', fontFamily: 'Bahnschrift SemiBold', fontSize: '18px', width: '20%', textAlign: 'center' }}>ADDRESS</TableCell>
                              <TableCell sx={{ color: 'white', fontFamily: 'Bahnschrift SemiBold', fontSize: '18px', textAlign: 'center' }}>DOB</TableCell>
                              <TableCell sx={{ color: 'white', fontFamily: 'Bahnschrift SemiBold', fontSize: '18px', textAlign: 'center' }}>TYPE</TableCell>
                              <TableCell sx={{ color: 'white', fontFamily: 'Bahnschrift SemiBold', fontSize: '18px', textAlign: 'center' }}>STATUS</TableCell>
                              <TableCell sx={{ color: 'white', fontFamily: 'Bahnschrift SemiBold', fontSize: '18px', textAlign: 'center' }}>ACTION</TableCell>

                            </TableRow>
                        </TableHead>

                          <TableBody>
                            {requests.map((request, index) => (
                              <TableRow key={request._id} className={index % 2 === 0 ? "bg-gray-200" : ""}>
                                <TableCell sx = {{textAlign: 'center', fontFamily: 'Verdana', fontSize: '16px'}}>{request.name}</TableCell>
                                <TableCell sx = {{textAlign: 'center', fontFamily: 'Verdana', fontSize: '16px'}}>{request.phone}</TableCell>
                                <TableCell sx = {{textAlign: 'center', fontFamily: 'Verdana', fontSize: '16px'}}>{request.userName}</TableCell>
                                <TableCell sx = {{textAlign: 'center', fontFamily: 'Verdana', fontSize: '16px'}}>{request.address}</TableCell>
                                <TableCell sx = {{textAlign: 'center', fontFamily: 'Verdana', fontSize: '16px'}}>{request.dob}</TableCell>
                                <TableCell sx = {{textAlign: 'center', fontFamily: 'Verdana', fontSize: '16px'}}>{request.accountType}</TableCell>
                                <TableCell sx = {{textAlign: 'center', fontFamily: 'Verdana', fontSize: '16px'}}>{request.status}</TableCell>
                                <TableCell sx = {{textAlign: 'center', fontFamily: 'Verdana', fontSize: '16px'}}>
                              {request.status === 'Pending' ? 
                                <>
                                  <Button variant="contained" color="primary" onClick={() => handleApprove(request._id)}>Approve</Button>
                                  <Button variant="contained" color="secondary" sx={{ marginLeft: '5px' }} onClick={() => handleReject(request._id)}>Reject</Button>
                                </>
                                :
                                <Button variant="contained" disabled>{request.status}</Button>
                              }
                            </TableCell>
                          </TableRow>
                        ))}
                      </TableBody>
                    </Table>
                  </TableContainer>
                  </>
                  )
          }
}

export default PendingReq;




