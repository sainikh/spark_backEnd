const express = require("express");
const authenticateToken = require("../middleware/authMiddleware");
const {
  login,
  getUserDetails,
  updateUser,
} = require("../controllers/userController");

const router = express.Router();

router.post("/login", login);

router.post("/getUserDetails", authenticateToken, getUserDetails);

router.post("/updateUser", authenticateToken, updateUser);

module.exports = router;
