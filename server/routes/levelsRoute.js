const express = require('express');
const router = express.Router();
const levelsController = require('../controllers/levelsController');

router.get('/', levelsController.getLevels);
router.post('/', levelsController.createLevel);
router.put('/:level_id', levelsController.updateLevel);
router.delete('/:level_id', levelsController.deleteLevel);

module.exports = router;
