import React, { useState } from "react";
import {RequestNewAccount} from '../../Services/APIs/UserAPI';
import {ToastContainer, toast } from 'react-toastify';

function Page4() {


  const [formData, setFormData] = useState({
    
    name: '',
    phone: '',
    dob: '',
    userName: '',
    accountType:'',
    street:'',
    city: '',
    pin:'',
    state:'',
  });

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

    const response = await RequestNewAccount(formData);
    console.log(response.body);
    if (response.status === 201 ) {
      
      toast.error("Invalid Phone Number!", {
        autoClose: 2000,
        hideProgressBar: true,
        pauseOnHover: false,
      });

    } else if(response.status === 202){
     
      toast.error("Invalid Date of Birth!", {
        autoClose: 2000,
        hideProgressBar: true,
        pauseOnHover: false,
        
      });
    } else if(response.status === 203) {
      toast.error("Invalid PIN Code!", {
        autoClose: 2000,
        hideProgressBar: true,
        pauseOnHover: false,
        
      });
    } else if (response.status === 204) {
      toast.error("Username does not exists!", {
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

      
      toast.success("New Account Requested Has Been Submitted", {
        autoClose: 5000,
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
     
      maxWidth: '800px',
      margin: '20px auto',
      padding: '20px',
      border: '1px solid #ccc',
      borderRadius: '5px',
      backgroundColor: '#f9f9f9',
      boxShadow: '0 2px 2px rgba(0, 0, 0, 0.3)',
    },
    label: {
      fontSize: '18px',
      fontWeight: 'bold',
      marginBottom: '10px',
      marginLeft: '2px'
      
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
        boxShadow: '0 0 3px #3B82F6',
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
      backgroundColor: '#1D4ED8',
    }
  };
  


  return (
  <>
    <ToastContainer />
  
        <form style={styles.form} onSubmit={handleSubmit}>
          <label htmlFor="name" style={styles.label}>Name:</label>
          <input style = {styles.input} type="text" id="name" name="name" value={formData.name} onChange={handleChange} required />
          
          <label htmlFor="phone" style={styles.label}>Phone:</label>
          <input style = {styles.input} type="tel" id="phone" name="phone" value={formData.phone} onChange={handleChange} required/>

          <label htmlFor="dob" style={styles.label}>Date of Birth:</label>
          <input style = {styles.input} type="date" id="dob" name="dob" value={formData.dob} onChange={handleChange} required />

          <label htmlFor="userName" style={styles.label}>User Name:</label>
          <input style = {styles.input} type="text" id="userName" name="userName" value={formData.userName} onChange={handleChange} required/>

          <label htmlFor="accountType" style={styles.label}>Account Type:</label>
          <select style={styles.select} id="accountType" name="accountType" value={formData.accountType} onChange={handleChange} required >
            <option value="">Select Account Type</option>
            <option value="savings">Savings Account</option>
            <option value="current">Current Account</option>
          </select>

          <label htmlFor="street" style={styles.label}>Street Address:</label>
          <input style = {styles.input} type="text" id="street" name="street" value={formData.street} onChange={handleChange} required/>

          <label htmlFor="city" style={styles.label}>City:</label>
          <input style = {styles.input} type="text" id="city" name="city" value={formData.city} onChange={handleChange} required />

          <label htmlFor="pin" style={styles.label}>PIN Code:</label>
          <input style = {styles.input} type="text" id="pin" name="pin" value={formData.pin} onChange={handleChange} required/>

          <label htmlFor="state" style={styles.label}>State:</label>
          <input style = {styles.input} type="text" id="state" name="state" value={formData.state} onChange={handleChange} required/>
          
          <button style = {styles.button} className="hover:bg-blue-700" type="submit">Submit</button>
        </form> 

    </>
  )
}

export default Page4