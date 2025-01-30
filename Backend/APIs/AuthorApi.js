const exp=require('express')
const authorApp=exp.Router();
// import the model
const userAuthor=require('../models/userAuthormodel');
const expressAsyncHandler=require('express-async-handler')
const createUserAuthor = require('./createUserAuthor');
const Article=require('../models/ArticleModel')

authorApp.post('/author',expressAsyncHandler(createUserAuthor))
// create new article 
authorApp.post('/article',expressAsyncHandler(async(req,res)=>{
  const newArticleObj=req.body;
  const newArticle=new Article(newArticleObj)
  await newArticle.save();
  res.send({meassage:newArticle})
}))
authorApp.get('/articles',expressAsyncHandler(async(req,res)=>{
  const listOfArticles=await Article.find();
  res.status(200).send({message:"done",payLoad:listOfArticles});
}))


module.exports=authorApp;