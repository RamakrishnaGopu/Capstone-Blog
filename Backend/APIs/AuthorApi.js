const exp=require('express')
const authorApp=exp.Router();
// import the model
const userAuthor=require('../models/userAuthormodel')

authorApp.get('/getAuthorDetails',async(req,res)=>{
  const authorList=await userAuthor.find();
  res.send({message:"in the author of api",payload:authorList});
})

module.exports=authorApp;