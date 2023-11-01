const mongoose = require("mongoose");

const videos = new mongoose.Schema({
    
    comment: {
        type: String,
        default: null,
    },
   videoid:{
    type:String,
    required:true
   },
   userId:{
    type:String,
    required:true
   }
   
});

module.exports = mongoose.model("videoContent", videos);
