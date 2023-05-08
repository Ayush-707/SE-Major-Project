import React, { useState } from "react";
import { useNavigate } from 'react-router-dom';
import {InvestAccount} from '../../Services/APIs/UserAPI';
import toast, { Toaster } from 'react-hot-toast';

function Funding() {


  const [formData, setFormData] = useState({
    
    name: '',
    phone: '',
    email: '',
    accountType:'',
    amount:'',
    address:'',
    city: '',
    pin:'',
    state:'',
  });
  const navigate = useNavigate();

  // const [isLoading, setIsLoading] = useState(false);

  const handleChange = (event) => {
    const { name, value } = event.target;
    const trimmedValue = value.trim(); 
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: trimmedValue,
    }));
  };

  const handleSubmit = async (event) => {
    event.preventDefault();


    console.log(formData);
    // console.log(1453);
    // add logic for submitting form data

    const response = await InvestAccount(formData);
    console.log(response.body);
    if (response.status === 201 ) {
      
      toast.error("Invalid Phone Number!", {
        autoClose: 2000,
        hideProgressBar: true,
        pauseOnHover: false,
      });

    }  else if(response.status === 202)
    {

      toast.error("Invalid Amount!", {
        autoClose: 2000,
        hideProgressBar: true,
        pauseOnHover: false,
      });

    }
    
    
    
    else if(response.status === 203) {
      toast.error("Invalid PIN Code!", {
        autoClose: 2000,
        hideProgressBar: true,
        pauseOnHover: false,
        
      });
    } else if (response.status === 204) {
      toast.error("Web Account is needed for the Entered Email ID to open a Investment Account!", {
        autoClose: 2000,
        hideProgressBar: true,
        pauseOnHover: false,
        
      });
    } else if (response.status === 400) {
      toast.error("Internal Server Error!", {
        autoClose: 2000,
        hideProgressBar: true,
        pauseOnHover: false,
        
      });
    }
    else {
      setTimeout(() => {
        navigate("/User/Home")
      }, 2000)
      
      toast.success("Investment Account Created Successfully", {
        autoClose: 2000,
        hideProgressBar: true,
        pauseOnHover: false,
        style: {
          background: "#4BB543",
          color: "#fff",
          borderRadius: "8px",
          fontWeight: "bold",
          border: "none",
          boxShadow: "0px 0px 10px rgba(0,0,0,0.2)",
        },
      });
      
    }

    // setIsLoading(false);

  };




  const styles = {
    form: {
      
      display: 'flex',
      flexDirection: 'column',
     
      maxWidth: '700px',
      margin: '20px auto',
      padding: '20px',
      //border: '1px solid #ccc',
      borderRadius: '5px',
      backgroundColor: 'white',
      boxShadow: '0 2px 2px rgba(0, 0, 0, 0.3)',
    },
    label: {
      fontSize: '16px',
     // fontWeight: 'bold',
      //marginBottom: '10px',
      //marginLeft: '2px'
      
    },
    input: {
      padding: '10px',
      marginBottom: '20px',
      border: '1px solid #ccc',
      borderRadius: '5px',
      fontSize: '16px',
      width: '100%',
    boxSizing: 'border-box',
      ':focus': {
        outline: 'none',
        border: '1px solid #3B82F6',
        boxShadow: '0 0 2px #3B82F6',
      },
     
    },
    select: {
      padding: '10px',
      marginBottom: '20px',
      border: '1px solid #ccc',
      borderRadius: '5px',
      fontSize: '16px',
      width: '100%',
     boxSizing: 'border-box',
    },
    button: {
      padding: '10px 20px',
      backgroundColor: '#547CBE',
      color: 'white',
      border: 'none',
      borderRadius: '5px',
      fontSize: '18px',
      fontStyle: 'Bahnschrift SemiBold',
      cursor: 'pointer',
      boxShadow: '0 2px 2px rgba(0, 0, 0, 0.3)',
      transition: 'background-color 0.3s ease',
    },
   hover: {
     backgroundColor: 'white',
    }
  };
  


  return (
  <>
    <Toaster position="top-right"
  reverseOrder={false}/>
  
        <form style={styles.form} onSubmit={handleSubmit}>
        <h1 className="text-2xl font-semibold mb-6">Open Investment Account</h1>
          <label htmlFor="name" style={styles.label}>Name:</label>
          <input style = {styles.input} type="text" id="name" name="name" placeholder="Enter Your Name" 
          value={formData.name} onChange={handleChange} required />
          
          <label htmlFor="phone" style={styles.label}>Phone:</label>
          <input style = {styles.input} type="tel" id="phone" name="phone" placeholder="Enter Your Phone Number" 
           value={formData.phone} onChange={handleChange} required/>

        


          <label htmlFor="email" style={styles.label}>Email:</label>
          <input style = {styles.input} type="email" id="email" name="email" placeholder="Enter Your E-mail" 
          value={formData.email} onChange={handleChange} required/>

          <label htmlFor="accountType" style={styles.label}>Account Type:</label>
          <select style={styles.select} id="accountType" name="accountType" 
          value={formData.accountType} onChange={handleChange} required >
            <option value="">Select Account Type</option>
            <option value="Equity">Equity</option>
            <option value="Debt">Debt</option>
            <option value="Hybrid">Hybrid</option>

          </select>

          <label htmlFor="amount" style={styles.label}>Amount:</label>
          <input style = {styles.input} type="number" id="amount" name="amount" placeholder="Enter Amount" 
          value={formData.amount} onChange={handleChange} required />


          <label htmlFor="address" style={styles.label}>Address:</label>
          <input style = {styles.input} type="text" id="address" name="address" placeholder="Enter Your Address" 
          value={formData.address} onChange={handleChange} required/>

          <label htmlFor="city" style={styles.label}>City:</label>
          <input style = {styles.input} type="text" id="city" name="city" placeholder="Enter Your City" 
          value={formData.city} onChange={handleChange} required />

          <label htmlFor="pin" style={styles.label}>PIN Code:</label>
          <input style = {styles.input} type="text" id="pin" name="pin" placeholder="Enter Your PIN-CODE" 
          value={formData.pin} onChange={handleChange} required/>

          <label htmlFor="state" style={styles.label}>State:</label>
          <input style = {styles.input} type="text" id="state" name="state" placeholder="Enter Your State" 
          value={formData.state} onChange={handleChange} required/>
          
          <button style = {styles.button} className="hover:bg-blue-700" type="submit">Submit</button>
        </form> 

    </>
  )
}

export default Funding
