const { verifyAccessToken } = require("../services/jwtTokenSerives");

const authMiddleware = (req, res, next) => {
  const authHeader = req.headers["authorization"];
  const token = authHeader && authHeader.split(" ")[1]; // Bearer <token>

  if (!token) {
    return res.status(401).json({ message: "Access token missing" });
  }

  try {
    const user = verifyAccessToken(token);
    req.email = user.email; // Pass user data to the next handler
    next();
  } catch (error) {
    return res.status(403).json({ message: "Invalid or expired token" });
  }
};

module.exports = authMiddleware;
