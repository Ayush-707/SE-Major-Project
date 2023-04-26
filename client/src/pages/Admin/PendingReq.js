import React, { useEffect, useState } from "react";
import { GetAccountReq } from "../../Services/APIs/AdminAPI";
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import Button from '@mui/material/Button';

function PendingReq() {
  const [requests, setRequests] = useState([]);

  useEffect(() => {
    const fetchRequests = async () => {
      console.log('hello');
      const response = await GetAccountReq();
      setRequests(response.data);  
    };
    fetchRequests();
  },[]);

  const handleApprove = async (id) => {
    const response = 0//await ApproveAccountReq(id);
    if (response.status === 200) {
      const updatedRequests = requests.map(req => {
        if (req._id === id) {
          return { ...req, status: "Approved" }
        } else {
          return req;
        }
      });
      setRequests(updatedRequests);
    }
  }

  return (

  <>

{/* <h1 class="text-3xl font-bold mb-4 mt-2 text-center"></h1> */}
    

    <TableContainer component={Paper} sx={{ width: '99.7%', marginLeft: '2px', marginRight: '2px', overflowX: 'auto' }}>
      <Table aria-label="simple table" sx={{ textAlign: 'center' }}>
      <TableHead sx={{ borderBottom: '2px solid white', borderTop: '1px solid', backgroundColor: 'purple' }}>
          <TableRow>
            <TableCell sx={{ color: 'white', fontFamily: 'Bahnschrift SemiBold', fontSize: '20px', textAlign: 'center' }}>NAME</TableCell>
            <TableCell sx={{ color: 'white', fontFamily: 'Bahnschrift SemiBold', fontSize: '20px', textAlign: 'center' }}>PHONE</TableCell>
            <TableCell sx={{ color: 'white', fontFamily: 'Bahnschrift SemiBold', fontSize: '20px', width: '18%', textAlign: 'center' }}>EMAIL</TableCell>
            <TableCell sx={{ color: 'white', fontFamily: 'Bahnschrift SemiBold', fontSize: '20px', width: '25%', textAlign: 'center' }}>ADDRESS</TableCell>
            <TableCell sx={{ color: 'white', fontFamily: 'Bahnschrift SemiBold', fontSize: '20px', textAlign: 'center' }}>DOB</TableCell>
            <TableCell sx={{ color: 'white', fontFamily: 'Bahnschrift SemiBold', fontSize: '20px', textAlign: 'center' }}>TYPE</TableCell>
            <TableCell sx={{ color: 'white', fontFamily: 'Bahnschrift SemiBold', fontSize: '20px', textAlign: 'center' }}>STATUS</TableCell>
            <TableCell sx={{ color: 'white', fontFamily: 'Bahnschrift SemiBold', fontSize: '20px', textAlign: 'center' }}>ACTION</TableCell>

          </TableRow>
      </TableHead>

        <TableBody>
          {requests.map((request, index) => (
            <TableRow key={request._id} className={index % 2 === 0 ? "bg-gray-200" : ""}>
              <TableCell sx = {{textAlign: 'center'}}>{request.name}</TableCell>
              <TableCell sx = {{textAlign: 'center'}}>{request.phone}</TableCell>
              <TableCell sx = {{textAlign: 'center'}}>{request.email}</TableCell>
              <TableCell sx = {{textAlign: 'center'}}>{request.address}</TableCell>
              <TableCell sx = {{textAlign: 'center'}}>{request.dob}</TableCell>
              <TableCell sx = {{textAlign: 'center'}}>{request.accountType}</TableCell>
              <TableCell sx = {{textAlign: 'center'}}>{request.status}</TableCell>
              <TableCell sx = {{textAlign: 'center'}}>
            {request.status === 'Pending' ? 
              <>
                <Button variant="contained" color="primary" onClick={() => handleApprove(request._id)}>Approve</Button>
                <Button variant="contained" color="secondary" sx={{ marginLeft: '5px' }}>Reject</Button>
              </>
              :
              <Button variant="contained" disabled>Already {request.status}</Button>
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

export default PendingReq;





