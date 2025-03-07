const { registerUser, loginUser } = require("../services/userServices");

// Register a new user
const register = async (req, res) => {
  try {
    const { email, password } = req.body;
    const user = await registerUser(email, password);
    res.status(201).json({ message: "User registered successfully", user });
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

// Login user
const login = async (req, res) => {
  try {
    const { email, password } = req.body;
    const user = await loginUser(email, password);
    res.status(200).json({ message: "Login successful", user });
  } catch (error) {
    res.status(401).json({ message: error.message });
  }
};

module.exports = { register, login };
