require("dotenv").config();
const express = require("express");
const app = express();
const cors = require("cors");
require("./Database/Connection");
const bodyParser = require('body-parser');


const PORT = 4002;

var options = {
  origin: "http://localhost:3000",
  methods: ["GET", "HEAD", "PUT", "PATCH", "POST", "DELETE"],
  preflightContinue: false,
  optionsSuccessStatus: 204
};


// middleware
app.use(express.json());
app.use(bodyParser.json());
app.use(cors(options));



app.listen(PORT,()=>{
    console.log(`Server start at Port No :${PORT}`)
})
