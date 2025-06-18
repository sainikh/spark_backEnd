const express = require("express");
const router = express.Router();
const authenticateToken = require("../middleware/authMiddleware");
const upload = require("../services/ImageUtils/memoryUpload");
const { imageUpload, removeImage } = require("../controllers/imageController");

router.post(
  "/uploadImage",
  authenticateToken,
  upload.single("image"),
  imageUpload
);
router.post("/removeImage", authenticateToken, removeImage);

module.exports = router;
