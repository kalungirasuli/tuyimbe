const express= require('express')
const router=express.Router()
const controller=require('../controllers/data')
const {auth}=require('../GenerateTokens')
const Images=require('../models/images')
const Video=require('../models/videoShema')
router.get('/',async(req,res)=>{
    try{
        const image=await Images.find()
        const video=await Video.find()
        res.render('index',{image,video})
    }catch(err){
        res.send('internal server error')
    }
})
router.get('/learn',auth,controller.get)

module.exports=router