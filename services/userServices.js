const User = require("../models/User");

// Register a new user
const registerUser = async (email, password) => {
  const user = new User({ email, password });
  await user.save();
  return user;
};

// Login user
const loginUser = async (email, password) => {
  const user = await User.findOne({ email });
  if (!user) {
    throw new Error("User not found");
  }
  const isMatch = await user.comparePassword(password);
  if (!isMatch) {
    throw new Error("Invalid credentials");
  }
  return user;
};

module.exports = { registerUser, loginUser };
