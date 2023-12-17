import mongoose from "mongoose"
mongoose.connect("mongodb://127.0.0.1:27017/admin")
.then(
    ()=>{console.log("connected")}
)
.catch(()=>{console.log("err")})
const userschmea= mongoose.Schema({
     email:String,
     password:String
})
const collection = new mongoose.model('data',userschmea)


collection.insertMany({name:"mail",password:"1222"})