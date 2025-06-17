const {
  loginUser,
  getUser,
  doesUserExists,
} = require("../services/userServices");
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

const updateUser = async (req, res) => {
  try {
    const user = req.body.user;
    const userId = req.body.id;

    if (req.email != user.email) {
      res.status(400).json({ message: "email id dosent match" });
    } else {
      const doesExist = doesUserExists(user.email);

      if (!doesExist) {
        res.status(400).json({ message: "Invalid request" });
      }

      const updatedUser = await User.findByIdAndUpdate(userId, user, {
        new: true,
        runValidators: true,
      });

      if (!updatedUser) {
        return res.status(404).json({ message: "User not found" });
      } else {
        res.status(200).json({
          message: "updated user details sucessfully",
          user: updatedUser,
        });
      }
    }
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

module.exports = { login, getUserDetails, updateUser };
