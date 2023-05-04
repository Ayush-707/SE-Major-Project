const Investments = require("../../Database/Models/investModel");
const UserDetails = require("../../Database/Models/UserDetails");

 

// Handle form submission, const
 exports.createInvestment = async (req, res) => {
  try {
    // Extract form data from request body
    const { userID, phoneNo, fundType, investmentAmount, duration } = req.body;

  if (!phoneNo || typeof phoneNo !== "string" || phoneNo.length !== 10 || !/^[0-9]+$/.test(phoneNo)) {
      return res.status(201).json({ message: "Invalid phone number" });
    }
     // Check if email exists in UserDetails collection
     const userDetails = await UserDetails.findOne({ Email:email });
     if (!userDetails) {
       return res.status(204).json({ message: "Signup Needed for Entered Email" });
     }

    // Create a new investment record in the database
   // const investForms= await Investments.create({
      const investForms= new Investments({
      userID,
      phoneNo,
      fundType,
      investmentAmount,
      duration
    });
    await investForms.save(); // save the new account request to the database

    // Send a success response
    res.status(201).json({ message: "Form submitted successfully" });
  } catch (error) {
    // Send an error response
    res.status(500).json({ error: 'Failed to create investment' });
  }
};

//module.exports = { createInvestment };
