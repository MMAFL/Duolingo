const express = require('express');
const router = express.Router();
const lessonsController = require('../controllers/lessonsControllers');

router.get('/level/:levelId', lessonsController.getLessonsByLevel);
router.post('/:lessonId/start', lessonsController.startLesson);
router.post('/:lessonId/complete', lessonsController.completeLesson);

module.exports = router; 