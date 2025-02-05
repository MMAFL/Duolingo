const express = require('express');
const router = express.Router();
const gemsController = require('../controllers/gemsController');

router.get('/', gemsController.getGems);
router.post('/', gemsController.addGems);
router.put('/:gem_id', gemsController.updateGems);
router.delete('/:gem_id', gemsController.deleteGems);

module.exports = router;
