const authController = require('../controllers/AuthController');
const authMiddleware = require("../middleware/authMiddleware");
const express = require("express");
const router = express.Router();
const { register, login, logout } = require("../controllers/AuthController");

// Public routes
router.post("/register", register);
router.post("/login", login);

// Protected routes
router.post("/logout", logout);

module.exports = router; 