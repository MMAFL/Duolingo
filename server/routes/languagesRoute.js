const express = require('express');
const router = express.Router();
const languageController = require('../controllers/languagesControllers');
const authMiddleware = require('../middleware/authMiddleware');

// Protect routes with authentication middleware
router.get('/', languageController.getAllLanguages);
router.post('/add', authMiddleware, languageController.addUserLanguage);
router.get('/user', authMiddleware, languageController.getUserLanguages);

module.exports = router; 