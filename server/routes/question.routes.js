const express = require("express");
const {
  createQuestion,
  getQuestionsByLessonId,
} = require("../controllers/question.controller.js");

const router = express.Router();

router.post("/", createQuestion);
router.get("/:lessonId", getQuestionsByLessonId);

module.exports = router;
