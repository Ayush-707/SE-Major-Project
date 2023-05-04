
const UserInfo = require("../../Database/Models/EmployeeDetails");

exports.getAccountInfoEmp = async (req, res) => {
    try {
        const {user} = req.body;
        const userTableData = await UserInfo.findOne({Email: user});

        const responseData = {userTableData: userTableData};
        res.status(200).json(responseData);
      } catch (error) {
        console.error(error);
        res.status(400).json({ error: "Internal Server Error" });
      }
};
