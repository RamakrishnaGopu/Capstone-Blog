const exp=require('express')
const userApp=exp.Router();
// import the model
const userAuthor=require('../models/userAuthormodel')

userApp.get('/getusers',async(req,res)=>{
    let users=await userAuthor.find();

  res.send({message:"althaf in the user api",payLoad:users})
})

module.exports=userApp;