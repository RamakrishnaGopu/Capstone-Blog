const exp=require('express')
const userApp=exp.Router();
// import the model
const userAuthor=require('../models/userAuthormodel')
const expressAsyncHandler=require('express-async-handler');
const createUserAuthor = require('./createUserAuthor');

// API
userApp.post('/user',expressAsyncHandler(createUserAuthor))

module.exports=userApp;