const express = require('express');
const router = express.Router();
const gems = require('../controllers/gems');

router.get('/', gems.getGems);
router.post('/', gems.addGems);
router.put('/:id', gems.updateGems);
router.delete('/:id', gems.deleteGems);

module.exports = router;
