const express = require("express");
const router = express.Router();
const Images = require("../controllers/images");
const Imagedata= require('../models/images')
const multer = require("multer");
const {auth,Adminauth}=require('../GenerateTokens')
const storage = multer.diskStorage({
    destination: (req, file, cb)=>{
        cb(null, "./public");
    },
    filename:(req, file, cb)=>{
      const name = file.originalname.toString().split(" ").join("_")
        cb(null ,Date.now()+"_"+name);
    },
});
let upload = multer({storage: storage});
const multplefield=upload.fields([{name:'image'},{name:'audio'}])

router.post("/images",Adminauth,multplefield,Images.post);
router.get('/upload',Adminauth,Images.getpage)
router.get("/update/imagepage",Adminauth,async(req,res)=>{
    try{
    const data =req.query.id
    const image= await Imagedata.findById({_id:data})
    res.render('update',{image})
    }catch(err){
        console.log(err)
        res.send('err occured')
    }
    
});
router.post("/update/image",Adminauth,multplefield, Images.put)
router.get("/delete/image",Adminauth, Images.delete);

module.exports = router;