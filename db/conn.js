
const mongoose  = require("mongoose");
require('dotenv').config();
const DB=process.env.DATABASE;

mongoose.connect(DB,{
    useNewUrlParser:true,
    UseUnifiedTopology:true }).then(()=>console.log("Connection Start")).catch((error)=>console.log(error.message));