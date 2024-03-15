const express = require('express');
const multer = require('multer');
const path = require('path');
const app = express();
const Upload=require('../models/images')

module.exports = {

  post:
  ( async(req, res) => {
 
    try {
      const description = req.body.description;
      const audiopaths = req.files['audio'].map(file => file.path);
      const imagepaths = req.files['image'].map(file => file.path);
      const imagedata= imagepaths.map(image=>`${image}`).toString()
      const audiodata= audiopaths.map(audio=>`${audio}`).toString()
      const pathimage=`/`+ imagedata.split(`\\`)[1]
      const pathaudio=`/`+ audiodata.split(`\\`)[1]
      console.log(pathaudio)
      const data = {
        image: pathimage,
        audio: pathaudio,
        description: description,
      };
      const uploading= await  Upload(data);
      await uploading.save();
      res.status(201).redirect('/dashboard');
      console.log(`File uploaded! ${uploading}`);
      
    } catch (err) {
      res.status(400).send('Error uploading file!');
      console.error(err);
      console.log('Error uploading file!'); 
    }

  }),
  getpage: async (req, res) => {
    try {
     
      res.render('pannel')
    } catch (error) {
      res.status(500).send("Failed to retrive page for uploading");
    }
  },

  
  put: async (req, res) => {
    try {
      const description = req.body.description;
      const audiopaths = req.files['audio'].map(file => file.path);
      const imagepaths = req.files['image'].map(file => file.path);
      const imagedata= imagepaths.map(image=>`${image}`).toString()
      const audiodata= audiopaths.map(audio=>`${audio}`).toString()
      const pathimage=`/`+ imagedata.split(`\\`)[1]
      const pathaudio=`/`+ audiodata.split(`\\`)[1]
      console.log(description)
      console.log(pathaudio)
      const data = {
        image: pathimage,
        audio: pathaudio,
        description: description,
      };
      console.log(data);
      console.log(data)
      const content = await Upload.findOneAndUpdate(
        { _id: req.query.id },
        {...data},
        { new: true }
      );
      console.log(content)
      await content.save()
      const saved=await Upload.findOne({_id:req.query.id})
      console.log(saved)
      res.status(200).redirect('/dashboard');
    } catch (error) {
      console.log(error)
      res.status(500).send("failed to update materials");
    }
  },
  delete:async(req,res)=>{
    try{
      await Upload.findOneAndDelete({_id:req.query.id})
      res.status(200).redirect('/dashboard')
    }catch(err){
      console.log(err)
      res.send('error occured when deleting image')
    }
  }

};