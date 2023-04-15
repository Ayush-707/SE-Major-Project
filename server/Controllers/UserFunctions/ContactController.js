const nodemailer = require('nodemailer');
const emailExistence = require('email-existence');

exports.userCare = async (req, res) => {

    try {
      
      const { name,
              email,
              subject,
              message } = req.body;
  
      
      emailExistence.check(email, function (err, exists) {
        if (err) {
           return res.status(201).json({ message: "Error Checking Email Existence" });
        }
  
        if (!exists) {
            return res.status(202).json({ message: "Invalid Email Address" });
        }
        
        
        const transporter = nodemailer.createTransport({
          service: 'gmail',
          auth: {
            user: process.env.EMAIL, 
            pass: process.env.PASSWORD 
          }
        });
  
        
        const subjectWithPrefix = `[Support Request] ${subject}`;
  
        
        transporter.sendMail({
          from: `"${name}" <${process.env.EMAIL}>`,
          replyTo: email,
          to: "2020csb1071@iitrpr.ac.in",
          subject: subjectWithPrefix, 
          text: message
        });
  
        
        res.status(200).send('Email sent successfully');
      });
    } catch (err) {
      console.error(err);
      res.status(400).send('Server Error');
    }
  };
  