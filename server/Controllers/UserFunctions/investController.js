



const Investment = require("../../Database/Models/investModel");

// Handle form submission
const createInvestment = async (req, res) => {
  try {
    // Extract form data from request body
    const { userID, phoneNo, fundType, investmentAmount, duration } = req.body;

    // Create a new investment record in the database
    const investment = await Investment.create({
      userID,
      phoneNo,
      fundType,
      investmentAmount,
      duration
    });

    // Send a success response
    res.status(201).json({ investment });
  } catch (error) {
    // Send an error response
    res.status(500).json({ error: 'Failed to create investment' });
  }
};

module.exports = { createInvestment };
