const express= require('express')
const router=express.Router()
const controller=require('../controllers/data')
const {auth}=require('../GenerateTokens')
const Images=require('../models/images')
const Video=require('../models/videoShema')
router.get('/',async(req,res)=>{
    try{
        const image=await Images.find({category:"myrymes"})
        const video=await Video.find()
        res.render('index',{image,video})
    }catch(err){
        console.log(err)
        res.send('internal server error')
    }
})
router.get('/discover',controller.discover)
router.get('/forum',controller.forum)
router.get('/room',controller.room)
router.get('/learn',auth,controller.get)
router.get('/domestic',controller.dom)
router.get('/bodyparts',auth,controller.body)
router.get('/features',controller.feature)
module.exports=router 