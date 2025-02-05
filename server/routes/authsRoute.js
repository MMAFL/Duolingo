const express = require('express');
const router = express.Router();
const authController = require('../controllers/AuthController');

// Register route
router.post('/register', authController.register);

// Other routes
router.post('/login', authController.login);
router.post('/logout', authController.logout);
router.post('/refresh-token', authController.refreshToken);

module.exports = router; 