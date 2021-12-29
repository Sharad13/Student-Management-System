
const express=require("express")
const Router=express.Router()

const User=require("../models/user.model")

Router.post("",async function(req,res){
    try{
  const user=await User.create(req.body)
  console.log(user)
  return res.status(200).json({user})
    }
    catch(err){
        return res.status(400).json({error:"error"})  
    }
})

Router.get("",async function(req,res){
    try{
        console.log("1")
  const user=await User.find().lean().exec()
  console.log(user)
    return res.status(200).json({user})
    }
    catch(err){
        return res.status(400).json({error:"error"})  
    }
})
Router.get("/sortedByName",async function(req,res){
    try{
        console.log("1")
  const user=await User.find({}).sort([["name",-1]]).lean().exec()
  console.log(user)
    return res.status(200).json({user})
    }
    catch(err){
        return res.status(400).json({error:"error"})  
    }
})

Router.get("/sortedByAge",async function(req,res){
    try{
        console.log("1")
  const user=await User.find({}).sort([["age",1]]).lean().exec()
  console.log(user)
    return res.status(200).json({user})
    }
    catch(err){
        return res.status(400).json({error:"error"})  
    }
})

Router.delete("/:id",async function(req,res){
    try{
        console.log("1")
  const user=await User.findByIdAndDelete(req.params.id)
  console.log(user)
    return res.status(200).json({user})
    }
    catch(err){
        return res.status(400).json({error:"error"})  
    }
})

module.exports=Router