const User = require("../../Database/Models/Auth/UserDetails");

exports.userSignUp = async (req, res) => {
  const { fullname, newUserName, Email, passWord } = req.body;

  const userData = {
    Name: fullname,
    UserName: newUserName,
    Email: Email,
    Password: passWord,
  };

  const newUser = new User(userData);

  try {
    const existingUser = await User.findOne({ UserName: newUserName });
    if (existingUser) {
      return res.status(460).json({ message: "Username already exists." });
    }

    const existingEmail = await User.findOne({ Email: Email });
    if (existingEmail) {
      return res.status(461).json({ message: "Email already exists." });
    }

    await newUser.save();
    return res.status(200).json({ message: "User has been saved to the database." });
  } catch (error) {
    console.log(error);
    return res.status(400).json({ message: "An error occurred while saving the user." });
  }
};

exports.userLogin = async (req, res) => {};
