const AccountRequest = require("../../Database/Models/AccountRequests");
const UserDetails = require("../../Database/Models/UserDetails");

exports.userNewAccountRequest = async (req, res) => {
  try {
    console.log(req.body);
    // Validate request body fields
    const { name, phone, dob, userName, accountType, street, city, pin, state } = req.body;
   
    if (!phone || typeof phone !== "string" || phone.length !== 10 || !/^[0-9]+$/.test(phone)) {
      return res.status(201).json({ message: "Invalid phone number" });
    }
    if (!dob || isNaN(new Date(dob).getTime())) {
      return res.status(202).json({ message: "Invalid date of birth" });
    }
   
    
   
    if (!pin || typeof pin !== "string" || pin.length !== 6 || !/^[0-9]+$/.test(pin)) {
      return res.status(203).json({ message: "Invalid PIN Code" });
    }
   
    // Check if username exists in UserDetails collection
    const userDetails = await UserDetails.findOne({ UserName:userName });
    if (!userDetails) {
      return res.status(204).json({ message: "User Name does not exists" });
    }

    // Create new account request
    const accountRequest = new AccountRequest({
      name,
      phone,
      dob,
      userName,
      accountType,
      address: `${street}, ${city}, ${pin}, ${state}`,
      status: "Pending", // set initial status to "pending"
    });

    await accountRequest.save(); // save the new account request to the database
    
    res.status(200).json({ message: "Account request created successfully" });
  } catch (error) {
    console.error(error);
    res.status(400).json({ message: "Internal server error" });
  }
};
