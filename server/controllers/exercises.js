const Exercises = require("../database/models/exercises");

module.exports = {
    getExercises: async (req, res) => {
        const exercises = await Exercises.findAll();

        res.status(200).json(exercises);
    },
    addExercise: async (req, res) => {
        const { exercise_type, exercise_title, exercise_description, exercise_image, exercise_points } = req.body;
        const exercise = await Exercises.create({ exercise_type, exercise_title, exercise_description, exercise_image, exercise_points });
        res.status(201).json(exercise);
    },
    updateExercise: async (req, res) => {
        const { exercise_type, exercise_title, exercise_description, exercise_image, exercise_points } = req.body;
        const exercise = await Exercises.update({ exercise_type, exercise_title, exercise_description, exercise_image, exercise_points }, { where: { exercise_id: req.params.exercise_id } });
        res.status(200).json(exercise);
    },
    deleteExercise: async (req, res) => {
        const exercise = await Exercises.destroy({ where: { exercise_id: req.params.exercise_id } });
        res.status(200).json(exercise);
    },
};



