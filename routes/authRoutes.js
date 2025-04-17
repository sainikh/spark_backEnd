const express = require("express");
const { login, verify, getToken } = require("../controllers/authController");

const router = express.Router();

//Login
router.post("/login", login);

//Verifiy
router.post("/verify-login", verify);

//getAcessToken
router.post("/getAccessToken", getToken);

// verify route
// router.post("/verify-token", auth);

module.exports = router;
