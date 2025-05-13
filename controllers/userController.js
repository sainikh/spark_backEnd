const { loginUser } = require("../services/userServices");
const jwtToken = require("../services/jwtTokenSerives");
const oAuth = require("../services/oAuth");

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

module.exports = { login };
