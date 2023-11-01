const mongoose = require("mongoose")
// const passportLocalMongoose = require("passport-local-mongoose")
// const bcrypt = require("bcrypt");
const logInModel = mongoose.Schema({
   
    email:{
        type:String,
        trim:true,
        default:null
    },
    fullName:{
        type: String,
        trim:true,
        default:null
    },
    password:{
        type:String,
        trim:true,
        default:null
    },
    userGroup:{
        type:String,
        trim:true,
        default:null
    }
})

// logInModel.plugin(passportLocalMongoose,);
module.exports = mongoose.model('User',logInModel);