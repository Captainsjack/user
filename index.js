const express=require("express");
const mongoose=require("mongoose");
const user=require("./model/user");
const fs=require("node:fs");

mongoose.connect("mongodb+srv://captain:captain123@captaincluster.0gv6yer.mongodb.net/userdata").
then(()=>{
    console.log("database connected");
}).catch((e)=>{
    console.log(e);
    console.log('database can not be connected');
})

const app=express();
app.use(express.urlencoded({extended:true}));

const PORT=process.env.PORT || 3000;

app.post("/",async(req,res)=>{
    const userdata=new user(req.body);
    await userdata.save();
    let a=fs.readFileSync("submit.html");
    res.send(a.toString());
})

app.get("/",(req,res)=>{
    let a=fs.readFileSync("index.html");
    res.send(a.toString());
})

app.listen(PORT,()=>{
    console.log("app is rinning successfully");
})