const exp=require('express')
const authorApp=exp.Router();
// import the model
const userAuthor=require('../models/userAuthormodel')

authorApp.get('/',(req,res)=>{
  res.send({message:"in the author of api"})
})

module.exports=authorApp;