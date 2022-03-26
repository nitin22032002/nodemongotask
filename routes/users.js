const express = require('express');
const router = express.Router();
const verifyToken=require("../middleware/verifyToken")
const generateToken=require("../middleware/generateToken")
const userDb=require("../models/user")

router.get("/get_users",verifyToken,async(req,res)=>{
  try{
      let data=await userDb.find({}).sort({"name":1,"age":1})
      return res.status(200).json({users:data})
  }
  catch(e){
    return res.status(500).json({mag:"Server Error..."})
  }
})

router.post("/add_user",verifyToken,(req,res)=>{
  try{
      let name=req.body.name
      let age=req.body.age
      userDb.create({name,age},(error)=>{
        if(error){
          throw error
        }
        else{
          return res.status(200).json({msg:"User Added...",status:true})
        }
      })
  }
  catch(e){
    return res.status(500).json({mag:"Server Error..."})
  }
})

router.put("/update_user/:id",verifyToken,(req,res)=>{
  try{
    let id=req.params.id
    userDb.findByIdAndUpdate(id,req.body,(error)=>{
      if(error){
        throw(error);
      }
      else{
        res.status(200).json({"msg":"user Updated..",status:true})
      }
    })
  }
  catch(e){
    return res.status(500).json({mag:"Server Error..."})
  }
})

router.delete("/delete_user/:id",verifyToken,(req,res)=>{
  try{
      let id=req.params.id
      userDb.findByIdAndDelete(id,(error)=>{
        if(error){
          throw(error)
        }
        else{
          return res.status(200).json({status:true,msg:"User Deleted..."})
        }
      })
  }
  catch(e){
    return res.status(500).json({mag:"Server Error..."})
  }
})


router.post("/get_cred",(req,res)=>{
  try{
    let data={username:req.body.username}
      let token=generateToken(data)
      return res.status(200).json({token}) 
  }
  catch(e){
    return res.status(500).json({mag:"Server Error..."})
  }
})

module.exports = router;

