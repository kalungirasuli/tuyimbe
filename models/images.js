const mongoose = require("mongoose");

const images = new mongoose.Schema({
    
    audio: {
        type: String,
        default: null,
    },
    images: {
        type: String,
        default: null,
    },
    description:{
        type:String,
        default:null
    }
   
   
});

module.exports = mongoose.model("imageContent", images);
