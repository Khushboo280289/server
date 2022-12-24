const mongoose = require("mongoose");

const userschema = new mongoose.Schema({

    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    age: {
        type: String,
        required: true
    },
    mobile: {
        type: Number,
        required: true
    },
    work: {
        type: String,
        required: true
    },
    add: {
        type: String,
        required: true
    },
    desc: {
        type: String,
        required: true
    }}
)

//const users= new mongoose.model("users",userschema);

//module.exports=users;
//module.exports.users=users;
//module.exports = User = mongoose.model('users', userschema);


module.exports=mongoose.model("Users",userschema);
/* module.exports=User=mongoose.model('users',userschema);
console.log(module.exports); */