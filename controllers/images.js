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
      const data = {
        image: imagedata,
        audio: audiodata,
        description: description,
      };
      console.log(data);
      const uploading= await  Upload(data);
      await uploading.save();
      res.status(201).send('File uploaded!');
      console.log(`File uploaded! ${uploading}`);
      
    } catch (err) {
      res.status(400).send('Error uploading file!');
      console.error(err);
      console.log('Error uploading file!'); 
    }

  })

  
 ,

  get: async (req, res) => {
    try {
     res.render('upload')
      // const courseMaterial = await Images.find();
      // res.status(200).json(courseMaterial;
    } catch (error) {
      res.status(500).send("Failed to retrive page for uploading");
    }
  },

  get2: async (req, res) => {
    try {
      const courseMaterial = await Images.findOne({ _id: req.params.id });
      res.status(200).json(courseMaterial);
    } catch (error) {
      res.status(500).send("failed to find the required course material");
    }
  },

  put: async (req, res) => {
    try {
      const courseMaterial = await Images.findOneAndUpdate(
        { _id: req.params.id },
        req.body,
        { new: true }
      );
      res.status(200).json(courseMaterial);
    } catch (error) {
      res.status(500).send("failed to update course materials");
    }
  },

  delete: async (req, res) => {
    try {
      await Images.findOneAndDelete({ _id: req.params.id });
      res.status(200).send("successfully deleted course material record");
    } catch (error) {
      res.status(500).send("failed to delete course material");
    }
  },
};