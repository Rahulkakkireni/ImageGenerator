import express from 'express'
import cors from 'cors'
import mongoose from 'mongoose'
import axios from 'axios';
const app=express()
app.use(express.json())
app.use(express.urlencoded())
app.use(cors())

mongoose.connect("mongodb://127.0.0.1:27017/admin")
.then(
    ()=>{console.log("connected")}
)
.catch((err)=>{console.log(err)})
const userschmea= mongoose.Schema({
    email:String,
    password:String
})
const collection = new mongoose.model('data',userschmea)

//Routes
app.get("/",(req,res)=>{
    res.send("backend")
})
app.post("/login",async(req,res)=>{
    const{email,password}=req.body;
        console.log(email);
        console.log(password)
    collection.findOne({email:email})
    .then(user =>{
         if(user){
            if(user.email===email && user.password===password){
                res.send("successful")
            }
            else{
                 res.send("failure")
            }
         }
         else{
            res.send("user not found")
         }
    })
    .catch(err=>console.log(err));   
})

  
app.post("/register",async(req,res)=>{
    const{email,password}=req.body;
    console.log(email);
    console.log(password)
    collection.insertMany({email,password})

})
app.listen(3001,()=>{
     console.log("be started at port 3001")
})
