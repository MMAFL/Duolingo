const express = require('express');
const router = express.Router();
const exercisesController = require('../controllers/exercisesController');

router.get('/', exercisesController.getExercises);
router.post('/', exercisesController.addExercise);
router.put('/:exercise_id', exercisesController.updateExercise);
router.delete('/:exercise_id', exercisesController.deleteExercise);

module.exports = router;
