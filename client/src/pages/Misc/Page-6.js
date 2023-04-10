import React from 'react'
import { Form, Button } from 'react-bootstrap';


function Page6() {

    const styles = {
        width:"300px",
        border:"none",
        borderRadius: "10px",
        background:"transparent",
        boxShadow: "0px 0px 5px rgba(0, 0, 0, 0.3), 0px 0px 10px rgba(0, 0, 0, 0.2)"
    }
 
  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gray-100">
      <h1 className="text-2xl font-bold text-gray-800 text-center mb-2" >Contact Us</h1>
      <Form>
        <Form.Group controlId="formBasicName" className="mb-4" >
          
          <Form.Control style={styles} type="text" placeholder="Enter your name" />
        </Form.Group>

        <Form.Group controlId="formBasicEmail" className="mb-4">
          
          <Form.Control style={styles} type="email" placeholder="Enter your email" />
        </Form.Group>

        <Form.Group controlId="formBasicSubject" className="mb-4">
          
          <Form.Control style={styles} type="text" placeholder="Enter subject" />
        </Form.Group>

        <Form.Group controlId="formBasicMessage" className="mb-4">
          
          <Form.Control style={{...styles, height: '150px'}} as="textarea" rows={1} placeholder="Enter your message" />
        </Form.Group>

        
        <div className="flex justify-center">
                    <button type="submit" className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-700 focus:outline-none focus:bg-blue-700">
                    Submit
                    </button>
                </div>
      </Form>
    </div>
  )
}

export default Page6