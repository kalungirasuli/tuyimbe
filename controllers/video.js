const express = require('express')
const Video  = require("../models/videoShema.js");
const path= require('path');

module.exports = {

    post:
      async function(req,res){
        try{
            const description=req.body.description
            const videopath= req.file.path
            const video= videopath
            const data={
                description,
                video
            }
            const videos = await Video(data);
            console.log(video)
            await videos.save();
            res.status(200).send("Video added as a successfully");
        }catch (error){
            res.status(500).send("Video cant be added"+" : " +error);
            console.log(error)
          
        }
        
      
},
    get: async(req,res)=>{
        try{
            const Video = await Video.find();
            res.status(200).json(Video);


        } catch (error){
            res.status(500).send("cant find Videos");
        }
    },

    put: async(req,res)=>{
      try{  const updatedVideo = await Video.findOneAndUpdate(
            {id: req.params.id},
            req.body,
            {new: true}
        );
        if (!updatedVideo){
            return res.status(401).send({message:"update didnot happen"});
        }
        res.status(200).send({message: "Video details updated"});
    } catch(error){
        res.status(500).send({error: "error updating Video"});
    }
    },

    delete: async(req,res)=>{
        try{
            await Video.findOneAndDelete({id: req.params.id});
            res.status(200).send('Video deleted')
        } catch(error){
            res.status(500).send("failed to delete Video");
        }
    },
    getdetails: async(req, res)=>{
        try {
            const Video = await Video.findOne({id: req.params.id });
            res.status(200).json(Video);
          } catch (error) {
            res.status(500).send("cannot find Video");
          }
    }
}