const express=require("express");
const parentSchema = require("../model/parentSchema");
const parentRoute=express.Router();




parentRoute.post("/parentlogin",(req,res)=>{
    const {username,password}=req.body;
    const value=parentSchema.findOne({username:username})
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



parentRoute.get("/",(req,res)=>{
    parentSchema.find((err,data)=>{
        if(err)
            return err;
        else
            res.json(data);
    })

})



module.exports=parentRoute;