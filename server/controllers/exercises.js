const db = require("../database");
const Exercises = db.Exercise;

module.exports = {
  getExercises: async (req, res) => {
    try {
      const exercises = await Exercises.findAll();
      res.status(200).json(exercises);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  },

  addExercise: async (req, res) => {
    try {
      const {
        exercise_type,
        exercise_title,
        exercise_description,
        exercise_image,
        exercise_points,    
      } = req.body;

      const exercise = await Exercises.create({
        exercise_type,
        exercise_title,
        exercise_description,
        exercise_image,
        exercise_points,
      });
      res.status(201).json(exercise);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  },
  updateExercise: async (req, res) => {
    try {
      const {
        exercise_type,
        exercise_title,
        exercise_description,
        exercise_image,
        exercise_points,
      } = req.body;

      const exercise = await Exercises.update(
        {
          exercise_type,
          exercise_title,
          exercise_description,
          exercise_image,
          exercise_points,
        },
        { where: { exercise_id: req.params.exercise_id } }
      );
      res.status(200).json(exercise);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  },
  deleteExercise: async (req, res) => {
    try {
      const exercise = await Exercises.destroy({
        where: { exercise_id: req.params.exercise_id },
      });
      res.status(200).json(exercise);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  },
};
