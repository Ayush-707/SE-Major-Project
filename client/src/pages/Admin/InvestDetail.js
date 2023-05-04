import React, { useEffect, useState } from "react";
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



function InvestDetail() {
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
  
  function generatePDF() {
    const doc = new jsPDF();
    fetch('https://akm-img-a-in.tosshub.com/aajtak/images/story/201502/iit_ropar_650_022415062015.jpg?size=948:533')
  .then(response => response.blob())
  .then(blob => {
    const imgUrl = URL.createObjectURL(blob);
    const imageWidth = 46;
    const imageHeight = 26;
    const xPos = 10;
    const yPos = 10;
    const pageWidth =
    doc.internal.pageSize.width || doc.internal.pageSize.getWidth();

    doc.addImage(imgUrl, 'PNG', xPos, yPos, imageWidth, imageHeight);

    doc.setFontSize(16);
    doc.setFont("helvetica", "bold");
    doc.text("Indian Institute of Technology, Ropar", pageWidth / 2, 16, {
      align: "center"
    });
  
    doc.setFontSize(14);
    doc.setFont("helvetica", "normal");
    doc.text("Rupnagar,Punjab-140001", pageWidth / 2, 22, { align: "center" });
    doc.text("Tele:+91-1881-235101, email:cs@iitrpr.ac.in", pageWidth / 2, 28, { align: "center" });
    doc.setLineWidth(0.5);
    doc.line(10, 38, pageWidth - 10, 38);
    doc.setFontSize(12);
    doc.setFont("helvetica", "bold");
    doc.text("ACHIEVEMENTS LIST", pageWidth / 2, 45, {
      align: "center"
    });
    doc.setLineWidth(0.2);
    doc.line(85, 46, pageWidth - 85, 46);
    doc.setFont("helvetica", "bold");
    doc.text("Student Name", 20, 60);
    doc.text(":", 70, 60);
    doc.setFont("helvetica", "normal");
    doc.text("Vishwas Rathi", 72, 60);
    doc.setFont("helvetica", "bold");
    doc.text("Student Email", 20, 65);
    doc.text(": ", 70, 65);
    //doc.setFont("helvetica", "normal");
    //doc.text(email, 72, 65);
    doc.setFont("helvetica", "bold");
    doc.text("Student Programme", 20, 70);
    doc.text(": ", 70, 70);
    doc.setFont("helvetica", "normal");
    doc.text("PhD, CSE", 72, 70);
    
    const columns = [['Name', 'Phone', 'Email', 'Address', 'Type', 'Amount', 'Status']];
   // const filteredData = data.filter(item => item.student_name === email);
   const rows = [];
//const rows = filteredData.map(user=>[user.achievements,user.date,user.shared_with,user.status]);
    doc.autoTable({
      head: columns,
      body: rows,
      startY: 80,
    });
    doc.save('my-document.pdf');

    // add image to PDF here
  });
  }



  




  return (

  <>

      
  <ToastContainer />
  
  <button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-1 px-3 rounded-full" onClick={generatePDF}>Generate PDF</button>
    <TableContainer component={Paper} sx={{ width: '99.7%', marginLeft: '2px', marginRight: '2px', overflowX: 'auto' }}>
      <Table aria-label="simple table" sx={{ textAlign: 'center' }}>
      <TableHead sx={{ borderBottom: '2px solid white', borderTop: '1px solid', backgroundColor: 'purple' }}>
          <TableRow>
            <TableCell sx={{ color: 'white', fontFamily: 'Bahnschrift SemiBold', fontSize: '20px', width: '10%', textAlign: 'center' }}>NAME</TableCell>
            <TableCell sx={{ color: 'white', fontFamily: 'Bahnschrift SemiBold', fontSize: '20px', textAlign: 'center' }}>PHONE</TableCell>
            <TableCell sx={{ color: 'white', fontFamily: 'Bahnschrift SemiBold', fontSize: '20px', width: '10%', textAlign: 'center' }}>EMAIL</TableCell>
            <TableCell sx={{ color: 'white', fontFamily: 'Bahnschrift SemiBold', fontSize: '20px', width: '20%', textAlign: 'center' }}>ADDRESS</TableCell>
           
            <TableCell sx={{ color: 'white', fontFamily: 'Bahnschrift SemiBold', fontSize: '20px', textAlign: 'center' }}>TYPE</TableCell>
            <TableCell sx={{ color: 'white', fontFamily: 'Bahnschrift SemiBold', fontSize: '20px', textAlign: 'center' }}>Amount</TableCell>
            <TableCell sx={{ color: 'white', fontFamily: 'Bahnschrift SemiBold', fontSize: '20px', textAlign: 'center' }}>STATUS</TableCell>
            <TableCell sx={{ color: 'white', fontFamily: 'Bahnschrift SemiBold', fontSize: '20px', textAlign: 'center' }}>ACTION</TableCell>

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
              <TableCell sx = {{textAlign: 'center', fontFamily: 'Verdana'}}>{request.status}</TableCell>
              <TableCell sx = {{textAlign: 'center', fontFamily: 'Verdana'}}>
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

export default InvestDetail;





