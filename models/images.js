const mongoose = require("mongoose");

const uploads = new mongoose.Schema({
    
    audio: {
        type: String,
        required:true,
    },
    image: {
        type: String,
        required:true,
    },
    description:{
        type:String,
        required:true
    },
   
   
});

module.exports = mongoose.model("Upload", uploads);
