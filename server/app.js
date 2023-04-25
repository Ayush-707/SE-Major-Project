require("dotenv").config();
const express = require("express");
const app = express();
const cors = require("cors");
require("./Database/Connection");
const bodyParser = require('body-parser');
const router = require("./Routes/Auth/AuthRoute");
const router2 = require("./Routes/UserFunctions/UserRoute");
const router3 = require("./Routes/UserFunctions/RequestAccountRoute");
const withdrawRoutes=require("./Routes/Adminr/withdrawRoute");
const PORT = 4002;



// middleware
app.use(express.json());
app.use(cors());
app.use('/api', router);
app.use(router);
app.use('/api', router2);
app.use(router2);
app.use('/api/new-account', router3);
app.use(router3);
app.use("/api/withdraw",withdrawRoutes);
app.use(bodyParser.json());

app.listen(PORT,()=>{
    console.log(`Server start at Port No :${PORT}`)
})
