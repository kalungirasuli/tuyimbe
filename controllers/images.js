const express = require('express');
const multer = require('multer');
const path = require('path');
const app = express();
const upload = multer({ dest: 'uploads/' });
const Upload=require('../models/images')

module.exports = {

  post:
  ('/upload', upload.array(['image', 'audio']), async(req, res) => {
    const imageFile = req.files['image'][0];
    const audioFile = req.files['audio'][0];

    const now = new Date();
    const timestamp = now.toISOString().replace(/:/g, '-').replace(/\..+/, '');

    const data = {
      image: `${imageFile.path}-${timestamp}`,
      audio: `${audioFile.path}-${timestamp}`,
      description: req.body.des
    };
  const uploading= await Upload(data)
    try {
      await uploading.save();
      res.status(201).send('File uploaded!');
      console.log('File uploaded!');
    } catch (err) {
      res.status(400).send('Error uploading file!');
      console.log('Error uploading file!'); 
    }

  })

  
 ,

  get: async (req, res) => {
    try {
      const courseMaterial = await Images.find();
      res.status(200).json(courseMaterial);
    } catch (error) {
      res.status(500).send("failed to retrieve the course material");
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