const mongoose = require("mongoose");

const videos = new mongoose.Schema({
    
    video: {
        type: String,
        required:true,
    },
    description:{
        type:String,
        required:true
    },
   
   
});

module.exports = mongoose.model("Video", videos);
