const mongoose = require("mongoose");

const videos = new mongoose.Schema({
    
    comment: {
        type: String,
        required:true
    },
   id:{
    type:String,
    required:true
   },
   email:{
    type:String,
    required:true
   },
   time:{
    type:Date,
    default:Date.now()
   }
});

module.exports = mongoose.model("videoContent", videos);
