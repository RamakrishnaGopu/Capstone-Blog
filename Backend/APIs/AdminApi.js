const exp=require('express')
const adminApp=exp.Router();
// import the model
const admin=require('../models/adminModel')

adminApp.get('/getadminDetails',async(req,res)=>{
    const adminsList=await admin.find();
  res.send({message:"admin in the api",payLoad:adminsList})
})

module.exports=adminApp;