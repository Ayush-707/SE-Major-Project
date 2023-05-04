

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
import jsPDF from 'jspdf';
import 'jspdf-autotable';







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

  const generatePdf = () => {
    const doc = new jsPDF('p', 'pt', 'letter');
    const tableRows = [];
    const headers = ['Name', 'Phone', 'Email', 'Address', 'Type', 'Amount'];
  
    requests.forEach(request => {
      const row = [request.name, request.phone, request.email, request.address, request.type, request.amount];
      tableRows.push(row);
    });
  
    // Set font size and center align the heading
    doc.setFontSize(18);
    doc.setTextColor(0, 0, 0); // Set text color to blue
    doc.text('Investment Accounts', doc.internal.pageSize.width / 2, 80, { align: 'center' });
  
    // Create the table and center align it
    doc.autoTable({
      head: [headers],
      body: tableRows,
      tableWidth: 'wrap',
      margin: { top: 100 },
      theme: 'striped', // Apply striped theme to the table
      columnWidth: [120, '*', '*', '*', '*', '*'], // Set the width of the first column to 120
    });
    
    // Save the PDF file
    doc.save('investments.pdf');
  }
  
  
  
  /*
  const generatePdf = () => {
    const doc = new jsPDF();
    const tableRows = [];
    const headers = ['Name', 'Phone', 'Email', 'Address', 'Type', 'Amount'];
    requests.forEach(request => {
      const row = [request.name, request.phone, request.email, request.address, request.type, request.amount];
      tableRows.push(row);
    });
    doc.autoTable({
      head: [headers],
      body: tableRows,
      tableWidth: 'wrap',
    });
    doc.save('investments.pdf');
  }
  */
  

  return (

  <>

      
  <ToastContainer />

  <Button variant="contained" color="primary" onClick={() => generatePdf()}>Generate PDF</Button>

    <TableContainer component={Paper} sx={{ width: '95%', marginLeft: '2px', marginRight: '2px', overflowX: 'auto' }}>
      <Table aria-label="simple table" sx={{ textAlign: 'center' }}>
      <TableHead sx={{ borderBottom: '2px solid white', borderTop: '1px solid', backgroundColor: 'yellow' }}>
          <TableRow>
            <TableCell sx={{ color: 'black', fontFamily: 'Georgia', fontSize: '18px', width: '10%', textAlign: 'center' }}>NAME</TableCell>
            <TableCell sx={{ color: 'black', fontFamily: 'Georgia', fontSize: '18px', textAlign: 'center' }}>PHONE</TableCell>
            <TableCell sx={{ color: 'black', fontFamily: 'Georgia', fontSize: '18px', width: '10%', textAlign: 'center' }}>EMAIL</TableCell>
            <TableCell sx={{ color: 'blacke', fontFamily: 'Georgia', fontSize: '18px', width: '20%', textAlign: 'center' }}>ADDRESS</TableCell>
           
            <TableCell sx={{ color: 'black', fontFamily: 'Georgia', fontSize: '18px', textAlign: 'center' }}>TYPE</TableCell>
            <TableCell sx={{ color: 'black', fontFamily: 'Georgia', fontSize: '18px', textAlign: 'center' }}>Amount</TableCell>
           

          </TableRow>
      </TableHead>

        <TableBody>
          {requests.map((request, index) => (
            <TableRow key={request._id} className={index % 2 === 0 ? "bg-gray-100" : ""}>
              <TableCell sx = {{textAlign: 'center', fontFamily: 'Arial', fontSize: '15px'}}>{request.name}</TableCell>
              <TableCell sx = {{textAlign: 'center', fontFamily: 'Arial', fontSize: '15px'}}>{request.phone}</TableCell>
              <TableCell sx = {{textAlign: 'center', fontFamily: 'Arial', fontSize: '15px'}}>{request.email}</TableCell>
              <TableCell sx = {{textAlign: 'center', fontFamily: 'Arial', fontSize: '15px'}}>{request.address}</TableCell>
              
              <TableCell sx = {{textAlign: 'center', fontFamily: 'Arial', fontSize: '15px'}}>{request.accountType}</TableCell>
              <TableCell sx = {{textAlign: 'center', fontFamily: 'Arial', fontSize: '15px'}}>{request.amount}
            
          
          </TableCell>
        </TableRow>
      ))}
    </TableBody>
  </Table>
</TableContainer>



</>
)
}

export default InvestDetail;





/**
  <TableCell sx={{ color: 'black', fontFamily: 'Georgia', fontSize: '18px', textAlign: 'center' }}>STATUS</TableCell>
            <TableCell sx={{ color: 'black', fontFamily: 'Georgia', fontSize: '18px', textAlign: 'center' }}>ACTION</TableCell>
<TableCell sx = {{textAlign: 'center', fontFamily: 'Arial'}}>{request.status}</TableCell>
              {request.status === 'Pending' ? 
              <>
                <Button variant="contained" color="primary" onClick={() => handleApprove(request._id)}>Approve</Button>
                <Button variant="contained" color="secondary" sx={{ marginLeft: '5px' }} onClick={() => handleReject(request._id)}>Reject</Button>
              </>
              :
              <Button variant="contained" disabled>{request.status}</Button>
            }
 */
           