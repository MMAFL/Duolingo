const express = require('express');
const router = express.Router();
const languageController = require('../controllers/languagesControllers');

router.get('/', languageController.getAllLanguages);
router.post('/add', languageController.addUserLanguage);
router.get('/user', languageController.getUserLanguages);

module.exports = router; 