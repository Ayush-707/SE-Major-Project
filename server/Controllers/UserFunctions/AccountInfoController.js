const AccountInfo = require("../../Database/Models/userAccounts");
const UserInfo = require("../../Database/Models/UserDetails")

exports.getAccountInfo = async (req, res) => {
    try {
        const {user} = req.body;
        const accountTableData = await AccountInfo.findOne({userName: user});
        const userTableData = await UserInfo.findOne({UserName: user});

        const responseData = {userTableData: userTableData, accountTableData: accountTableData};
        res.status(200).json(responseData);
      } catch (error) {
        console.error(error);
        res.status(400).json({ error: "Internal Server Error" });
      }
};
