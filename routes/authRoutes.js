const express = require("express");
const { getAccessToken } = require("../controllers/authController");

const router = express.Router();

//getAcessToken
router.post("/getAccessToken", getAccessToken);

module.exports = router;
