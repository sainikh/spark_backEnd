const User = require("../models/User");

//Check if user Exists
const doesUserExists = async (email) => {
  const user = await User.findOne({ email });
  if (!user) {
    return false;
  } else {
    return user;
  }
};

// Register / Login user
const loginUser = async (email, name) => {
  const user = await doesUserExists(email);
  if (!user) {
    const user = new User({ email, name });
    await user.save();
    return user;
  } else {
    return user;
  }
};

module.exports = { loginUser };
