const User = require("../../Database/Models/Auth/UserDetails");

exports.userSignUp = async (req, res) => {
  const { fullName, newUserName, email, passWord } = req.body;

  const userData = {
    Name: fullName,
    UserName: newUserName,
    Email: email,
    Password: passWord,
  };

  const newUser = new User(userData);

  try {
    const existingUser = await User.findOne({ UserName: newUserName });
    if (existingUser) {
      return res.status(201).json({ message: "Username already exists." });
    }

    const existingEmail = await User.findOne({ Email: email });
    if (existingEmail) {
      return res.status(202).json({ message: "Email already exists." });
    }

    await newUser.save();
    return res.status(200).json({ message: "User has been saved to the database." });
  } catch (error) {
    console.log(error);
    return res.status(400).json({ message: "An error occurred while saving the user." });
  }
};


