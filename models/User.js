const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  email: {
    type: String,
    required: true,
    unique: true,
    trim: true,
    lowercase: true,
  },
  name: {
    type: String,
    required: false,
    unique: false,
    lowercase: true,
  },
  age: {
    type: String,
    required: false,
    default: null,
  },
  sex: {
    type: String,
    required: false,
    default: null,
  },
  image1: {
    type: String,
    required: false,
    default: null,
  },
  image2: {
    type: String,
    required: false,
    default: null,
  },
  image3: {
    type: String,
    required: false,
    default: null,
  },
  image4: {
    type: String,
    required: false,
    default: null,
  },
});

const User = mongoose.model("User", userSchema);

module.exports = User;
