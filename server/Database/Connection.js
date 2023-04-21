const mongoose = require("mongoose");
mongoose.set('strictQuery', true);
const DB = process.env.DATABASE;

mongoose.connect(DB,{
  useUnifiedTopology: true,
  useNewUrlParser: true
}).then (() => console.log("DB connected"))
.catch((error) =>{
  console.log("error",error);
})


/*const mongoose = require("mongoose");
mongoose.set("strictQuery", true);
const DB1 = process.env.DATABASE1;
const DB2 = process.env.DATABASE2;

mongoose
  .connect(DB1, {
    useUnifiedTopology: true,
    useNewUrlParser: true,
  })
  .then(() => {
    console.log("DB1 connected");
  })
  .catch((error) => {
    console.log("DB1 error", error);
  });

mongoose
  .connect(DB2, {
    useUnifiedTopology: true,
    useNewUrlParser: true,
  })
  .then(() => {
    console.log("DB2 connected");
  })
  .catch((error) => {
    console.log("DB2 error", error);
  });
 */