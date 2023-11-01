const mongoose = require("mongoose");

const videos = new mongoose.Schema({
    
    video: {
        type: String,
        default: null,
    },
   
   
});

module.exports = mongoose.model("videoContent", videos);
