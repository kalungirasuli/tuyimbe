const express = require("express");
const router = express.Router();
const video = require("../controllers/video")
const Video= require('../models/videoShema')
const multer = require("multer");
const {auth,Adminauth}=require('../GenerateTokens')
const storage = multer.diskStorage({
    destination: (req, file, cb)=>{
        cb(null, "./public/files");
    },
    filename:(req, file, cb)=>{
      const name = file.originalname.toString().split(" ").join("_")
        cb(null ,Date.now()+"_"+name);
    },
});
let upload = multer({storage: storage});


router.post("/video",Adminauth,upload.single('video'), video.post);

router.get("/delete/video",Adminauth, video.delete);
router.get("/update/videopage",Adminauth,async(req,res)=>{
    try{
    const data =req.query.id
    const video= await Video.findById({_id:data})
    res.render('updatevideo',{video})
    }catch(err){
        console.log(err)
        res.send("error happend")
    }
    
});

router.post("/update/videos",Adminauth,upload.single('video'), video.put);

module.exports = router;
