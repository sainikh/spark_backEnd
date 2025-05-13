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
    required: true,
    unique: true,
    lowercase: true,
  },
  isRegistered: {
    type: Boolean,
  },
  currentRegStep: {
    type: Number,
    defulat: 0,
  },
});

const User = mongoose.model("User", userSchema);

module.exports = User;
