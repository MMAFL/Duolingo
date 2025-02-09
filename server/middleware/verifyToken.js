const jwt = require("jsonwebtoken");
const dotenv = require("dotenv");
dotenv.config();

const verifyToken = (req, res, next) => {
  const token = req.cookies.token;

  if (!token) {
    return res.status(401).json({ message: "Unauthorized - no token" });
  }

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);

    if (!decoded) {
      return res.status(401).json({ message: "Unauthorized - invalid token" });
    }

    req.userId = decoded.userId; // userId is treated as a string
    next();
  } catch (error) {
    return res.status(400).json({ message: error.message });
  }
};

module.exports = verifyToken;
