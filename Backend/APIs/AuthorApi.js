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
  const listOfArticles=await Article.find({isArticleActive:true});
  res.status(200).send({message:"done",payLoad:listOfArticles});
}))

authorApp.put('/article/:articleId',expressAsyncHandler(async(req,res)=>{
  // get modified article
     const modifiedArticle=req.body;
    // const modifiedArticle=req.params._id;
    //  update article by id
    const latestArticle=await Article.findByIdAndUpdate(modifiedArticle._id,{...modifiedArticle},{returnOriginal:false});
    res.status(200).send({message:"artcile modified",payLoad:latestArticle})
}))

// soft delete the article 
authorApp.put('/articles/:articleId',expressAsyncHandler(async(req,res)=>{
  // get modified article
     const modifiedArticle=req.body;
    //  update article by id
    const latestArticle=await Article.findByIdAndUpdate(modifiedArticle._id,{...modifiedArticle},{returnOriginal:false});
    res.status(200).send({message:"artcile deleted",payLoad:latestArticle})
}))

module.exports=authorApp;