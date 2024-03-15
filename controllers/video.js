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
            const pathvideo=video.split(`\\`)
            const genpath='/'+pathvideo[1]+'/'+pathvideo[2]
           
            const data={
                description,
                video:genpath
            }
            const videos = await Video(data);
            await videos.save();
            res.status(200).redirect('/dashboard');
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
      try{  

        const description=req.body.description
        const videopath= req.file.path
        const video= videopath
        const pathvideo=video.split(`\\`)
        const genpath='/'+pathvideo[1]+'/'+pathvideo[2]
       
        const data={
            description,
            video:genpath
        }
            const updatedVideo = await Video.findOneAndUpdate(
            {_id:req.query.id},
            {...data},
            {new: true}
        );
        console.log(updatedVideo)
       await updatedVideo.save()
        res.status(200).redirect('/dashboard');
    } catch(error){
        console.log(error)
        res.status(500).send({error: "error updating Video"});
    }
    },

    delete: async(req,res)=>{
        try{
            console.log(req.query.id)
            await Video.findOneAndDelete({_id: req.query.id});
            res.status(200).redirect('/dashboard')
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