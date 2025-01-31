const exp=require('express')
const userApp=exp.Router();
// import the model
const userAuthor=require('../models/userAuthormodel')
const expressAsyncHandler=require('express-async-handler');
const createUserAuthor = require('./createUserAuthor');
const Article=require('../models/ArticleModel')

// API
userApp.post('/user',expressAsyncHandler(createUserAuthor))

// add comment 
userApp.put('/comment/:articleId',expressAsyncHandler(async(req,res)=>{
    const getComment=req.body;
    console.log(getComment,req.params.articleId)
    const articleWithComment=await Article.findOneAndUpdate({articleId:req.params.articleId},{$push:{comments:getComment}},{returnOriginal:false})
    res.status(200).send({message:"comment added",payLoad:articleWithComment})
}))

module.exports=userApp;