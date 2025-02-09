const express = require("express");
const {
  createLesson,
  getLessons,
} = require("../controllers/lesson.controller.js");

const router = express.Router();

router.post("/", createLesson);
router.get("/:unitId", getLessons);

module.exports = router;
