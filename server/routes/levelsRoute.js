const express = require('express');
const router = express.Router();
const levels = require('../controllers/levelsController');

router.get('/', levels.getLevels);
router.post('/', levels.createLevel);
router.put('/:id', levels.updateLevel);
router.delete('/:id', levels.deleteLevel);

module.exports = router;
