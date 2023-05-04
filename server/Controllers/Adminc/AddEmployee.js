const employee = require("../../Database/Models/EmployeeDetails");

exports.adminAdd = async (req, res) => {

    const{fullName, email} = req.body;
    //console.log(fullName, email);

    try {
        const emailExists = await employee.findOne({Email: email});
        

        if (emailExists) {
            return res.status(201).json({message: "Employee Email already exists"});

        } else {
            const min = 1000000000; 
            const max = 9999999999;
            const empty = "";
            let ID = Math.floor(Math.random() * (max - min + 1)) + min;
            const addition = new employee({
               
                Name: fullName,
                EmployeeID: ID,
                Email: email,
                oneTimePass: empty
            
              });
          
            await addition.save();
            return res.status(200).json({message: "Employee Added Successfully"});
        }
    } catch (error) {
        console.log(error);
        return res.status(400).json({message: "An error occured"});
    }
};
