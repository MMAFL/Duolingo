const db = require("../models/index.js");
const Lesson = db.Lesson;

exports.createLesson = async (req, res) => {
  try {
    const { title, unitId, order } = req.body;

    if (!title || !unitId) {
      throw new Error("All fields are required");
    }

    const lesson = await Lesson.create({ title, unitId, order });

    return res.status(201).json(lesson);
  } catch (error) {
    return res.status(400).json({ message: error.message });
  }
};

exports.getLessons = async (req, res) => {
  try {
    const { unitId } = req.params;
    const lessons = await Lesson.findAll({ where: { unitId } });

    return res.status(200).json(lessons);
  } catch (error) {
    return res.status(400).json({ message: error.message });
  }
};
