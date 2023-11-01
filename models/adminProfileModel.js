const mongoose = require("mongoose");

const adminSchema = new mongoose.Schema({
  firstName: {
    type: String,
    default: null,
  },
  lastName: {
    type: String,
    default: null,
  },
  residence: {
    type: String,
    default: null,
  },
  email: {
    type: String,
    default: null,
  },
  role: {
    type: String,
    default: "Admin",
  },
});

module.exports = mongoose.model("Admin", adminSchema);
