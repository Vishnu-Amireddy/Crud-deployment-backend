
const express=require("express");
const studentSchema = require("../model/studentSchema");
const studentRoute=express.Router();

studentRoute.post("/studentlogin",(req,res)=>{
    const {username,password}=req.body;
    const value=studentSchema.findOne({username:username})
    .then(user=>{
        if(user){
            if(user.password===password){
                res.json("Success")
            }else{
                res.json("The password is incorrect")
            }
        }else{
            res.json("No record exists")
        }
    })
    
       
        
    
})
studentRoute.post("/create-student",(req,res)=>{
    studentSchema.create(req.body,(err,data)=>{
        if(err)
            return err;
        else{
            res.json(data)
        }      
    })
})



    

studentRoute.get("/",(req,res)=>{
    studentSchema.find((err,data)=>{
        if(err)
            return err;
        else
            res.json(data);
    })

})

module.exports=studentRoute;



