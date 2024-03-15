const express =require('express')
const router= express.Router()
const Admin =require('../controllers/admin')
const {auth,Adminauth}=require('../GenerateTokens')
router.get('/Adminsignup',Admin.Adminsignuppage)
router.post('/Adminsignup',Admin.AdminSignup)
router.get('/comments',Adminauth,Admin.comments)
router.get('/dashboard',Adminauth,Admin.get)
router.get('/pannel',Adminauth,Admin.pannel)
router.get('/update',Adminauth,Admin.update)
router.post('/updatefiles',Adminauth,async(req,res)=>{
    res.render('update')
})




module.exports=router