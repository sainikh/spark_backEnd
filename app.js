const express = require("express");
const bodyParser = require("body-parser");
const dotenv = require("dotenv");
const connectDB = require("./config/db");
const userRoutes = require("./routes/userRoutes");
const authRoutes = require("./routes/authRoutes");
// const swaggerDocs = require("./swagger/swaggerDocs");

dotenv.config();

const app = express();

// Middleware
app.use(bodyParser.json());

// Routes
app.use("/api/auth", authRoutes);

app.use("/api/users", userRoutes);

// swaggerDocs(app);
// Connect to MongoDB
connectDB();

module.exports = app;
