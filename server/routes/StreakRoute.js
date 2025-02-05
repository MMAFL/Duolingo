// routes/streakRoutes.js
const express = require('express');
const router = express.Router();
const streakController = require('../controllers/StreakController');

router.get('/', streakController.getAllStreaks);
router.get('/:id', streakController.getStreakById);
router.post('/', streakController.createStreak);
router.put('/:id', streakController.updateStreak);
router.delete('/:id', streakController.deleteStreak);

module.exports = router;
