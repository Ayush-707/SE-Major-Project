








import React, { useEffect, useState,  } from "react";
import {DataA, DataB, DataC} from "../../Services/APIs/AdminAPI";
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import Button from '@mui/material/Button';
import toast, { Toaster } from 'react-hot-toast';
import jsPDF from 'jspdf';
import 'jspdf-autotable';







function Account() {
  

  const [requests, setRequests] = useState([]);
 
  useEffect(() => {
    const fetchRequests = async () => {
      const response = await DataA();
      setRequests(response.data);  
    };
    fetchRequests();
  },[]);

  const handleApprove = async (id) => {

    const obj1 = {
      ID: id,
      Action: true
    }
    const res = await DataB(obj1);
    
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

          SendB(obj1);

          
          return { ...req, status: "Approved" }
        } else {
          return req;
        }
      });
      setRequests(updatedRequests);
    }
  }
  const SendB = async (obj) => {
    
    const serverRes = await DataC(obj);
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
    const res = await DataB(obj2);
    
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
    const headers = ['Account Number', 'Account Holder Name', 'User Name', 'Account Balance'];
  
    requests.forEach(request => {
      const row = [request.accountNumber, request.accountHolderName, request.userName, request.balance];
      tableRows.push(row);
    });
  
    // Set font size and center align the heading
    doc.setFontSize(18);
    doc.setTextColor(0, 0, 0); // Set text color to blue
   // doc.text('Account Details of Users', doc.internal.pageSize.width / 2, 80, { align: 'center' });
  
    // Create the table and center align it
    doc.autoTable({
      head: [headers],
      body: tableRows,
      tableWidth: 'wrap',
      margin: { top: 100 },
      theme: 'striped', // Apply striped theme to the table
      columnWidth: [160, '*', '*', '*', '*', '*'], // Set the width of the first column to 120
    });
    
    // Save the PDF file
    doc.save('Accounts.pdf');
  }
  
  

  return (

  <>

      
  <Toaster />

  <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'column' }}>

  <div style={{ marginTop: '20px' }}>
    <Button variant="contained" color="primary" onClick={() => generatePdf()}>Download PDF</Button>
  </div>
</div>
<br></br>

          <TableContainer 
          component={Paper} 
          sx={{ 
            width: '95%', 
            marginLeft: '2px', 
            marginRight: '2px', 
            overflowX: 'auto',
            borderRadius: '8px' // add a border radius value here
          }}
            >
      <Table aria-label="simple table" sx={{ textAlign: 'center' }}>
      <TableHead sx={{ borderBottom: '2px solid white', borderTop: '1px solid', backgroundColor: 'yellow' }}>
          <TableRow>
            <TableCell sx={{ color: 'black', fontFamily: 'Georgia', fontSize: '18px', width: '10%', textAlign: 'center' }}>Account Number</TableCell>
            <TableCell sx={{ color: 'black', fontFamily: 'Georgia', fontSize: '18px', textAlign: 'center' }}>Account Holder Name</TableCell>
            <TableCell sx={{ color: 'black', fontFamily: 'Georgia', fontSize: '18px', width: '10%', textAlign: 'center' }}>User Name</TableCell>
            <TableCell sx={{ color: 'black', fontFamily: 'Georgia', fontSize: '18px', textAlign: 'center' }}>Account Balance</TableCell>
           
            
           

           

          </TableRow>
      </TableHead>

        <TableBody>
          {requests.map((request, index) => (
            <TableRow key={request._id} className={index % 2 === 0 ? "bg-gray-100" : ""}>
              <TableCell sx = {{textAlign: 'center', fontFamily: 'Arial', fontSize: '15px'}}>{request.accountNumber}</TableCell>
              <TableCell sx = {{textAlign: 'center', fontFamily: 'Arial', fontSize: '15px'}}>{request.accountHolderName}</TableCell>
              <TableCell sx = {{textAlign: 'center', fontFamily: 'Arial', fontSize: '15px'}}>{request.userName}</TableCell>
              <TableCell sx = {{textAlign: 'center', fontFamily: 'Arial', fontSize: '15px'}}>{request.balance}</TableCell>
           
              
        
        </TableRow>
      ))}
    </TableBody>
  </Table>
</TableContainer>



</>
)
}

export default Account;
