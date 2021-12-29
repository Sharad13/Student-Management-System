
const express=require("express")
const Router=express.Router()
const jwt=require("jsonwebtoken")
require("dotenv").config()

const newToken=(admin)=>{
    return jwt.sign({id:admin.id},process.env.JWT_SECRET_KEY)
}
const Admin=require("../models/admin.model")

// Router.post("",async function(req,res){
//     try{
//         console.log("1")
//   const admin=await Admin.create(req.body)
//   console.log(admin)
//   return res.status(200).json({admin})
//     }
//     catch(err){
//         return res.status(400).json({error:"error"})  
//     }
// })

Router.post("/login",async function(req,res){
    if(!req.body.username.includes("@masaischool.com")){
        return res.status(400).json({error:"error"})  
    }
    try{
        console.log("2")
  const admin=await Admin.findOne({username:req.body.username}).lean().exec()
     if(admin){
    const token=await newToken(admin)
    return res.status(200).json({admin,token})
     }
     else {
        return res.status(400).json({error:"error"}) 
     }
    }
    catch(err){
        return res.status(400).json({error:"error"})  
    }
})
module.exports=Router