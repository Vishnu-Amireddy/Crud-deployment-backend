const express=require("express");
const teacherSchema = require("../model/teacherSchema");
const teacherRoute=express.Router();
const app=express();

teacherRoute.post("/teacherlogin",(req,res)=>{
    const {username,password}=req.body;
    const value=teacherSchema.findOne({username:username})
    .then(user=>{
        if(user){
            if(user.password===password){
                res.json("Success")
            }else{
                res.json("The password is incorrect")
                alert("Incorrect Password")
            }
        }else{
            res.json("No record exists")
        }
    })



teacherRoute.get("/",(req,res)=>{
    teacherSchema.find((err,data)=>{
        if(err)
            return err;
        else
            res.json(data);
    })

})
})



module.exports=teacherRoute;