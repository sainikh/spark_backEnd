const jwt = require("jsonwebtoken");
require("dotenv").config();

const generateToken = async (user) => {
  const sanatisedUser = {
    name: user.name,
    email: user.email,
  };
  const access_token = jwt.sign(sanatisedUser, process.env.JWT_SECRET, {
    expiresIn: "5m",
  });

  const refresh_token = jwt.sign(sanatisedUser, process.env.JWT_SECRET, {
    expiresIn: "1h",
  });
  return { acessToken: access_token, refresh_token: refresh_token };
};

module.exports = { generateToken };
