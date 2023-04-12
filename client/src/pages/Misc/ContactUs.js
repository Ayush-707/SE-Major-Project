import React, { useState } from 'react';

const ContactForm = () => {


  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const handleChange = (event) => {
    const { name, value } = event.target;
    const trimmedValue = value.trim(); // Trims spaces at start and end
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: trimmedValue,
    }));
  };
  
  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(formData);
    // add logic for submitting form data
  };

  return (
  <>  

<div className="flex flex-row w-full">
  <div className="w-1/2 pr-6">
    <div className="w-full">
      <img src={process.env.PUBLIC_URL + '/support.avif'} alt="" className="w-full" />
    </div>
  </div>
  <div className="w-1/2">
  <form onSubmit={handleSubmit} className="flex flex-col items-center h-screen" style={{ 
  backgroundImage: `url(${process.env.PUBLIC_URL}/form1.jpg)`,
  backgroundSize: 'cover',
  
}}>
      <h1 className="text-2xl font-bold text-gray-800 text-center mb-2 mt-4">Contact Us</h1>
      <div className="w-1/2">
        <label htmlFor="name" className="block text-gray-700 font-bold mb-2">
          Name
        </label>
        <input
          type="text"
          name="name"
          value={formData.name}
          onChange={handleChange}
          className="w-full shadow appearance-none border rounded py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline italic::placeholder"
          placeholder="Enter your name"
          required
        />
      </div>
      <div className="w-1/2 mt-4">
        <label htmlFor="email" className="block text-gray-700 font-bold mb-2">
          Email
        </label>
        <input
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          className="italic::placeholder w-full shadow appearance-none border rounded py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          placeholder="Enter your email"
          required
        />
      </div>
      <div className="w-1/2 mt-4">
        <label htmlFor="subject" className="block text-gray-700 font-bold mb-2">
          Subject
        </label>
        <input
          type="text"
          name="subject"
          value={formData.subject}
          onChange={handleChange}
          className="italic::placeholder w-full shadow appearance-none border rounded py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          placeholder="Enter subject"
          required
        />
      </div>
      <div className="w-1/2 mt-4">
        <label htmlFor="message" className="block text-gray-700 font-bold mb-2">
          Message
        </label>
        <textarea
          name="message"
          value={formData.message}
          onChange={handleChange}
          className="italic::placeholder w-full shadow appearance-none border rounded py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          placeholder="Enter your message"
          rows="5"
          required
        />
      </div>
      <div className="mt-4">
        <button
          type="submit"
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
        >
          Submit
        </button>
      </div>
    </form>
    
  </div>
</div>


  </>
  );
};

export default ContactForm;
