const { loginUser, getUser } = require("../services/userServices");
const jwtToken = require("../services/jwtTokenSerives");
const oAuth = require("../services/oAuth");
const User = require("../models/User");

// Register / Login user
const login = async (req, res) => {
  try {
    const { token } = req.body;
    const auth = await oAuth.verifyToken(token);
    if (!auth) {
      res.status(200).json({ message: "Invalid Token" });
    } else {
      const user = await loginUser(auth.email, auth.name);
      const clientToken = await jwtToken.generateToken(user);

      res.status(200).json({
        message: "Login successful",
        token: clientToken,
      });
    }
  } catch (error) {
    res.status(401).json({ message: error.message });
  }
};

const getUserDetails = async (req, res) => {
  try {
    const { email } = req.email;
    const user = await getUser(email);
    res.status(200).json({ user: user });
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

const updateUser = (req, res) => {
  try {
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

module.exports = { login, getUserDetails, updateUser };
