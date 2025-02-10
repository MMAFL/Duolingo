const db = require("../models/index.js");
const { Question, Lesson } = db;

exports.createQuestion = async (req, res) => {
  try {
    const { type, data, lessonId } = req.body;

    if (!type || !data || !lessonId) {
      throw new Error("All fields are required");
    }

    const question = await Question.create({ type, data, lessonId });

    const lesson = await Lesson.findOne({ where: { id: lessonId } });
    if (lesson) {
      lesson.questions.push(question.id);
      await lesson.save();
    }

    return res.status(201).json(question);
  } catch (error) {
    return res.status(400).json({ message: error.message });
  }
};

exports.getQuestionsByLessonId = async (req, res) => {
  try {
    const { lessonId } = req.params;
    const questions = await Question.findAll({ where: { lessonId } });

    return res.status(200).json(questions);
  } catch (error) {
    return res.status(400).json({ message: error.message });
  }
};
