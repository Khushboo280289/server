const { AddAPhotoSharp } = require("@mui/icons-material");
const { appBarClasses } = require("@mui/material");
const { json } = require("express");
const express = require("express");
const userschema = require("../models/userschema");
const Users = require("../models/userschema");
const router = express.Router();
//const app = express();

//app.use("/userscheme",users);
//const users = require("../models/userschema");

/* router.post("/register",(req,rsp)=>{
    console.log(req.body);
}) */

console.log("in Router.js");
router.post("/register",async(req,rsp)=>{
    console.log("in register");
    const{name,email,age,mobile,work,add,desc} = req.body;
    
    if(!name || !email || !age || !mobile || !work ||!add || !desc){
        rsp.status(422).json("please fill the data");
        console.log("please fill the data");
    }
    try{
        console.log("data is already present12")
        const preuser  = await Users.findOne({"email":email})
       // findone({'email':email});
        console.log("data is already present0");
     //   console.log(preuser.name);
        console.log("data is already present1");
        if(preuser){
            rsp.status(422).json("this user is  already present");
            console.log("data is already present");
        }
        else{
            const adduser = new Users({
                name,email,age,mobile,work,add,desc
            });
            console.log("data is not present1");
            await adduser.save();
            rsp.status(201).json(adduser);
            console.log(adduser);
        }
    }
    catch(error){
        console.log("In catch");
        rsp.status(422).json("error")
        //console.log(error);
    }
    })

    //get User Data

    router.get("/getdata",async(req,rsp)=>{
        try{            
            console.log("data is in get data");
            const userdata  = await Users.find();//findOne({"email":email})
            console.log("data is in get data00");
            rsp.status(201).json(userdata);
            console.log("data is in get data01");
            console.log(userdata);
            console.log("data is in get data03");
        }
        catch(error)
        {
            //console.log("error in catch getdata");
            console.log(error);
            rsp.status(422).json(error);
            console.log(error);
        }
       // console.log("data is in get data04");
    })
        //console.log("data is in get data05"); 

        router.get("/getuser/:id",async(req,rsp)=>{
            try{            

                 
                console.log(req.params);
                const {id}= req.params;

                const userindiviual = await Users.find({_id:id});
                console.log(userindiviual);
                rsp.status(201).json(userindiviual)
            }
            catch(error)
            {
                //console.log("error in catch getdata");
                console.log(error);
                rsp.status(422).json(error);
                console.log(error);
            }
        })


        // update user info
        router.patch("/updateuser/:id",async(req,rsp)=>{

            console.log("in router update function");
            try{       
                console.log(req.params);
                const {id}= req.params;

                const updateduser = await Users.findByIdAndUpdate(id,req.body,{
                    new:true
                });
                console.log(updateduser);
                rsp.status(201).json(updateduser)
            }
            catch(error)
            {
                //console.log("error in catch getdata");
                console.log(error);
                rsp.status(422).json(error);
                console.log(error);
            }
        })

         // Delete user
         router.delete("/deleteuser/:id",async(req,rsp)=>{
            try{       
                console.log("in Delete user");
                const {id}= req.params;

                const deleteuser = await Users.findByIdAndDelete({_id:id});
                console.log(deleteuser);
                rsp.status(201).json(deleteuser)
            }
            catch(error)
            {
                //console.log("error in catch getdata");
                console.log(error);
                rsp.status(422).json(error);
                console.log(error);
            }
        })
module.exports = router;


