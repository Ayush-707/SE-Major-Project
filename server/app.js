require("dotenv").config();
const express = require("express");
const app = express();
const cors = require("cors");
require("./Database/Connection");
const bodyParser = require('body-parser');
const router = require("./Routes/Auth/AuthRoute");
const PORT = 4002;



// middleware
app.use(express.json());
app.use(cors());
app.use(router);
app.use(bodyParser.json());


app.listen(PORT,()=>{
    console.log(`Server start at Port No :${PORT}`)
})
