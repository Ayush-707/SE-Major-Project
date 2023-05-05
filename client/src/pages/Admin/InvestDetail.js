import React, { useEffect, useState,  } from "react";
import {GetInvest} from "../../Services/APIs/AdminAPI";
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import Button from '@mui/material/Button';

import jsPDF from 'jspdf';
import 'jspdf-autotable';


function InvestDetail() {
  

  const [requests, setRequests] = useState([]);
 
  useEffect(() => {
    const fetchRequests = async () => {
      const response = await GetInvest();
      setRequests(response.data);  
    };
    fetchRequests();
  },[]);

  
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
  
  
  

  return (

  <>

      


  <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'column' }}>

  <div style={{ marginTop: '20px' }}>
    <Button variant="contained" color="primary" onClick={() => generatePdf()}>Generate PDF</Button>
  </div>
</div>
<br></br>

                                <TableContainer 
                                    component={Paper} 
                                    sx={{ 
                                      width: '75%', 
                                      marginLeft: '190px', 
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
            <TableCell sx={{ color: 'white', fontFamily: 'Bahnschrift SemiBold', fontSize: '18px', width: '', textAlign: 'center' }}>NAME</TableCell>
            <TableCell sx={{ color: 'white', fontFamily: 'Bahnschrift SemiBold', fontSize: '18px', width: '', textAlign: 'center' }}>PHONE</TableCell>
            <TableCell sx={{ color: 'white', fontFamily: 'Bahnschrift SemiBold', fontSize: '18px', width: '', textAlign: 'center' }}>EMAIL</TableCell>
            <TableCell sx={{ color: 'white', fontFamily: 'Bahnschrift SemiBold', fontSize: '18px', width: '', textAlign: 'center' }}>ADDRESS</TableCell>
           
            <TableCell sx={{ color: 'white', fontFamily: 'Bahnschrift SemiBold', fontSize: '18px', width: '', textAlign: 'center' }}>TYPE</TableCell>
            <TableCell sx={{ color: 'white', fontFamily: 'Bahnschrift SemiBold', fontSize: '18px', width: '', textAlign: 'center' }}>Amount</TableCell>
           

          </TableRow>
      </TableHead>

        <TableBody>
          {requests.map((request, index) => (
            <TableRow key={request._id} className={index % 2 === 0 ? "bg-gray-300" : ""}>
              <TableCell sx = {{textAlign: 'center',fontSize: '14px', fontFamily: 'Verdana'}}>{request.name}</TableCell>
              <TableCell sx = {{textAlign: 'center',fontSize: '14px', fontFamily: 'Verdana'}}>{request.phone}</TableCell>
              <TableCell sx = {{textAlign: 'center',fontSize: '14px', fontFamily: 'Verdana'}}>{request.email}</TableCell>
              <TableCell sx = {{textAlign: 'center',fontSize: '14px', fontFamily: 'Verdana'}}>{request.address}</TableCell>
              
              <TableCell sx = {{textAlign: 'center',fontSize: '14px', fontFamily: 'Verdana'}}>{request.accountType}</TableCell>
              <TableCell sx = {{textAlign: 'center',fontSize: '14px', fontFamily: 'Verdana'}}>{request.amount}
            
          
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
           