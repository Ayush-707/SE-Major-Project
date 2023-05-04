const User = require("../../Database/Models/EmployeeDetails");
const nodemailer = require('nodemailer');

exports.login = async (req, res) => {

    const{myEmail} = req.body;

    

    try {
        const emailExists = await User.findOne({Email: myEmail});
        //const passwordExists = await User.findOne({Password: pass});

        if (!emailExists) {
            return res.status(201).json({message: "Email does not exists"})
        } else {
            
            return res.status(200).json({message: "OTP Sent"})
        }
    } catch (error) {
        console.log(error);
        return res.status(400).json({message: "An error occured while trying to login"});
    }
};

exports.otpValidation = async (req, res) => {
    const { myEmail } = req.body;
  
    try {
      // Generate OTP
      const min = 1000;
      const max = 9999;
      const myOTP = Math.floor(Math.random() * (max - min + 1)) + min;
      const myOTPString = myOTP.toString();
     // console.log(myOTPString);
  
      // Update database with OTP
      await User.findOneAndUpdate({ Email: myEmail }, { oneTimePass: myOTPString });
  
      // Send email with OTP
      const transporter = nodemailer.createTransport({
        service: "gmail",
        auth: {
            user: process.env.EMAIL,
            pass: process.env.PASSWORD
        }
      });
  
      const mailOptions = {
        from: `"Nichirin Bank" <${process.env.EMAIL}>`,
        to: myEmail,
        subject: 'OTP for Employee Login',
        text: `Your OTP is: ${myOTPString}`,
      };
  
      await transporter.sendMail(mailOptions);
  
      return res.status(200).json({ message: 'OTP Sent' });
    } catch (error) {
      console.error(error);
      return res.status(400).json({ message: 'An error occurred while trying to login' });
    }
  };

  exports.checkoneTimePass = async (req, res) => {
   
    try {

       // console.log(req.query)
        const {email,otp} = await req.query
        //console.log(email,otp);
        const myEmail = email;
        
        const validOTP = await User.findOne({Email: myEmail,oneTimePass: otp});
        console.log(validOTP);
        if (!validOTP) {
            return res.status(201).json({message: 'Invalid OTP'})
        } else {

            await User.findOneAndUpdate({ Email: myEmail }, { oneTimePass: "" });
            return res.status(200).json({message: 'Valid OTP'});
        }
    
    } catch (error) {
        console.log(error)
        return res.status(400).json({message: 'Server Error'});
    }
    
  }