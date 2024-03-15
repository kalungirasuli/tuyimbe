const express = require("express");
const Profile = require("../models/adminProfileModel");
const User=require('../models/userModel')
const VideoContent=require('../models/comments')
const Images=require('../models/images')
const Videos=require('../models/videoShema')
const {auth}=require('../GenerateTokens')
const bcrypt=require('bcrypt')
module.exports = {
  Adminsignuppage:async(req,res)=>{
    try{
      res.render('adminsignup')
    }catch(err){
      res.send('server error')
    }
  },
  comments:async(req,res,auth)=>{
    try{
        const messages=await VideoContent.find()
        res.status(200).render('comments',{messages})
    }catch(err){
        res.status(500).send("The data is not retrived due server error")
    }
},
pannel:async(req,res)=>{
    try{
        res.status(200).render('pannel')
    }catch(err){
        res.status(500).send("The data is not retrived due server error")
    }},
update:async(req,res)=>{
        try{
            res.render('update')
        }catch(err){
            res.status(500).send("failed to update")
        }
    },
  post: async (req, res) => {
    try {
      const admin = new Profile(req.body);
      await admin.save();
      res.status(200).send("Successfully added Admin");
    } catch (error) {
      res.status(500).send("Failed to Post DATA ");
    }
  },
  AdminSignup: async (req,res) => {
    try {
      const check= await Profile.find()
       if(check.length>0) return res.redirect('login')
      const dataUser = req.body;
      const saltRounds = 10;
      const password = await bcrypt.hash(req.body.password, saltRounds);
      const user = new Profile({...dataUser,password});
      const data = await user.save();
      res.redirect("login")
    } catch (err) {
      console.error(err);
      res.status(500).json({ error: "An error occurred while signing up." });
    }
  },
  AdminUpdateProfile: async (req, res) => {
    try {
      const { id } = req.params; // Assuming the admin ID is passed in the request parameters
      const { email, password } = req.body;
  
      // Find the admin by ID
      let admin = await Profile.findById(id);
      if (!admin) {
        return res.status(404).json({ error: "Admin not found" });
      }
  
      // Update the admin's email if provided
      if (email) {
        admin.email = email;
      }
  
      // Update the admin's password if provided
      if (password) {
        const hashedPassword = await hash(password, 10);
        admin.password = hashedPassword;
      }
  
      // Save the updated admin data
      admin = await admin.save();
  
      // Respond with success message
      res.status(200).json({ message: "Admin profile updated successfully", admin });
    } catch (err) {
      console.error(err);
      res.status(500).json({ error: "An error occurred while updating admin profile" });
    }
  }
,  
  get: async (req, res) => {
    try {
      const user = await User.find();
      const image= await Images.find()
      const video= await Videos.find()
      res.status(200).render('dashboard',{user,image,video});
    } catch (error) {
      res.status(500).send("failed to retrieve admins");
    }
  },
  delete: async (req, res) => {
    try {
      await User.findOneAndDelete({ _id: req.params.id });
      res.status(200).send("successfully deleted admin record");
    } catch (error) {
      res.status(500).send("failed to delete admin details");
    }
  },
};
