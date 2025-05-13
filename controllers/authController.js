const { verifyToken } = require("../services/oAuth");
const jwt = require("jsonwebtoken");
require("dotenv").config();
const CLIENT_ID = process.env.GOOGLE_CLIENT_ID;
const { OAuth2Client } = require("google-auth-library");
const client = new OAuth2Client(CLIENT_ID);

const login = async (req, res) => {
  try {
    const user = {
      userId: "1",
      email: email,
      userName: userName,
    };

    const access_token = jwt.sign(user, process.env.JWT_SECRET, {
      expiresIn: "5m",
    });

    const refresh_token = jwt.sign(user, process.env.JWT_SECRET, {
      expiresIn: "1h",
    });

    res
      .status(200)
      .json({ acessToken: access_token, refresh_token: refresh_token });
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

const verify = async (req, res) => {
  try {
    const authHeader = req.headers.authorization;
    if (!authHeader || !authHeader.startsWith("Bearer ")) {
      res.status(400).json({ error: "Unauthorized" });
    }
    const token = authHeader.split(" ")[1];
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    res.status(200).json({ message: "success", userData: decoded });
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

const getToken = async (req, res) => {
  try {
    const { refreshToken } = req.body;
    const user = jwt.decode(refreshToken, process.env.JWT_SECRET);

    const newUser = {
      userId: user.userId,
      email: user.email,
      userName: user.userName,
    };
    const access_token = jwt.sign(newUser, process.env.JWT_SECRET, {
      expiresIn: "1h",
    });
    res.status(200).json({ access_token: access_token });
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

const auth = async (req, res) => {
  try {
    const { tokenId } = req.body;
    const result = await verifyToken(tokenId);
    if (!result) {
      res.status(400).json({ message: "User is not authorised " });
    }

    res.status(200).json({ message: "Got token " + result });
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

module.exports = { auth, login, verify, getToken };
