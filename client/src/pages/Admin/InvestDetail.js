
  





import React, { useEffect, useState,  } from "react";
import {GetInvest, InvForm, createAcc} from "../../Services/APIs/AdminAPI";
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import Button from '@mui/material/Button';
import {ToastContainer, toast } from 'react-toastify';







function InvestDetail() {
  const [openPdf, setOpenPdf] = useState(false);

  const [requests, setRequests] = useState([]);
 
  useEffect(() => {
    const fetchRequests = async () => {
      const response = await GetInvest();
      setRequests(response.data);  
    };
    fetchRequests();
  },[]);

  const handleApprove = async (id) => {

    const obj1 = {
      ID: id,
      Action: true
    }
    const res = await InvForm(obj1);
    
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

          createInvest(obj1);

          
          return { ...req, status: "Approved" }
        } else {
          return req;
        }
      });
      setRequests(updatedRequests);
    }
  }
  const createInvest = async (obj) => {
    
    const serverRes = await createAcc(obj);
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
    const res = await InvForm(obj2);
    
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
  
  
 
  

  return (

  <>

      
  <ToastContainer />

 
          <TableContainer 
          component={Paper} 
          sx={{ 
            width: '99.7%', 
            marginLeft: '2px', 
            marginRight: '2px', 
            overflowX: 'auto',
            borderRadius: '8px' // add a border radius value here
          }}
            >
      <Table aria-label="simple table" sx={{ textAlign: 'center' }}>
      <TableHead sx={{ borderBottom: '2px solid white', borderTop: '1px solid', backgroundColor: 'purple' }}>
          <TableRow>
            <TableCell sx={{ color: 'white', fontFamily: 'Bahnschrift SemiBold', fontSize: '20px', width: '10%', textAlign: 'center' }}>NAME</TableCell>
            <TableCell sx={{ color: 'white', fontFamily: 'Bahnschrift SemiBold', fontSize: '20px', textAlign: 'center' }}>PHONE</TableCell>
            <TableCell sx={{ color: 'white', fontFamily: 'Bahnschrift SemiBold', fontSize: '20px', width: '10%', textAlign: 'center' }}>EMAIL</TableCell>
            <TableCell sx={{ color: 'white', fontFamily: 'Bahnschrift SemiBold', fontSize: '20px', width: '20%', textAlign: 'center' }}>ADDRESS</TableCell>
           
            <TableCell sx={{ color: 'white', fontFamily: 'Bahnschrift SemiBold', fontSize: '20px', textAlign: 'center' }}>TYPE</TableCell>
            <TableCell sx={{ color: 'white', fontFamily: 'Bahnschrift SemiBold', fontSize: '20px', textAlign: 'center' }}>Amount</TableCell>
            
          </TableRow>
      </TableHead>

        <TableBody>
          {requests.map((request, index) => (
            <TableRow key={request._id} className={index % 2 === 0 ? "bg-gray-200" : ""}>
              <TableCell sx = {{textAlign: 'center', fontFamily: 'Verdana'}}>{request.name}</TableCell>
              <TableCell sx = {{textAlign: 'center', fontFamily: 'Verdana'}}>{request.phone}</TableCell>
              <TableCell sx = {{textAlign: 'center', fontFamily: 'Verdana'}}>{request.email}</TableCell>
              <TableCell sx = {{textAlign: 'center', fontFamily: 'Verdana', fontSize: '17px'}}>{request.address}</TableCell>
              
              <TableCell sx = {{textAlign: 'center', fontFamily: 'Verdana'}}>{request.accountType}</TableCell>
              <TableCell sx = {{textAlign: 'center', fontFamily: 'Verdana'}}>{request.amount}</TableCell>
              
        </TableRow>
      ))}
    </TableBody>
  </Table>
</TableContainer>



</>
)
}

export default InvestDetail;





