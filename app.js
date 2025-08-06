const express = require("express");
const dotenv = require("dotenv");
const connectDB = require("./configuration/connection")
const path = require("path");


// load env variable
dotenv.config();

//connected to mongo db
connectDB();


// create a express app
const app = express();

// set the  view engine
app.set('view engine','ejs');
app.set('views',path.join(__dirname,'views')); // optional

// set the static folder
app.use(express.static(path.join(__dirname,'public')));

const port = process.env.PROT || 3000;

app.listen(port, () =>{
    console.log(`app is listen in the port is ${port}`);
})