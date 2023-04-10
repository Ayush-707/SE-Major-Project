const User = require("../../Database/Models/Auth/UserDetails");

exports.userLogin = async (req, res) => {

    const{userName,pass} = req.body;

    // const userData = {
    //     userName: userName,
    //     password: pass
    // };

    try {
        const usernameExists = await User.findOne({UserName: userName});
        const passwordExists = await User.findOne({Password: pass});

        if (!usernameExists) {
            return res.status(201).json({message: "Username does not exists"});

        } else if (!passwordExists) {
            return res.status(202).json({message: "Password is incorrect"});
        } else {
            return res.status(200).json({message: "User Login Successful"});
        }
    } catch (error) {
        console.log(error);
        return res.status(400).json({message: "An error occured while trying to login"});
    }
};
