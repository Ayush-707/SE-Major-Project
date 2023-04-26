require("dotenv").config();
const express = require("express");
const app = express();
const cors = require("cors");
require("./Database/Connection");
const bodyParser = require('body-parser');
const router = require("./Routes/Auth/AuthRoute");
const router2 = require("./Routes/UserFunctions/UserRoute");
<<<<<<< HEAD
const router3 = require("./Routes/UserFunctions/RequestAccountRoute")
const router4 = require("./Routes/UserFunctions/investRoute")
const router5 = require("./Routes/Adminr/withdrawRoute");
const depositRoutes = require("./Routes/Adminr/depositRoute");
=======
const withdrawRoutes=require("./Routes/Adminr/withdrawRoute");
const router3 = require("./Routes/Adminr/AdminRoute");
>>>>>>> 35469099edcfeebdfc100fc294c5e7cce1cec116
const PORT = 4002;



// middleware
app.use(express.json());
app.use(cors());
app.use('/api', router);
app.use(router);
app.use('/api', router2);
app.use(router2);
<<<<<<< HEAD
app.use('/api/new-account', router3);
app.use(router3);
app.use('/api/invest', router4);
app.use(router4);
app.use("/api/withdraw", router5);
app.use(bodyParser.json());
app.use("/api/deposit",depositRoutes);
=======
app.use("/api/withdraw",withdrawRoutes);
app.use('/api',router3);
app.use(router3);
>>>>>>> 35469099edcfeebdfc100fc294c5e7cce1cec116
app.use(bodyParser.json());



app.listen(PORT,()=>{
    console.log(`Server start at Port No :${PORT}`)
})
