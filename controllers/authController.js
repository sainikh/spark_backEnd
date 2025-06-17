const User = require("../models/User");
const {
  verifyRefreshToken,
  generateAccessToken,
} = require("../services/jwtTokenSerives");
require("dotenv").config();

const getAccessToken = async (req, res) => {
  try {
    const { refreshToken } = req.body;

    const validUser = await verifyRefreshToken(refreshToken);

    if (!validUser) {
      res.status(400).json({ message: "Invalid Token" });
    }

    const user = {
      email: validUser.email,
    };

    const accessToken = await generateAccessToken(user);
    res.status(200).json({ accessToken: accessToken });
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

module.exports = { getAccessToken };
