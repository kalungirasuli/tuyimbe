const express = require("express");
const Images = require("../models/images");
const multer = require("multer");

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "./public/images");
  },
  filename: (req, file, cb) => {
    cb(null, file.originalname);
  },
});

let upload = multer({ storage: storage });

module.exports = {

  post:
    (upload.single("image"),
    async (req, res) => {
      try {
        const courseMaterial = new Images(req.body);
        courseMaterial.image = req.file.originalname;
        await courseMaterial.save();
        res.status(200).send("Successfully added course material");
      } catch (error) {
        res.status(500).send("Failed to Post new Module");
      }
    }),

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