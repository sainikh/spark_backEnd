const {
  uploadImage,
  cloudinary,
} = require("../services/ImageUtils/imageUtils");

const imageUpload = async (req, res) => {
  try {
    const imageUpload = await uploadImage(req);
    res.status(200).json({ imageUpload });
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

const removeImage = async (req, res) => {
  const { public_id } = req.body;
  if (!public_id)
    return res.status(400).json({ error: "public_id is required" });

  try {
    const result = await cloudinary.uploader.destroy(public_id);

    if (result.result !== "ok") {
      return res
        .status(404)
        .json({ error: "Image not found or already deleted" });
    }

    res.status(200).json({
      message: "Image deleted successfully",
      result,
    });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

module.exports = { imageUpload, removeImage };
