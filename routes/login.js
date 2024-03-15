const express=require('express')
const router=express.Router()
const Login=require('../controllers/loginControllers')

router.post('/login', Login.login)
router.post('/Adminlogin', Login.Adminlogin)
router.get('/logout',Login.logout)
router.post('/signup',Login.signUp)
router.get('/login',Login.loginpage)
router.get('/signup',Login.signuppage)
router.get('/Adminsignup',async(req,res)=>{
  res.status(200).render("adminsignup")  
})

module.exports=router