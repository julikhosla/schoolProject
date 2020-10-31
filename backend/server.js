const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");

const app = express();
app.use(cors());

// parse requests of content-type - application/json
app.use(bodyParser.json());

// parse requests of content-type - application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true }));
app.use((req,res,next)=>{
  res.header("Access-Control-Allow-Origin","*");
  res.header("Access-Control-Allow-Headers",'Origin, X-Requested-With, Content-Type, Accept, Authorization, *');
   if (req.method === 'OPTIONS'){
        res.header('Access-Control-Allow-Methods', 'GET, PUT, POST, PATCH, DELETE, OPTIONS');
        res.setHeader('Access-Control-Allow-Credentials', true);
        return res.status(200).json({});
    }
  next()
})
const db=require('./models');
db.mongoose.connect(
    db.url,{
useNewUrlParser:true,
useUnifiedTopology:true
}).then(()=>{
    console.log('Connected to database!')
}).catch(error=>{
    console.log('cannot connect to database!',error);
    process.exit();
})
// simple route
app.get("/", (req, res) => {
  res.json({ message: "Welcome to juli todolist application." });
});
require("./config/routes/student.routes")(app);
// set port, listen for requests
const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}.`);
});
