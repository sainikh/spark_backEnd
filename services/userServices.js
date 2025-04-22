const User = require("../models/User");

// Register a new user
const registerUser = async (email, name) => {
  console.log("userName : " + name);
  const user = new User({ email, name });
  await user.save();
  return user;
};

// Login user
const loginUser = async (email, userName) => {
  const user = await User.findOne({ email });
  if (!user) {
    throw new Error("User not found");
  }
  // const isMatch = await user.compareEmail(email);
  // if (!isMatch) {
  //   throw new Error("Invalid credentials");
  // }
  return user;
};

module.exports = { registerUser, loginUser };
