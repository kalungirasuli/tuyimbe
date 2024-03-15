const mongoose = require("mongoose")
// const passportLocalMongoose = require("passport-local-mongoose")
// const bcrypt = require("bcrypt");
const logInModel = mongoose.Schema({
   
    email:{
        type:String,
        trim:true,
        required:true
    },
    fullName:{
        type: String,
        trim:true,
        required:true
    },
    password:{
        type:String,
        trim:true,
        required:true
    },
    role:{
        type:String,
        default:"user"
    },
   
})

module.exports = mongoose.model('User',logInModel);