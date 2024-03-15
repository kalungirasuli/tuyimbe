const mongoose = require("mongoose");

const adminSchema = new mongoose.Schema({
  firstName: {
    type: String,
    required:true
  },
  lastName: {
    type: String,
    required:true
  },
  residence: {
    type: String,
    required:true
  },
  email: {
    type: String,
    required:true
  },
  password:{
    type:String,
    required:true
  },
  role: {
    type: String,
    default: "Admin",
  },
});

module.exports = mongoose.model("Admin", adminSchema);
