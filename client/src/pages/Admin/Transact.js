






import React, { useEffect, useState,  } from "react";
import {accA} from "../../Services/APIs/UserAPI";
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







function Transact() {
  

  const [requests, setRequests] = useState([]);
 
  useEffect(() => {
    const fetchRequests = async () => {
      const response = await accA();
      setRequests(response.data);  
    };
    fetchRequests();
  },[]);



  const generatePdf = () => {
    const doc = new jsPDF('p', 'pt', 'letter');
    const tableRows = [];
    const headers = ['Sender', 'Reciever', 'Sender Acc. No.', 'Reciever Acc. No.', 'Amount', 'Date'];
  
    requests.forEach(request => {
      const row = [request.sender, request.receiver, request.senderaccnum, request.receiveraccnum, request.amount, request.date];
      tableRows.push(row);
    });
  
    // Set font size and center align the heading
    doc.setFontSize(18);
    doc.setTextColor(0, 0, 0); // Set text color to blue
    doc.text('Transaction History of Users', doc.internal.pageSize.width / 2, 80, { align: 'center' });
  
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
    doc.save('Transactions.pdf');
  }
  
  

  return (

  <>

      


  <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'column' }}>

  <div style={{ marginTop: '20px' }}>
    <Button variant="contained" color="primary" onClick={() => generatePdf()}>Download PDF</Button>
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
        
      }}>
                  <TableRow>
            <TableCell sx={{ color: 'white', fontFamily: 'Bahnschrift SemiBold', fontSize: '18px', width: '', textAlign: 'center' }}>Sender</TableCell>
            <TableCell sx={{ color: 'white', fontFamily: 'Bahnschrift SemiBold', fontSize: '18px', width: '', textAlign: 'center' }}>Reciever</TableCell>
            <TableCell sx={{ color: 'white', fontFamily: 'Bahnschrift SemiBold', fontSize: '18px', width: '', textAlign: 'center' }}>Sender Acc. No.</TableCell>
            <TableCell sx={{ color: 'white', fontFamily: 'Bahnschrift SemiBold', fontSize: '18px', width: '', textAlign: 'center' }}>Reciever Acc. No.</TableCell>
            <TableCell sx={{ color: 'white', fontFamily: 'Bahnschrift SemiBold', fontSize: '18px', width: '', textAlign: 'center' }}>Amount</TableCell>
            <TableCell sx={{ color: 'white', fontFamily: 'Bahnschrift SemiBold', fontSize: '18px', width: '', textAlign: 'center' }}>Date</TableCell>
            
           

           

          </TableRow>
      </TableHead>

        <TableBody>
          {requests.map((request, index) => (
            <TableRow key={request._id} className={index % 2 === 0 ? "bg-gray-300" : ""}>
              <TableCell sx = {{textAlign: 'center',fontSize: '14px', fontFamily: 'Verdana'}}>{request.sender}</TableCell>
              <TableCell sx = {{textAlign: 'center',fontSize: '14px', fontFamily: 'Verdana'}}>{request.receiver}</TableCell>
              <TableCell sx = {{textAlign: 'center',fontSize: '14px', fontFamily: 'Verdana'}}>{request.senderaccnum}</TableCell>
              <TableCell sx = {{textAlign: 'center',fontSize: '14px', fontFamily: 'Verdana'}}>{request.receiveraccnum}</TableCell>
              <TableCell sx = {{textAlign: 'center',fontSize: '14px', fontFamily: 'Verdana'}}>{request.amount}</TableCell>
              <TableCell sx = {{textAlign: 'center',fontSize: '14px', fontFamily: 'Verdana'}}>{request.date}</TableCell>
              
        
        </TableRow>
      ))}
    </TableBody>
  </Table>
</TableContainer>



</>
)
}

export default Transact;
