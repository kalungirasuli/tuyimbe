const express = require("express");
const {Accessoken,sendAccessToken}=require("../GenerateTokens")
const User = require("../models/userModel");
const Admin=require('../models/adminProfileModel')
const {hash,compare}=require('bcrypt')
module.exports = {
  login:async(req,res)=>{
    try{
        const fields=req.body
        const userHeaders=req.headers
        if(!userHeaders) return res.status(400).json({message:"unauthorized token or token expired"})
        if(!fields.email || !fields.password){
            return res.status(400).json({
                message:"all fields are required"
            })
        }else{
            const check=await User.findOne({email:req.body.email})
            if(!check){
                return res.status(400).redirect('/login')
            }else{
                const comparePassword=await compare(req.body.password,check.password)
                if(!comparePassword){
                    return res.status(400).redirect('/login')
                }else{
                    //generate token from user id
                    
                    const accessToken=  Accessoken(check._id)
                    sendAccessToken(res,accessToken)
                    res.status(301).redirect('/learn')
                  
                  
                  

                  
                }
            }
        }
    }catch(err){
        console.error(err)
    }
},
Adminlogin:async(req,res)=>{
  try{
      const fields=req.body
      const userHeaders=req.headers
      if(!userHeaders) return res.status(400).json({message:"unauthorized token or token expired"})
      if(!fields.email || !fields.password){
          return res.status(400).json({
              message:"all fields are required"
          })
      }else{
          const check= await Admin.findOne({email:req.body.email})
          if(!check){
              return res.status(400).redirect('/login')
          }else{
              const comparePassword= await compare(req.body.password,check.password)
              if(!comparePassword){
                  return res.status(400).redirect('/login')
              }else{
                  //generate token from user id
                  const accessToken=  Accessoken(check._id)
                  sendAccessToken(res,accessToken)
                  res.status(200).redirect('/dashboard')
                
                

                
              }
          }
      }
  }catch(err){
      console.error(err)
  }
},
logout:async(req,res)=>{
    try{
        const cookeicheck=req.headers
        if(!cookeicheck) return res.redirect('login')
        res.clearCookie('access_token',{Path:'/'})
        return res.status(200).redirect('/')
    }catch(err){
        console.error(err)
        res.status(500).json({
            message:"internal server error , please try again later"
        })
    }
},
  signUp: async (req, res) => {
    try {
      const dataUser = req.body;
      const passwordhashed=req.body.password
      const password = await hash(passwordhashed,10);
      const check=await User.findOne({email:req.body.email})
      if(check) return res.status(200).send("User already exists try again later")
      const user = new User({...dataUser,password});
      const data = await user.save();
      res.redirect("login")
    } catch (err) {
      console.error(err);
      res.status(500).json({ error: "An error occurred while signing up." });
    }
  },
  
  loginpage:async (req,res)=>{
    try{
      res.render('login')
    }catch(err){
      res.status(500).send('internal serve error')
    }
  },
  signuppage:async (req,res)=>{
    try{
      res.render('signup')
    }catch(err){
      res.status(500).send('internal serve error')
    }
  }
};


