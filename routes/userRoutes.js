const express = require("express");
const { login } = require("../controllers/userController");

const router = express.Router();

// Login route
router.post("/login", login);

module.exports = router;
