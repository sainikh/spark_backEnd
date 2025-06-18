const express = require("express");
const bodyParser = require("body-parser");
const dotenv = require("dotenv");
const connectDB = require("./config/db");
const userRoutes = require("./routes/userRoutes");
const authRoutes = require("./routes/authRoutes");
const imageRoutes = require("./routes/imageRoutes");

dotenv.config();

const app = express();

// Middleware
app.use(bodyParser.json());

//Defulat
app.get("/", (req, res) => {
  res.send("Spark App");
});

//UserRoute
app.use("/api/users", userRoutes);
app.use("/api/auth", authRoutes);
app.use("/api/image", imageRoutes);

connectDB();

module.exports = app;
