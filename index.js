const express = require("express");
const cors =require('cors');

const mongoose=require("mongoose");
const studentRoute=require("./controller/studentRoute");
const teacherRoute=require("./controller/teacherRoute");
const parentRoute=require("./controller/parentRoute");
const app=express();
mongoose.set("strictQuery",true);
mongoose.connect("mongodb+srv://vishnu:12345@cluster0.5wniox1.mongodb.net/schooldb");
var db=mongoose.connection;
db.on("open",()=>console.log("Connected to DB"));
db.on("error",()=>console.log("Error Occured"));

app.use(cors());
app.use(express.json());  
app.use("/studentRoute",studentRoute);
app.use("/teacherRoute",teacherRoute);
app.use("/parentRoute",parentRoute);










app.listen(4000,()=>{
    console.log("Server started at 4000");
})
