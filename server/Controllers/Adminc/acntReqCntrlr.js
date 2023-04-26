// controllers/depositController.js
const AccountRequest = require("../../Database/Models/AccountRequests");

exports.sendTableData = async (req, res) => {
  try {
    const tableData = await AccountRequest.find();
    res.status(200).json(tableData);
  } catch (error) {
    console.error(error);
    res.status(400).json({ error: "Internal Server Error" });
  }
};

