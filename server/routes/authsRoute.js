const express = require('express');
const router = express.Router();
const authController = require('../controllers/AuthController');
const authMiddleware = require("../middleware/authMiddleware");

// Register route
router.post('/register', authController.register);

// Other routes
router.post('/login', authController.login);
router.post('/logout',authMiddleware, authController.logout);
router.post('/refresh-token', authController.refreshToken);

module.exports = router; 