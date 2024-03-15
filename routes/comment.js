const express = require("express");
const router = express.Router();
const Comment= require("../controllers/comment");
const {auth,Adminauth}=require('../GenerateTokens')

router.post("/comment",auth, Comment.post);
router.get("/comment",Adminauth, Comment.get);

module.exports = router;
