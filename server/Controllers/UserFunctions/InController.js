const InvestAccount = require("../../Database/Models/InModel");
const UserDetails = require("../../Database/Models/UserDetails");

exports.investAccount = async (req, res) => {
  try {
    console.log(req.body);
    // Validate request body fields
    const { name, phone, email, accountType, amount, address, city, pin, state } = req.body;
   
    if (!phone || typeof phone !== "string" || phone.length !== 10 || !/^[0-9]+$/.test(phone)) {
      return res.status(201).json({ message: "Invalid phone number" });
    }    

    if (!amount || typeof amount !== "string" || !/^[1-9]\d*$/.test(amount)) {
      return res.status(201).json({ message: "Invalid Amount" });
    }
    
   
    if (!pin || typeof pin !== "string" || pin.length !== 6 || !/^[0-9]+$/.test(pin)) {
      return res.status(203).json({ message: "Invalid PIN Code" });
    }
   
    // Check if email exists in UserDetails collection
    const userDetails = await UserDetails.findOne({ Email:email });
    if (!userDetails) {
      return res.status(204).json({ message: "Signup Needed for Entered Email" });
    }

    // Create new account 
    const account = new InvestAccount({
      name,
      phone,
      email,
      accountType,
      amount,
      address: `${address}, ${city}, ${pin}, ${state}`,
     
    });

    await account.save(); // save the new account to the database
    
    res.status(200).json({ message: "Account created successfully" });
  } catch (error) {
    console.error(error);
    res.status(400).json({ message: "Internal server error" });
  }
};
