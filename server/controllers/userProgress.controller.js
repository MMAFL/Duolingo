const db = require("../models/index.js");
const { User, UserProgress, Lesson } = db;

exports.CreateUserProgress = async (req, res) => {
  try {
    const { userId } = req.body;

    if (!userId) {
      throw new Error("User Id is required");
    }

    const progress = await UserProgress.create({ userId });

    return res.status(201).json(progress);
  } catch (error) {
    return res.status(400).json({ message: error.message });
  }
};

exports.UpdateUserProgress = async (req, res) => {
  try {
    const { userId, questionId, lessonId } = req.body;

    if (!userId || !questionId || !lessonId) {
      throw new Error("All fields are required");
    }

    // Find the user
    const user = await User.findOne({ where: { id: userId } });
    if (!user) {
      throw new Error("User not found");
    }

    // Find the lesson
    const lesson = await Lesson.findOne({ where: { id: lessonId } });
    if (!lesson) {
      throw new Error("Lesson not found");
    }

    // Find the user's progress
    const progress = await UserProgress.findOne({ where: { userId } });
    if (!progress) {
      throw new Error("Progress not found");
    }

    // Parse JSON arrays
    let completedQuestions = [];
    let allowedLessons;
    try {
      completedQuestions = JSON.parse(progress.completedQuestions || "[]");
    } catch (error) {
      completedQuestions = [];
    }
    try {
      allowedLessons = JSON.parse(progress.allowedLessons || "[]");
      if (!Array.isArray(allowedLessons)) {
        allowedLessons = [];
      }
    } catch (error) {
      allowedLessons = [];
    }

    // Update user points
    user.point += 10;
    await user.save();

    // Update completedQuestions array
    if (!completedQuestions.includes(questionId)) {
      completedQuestions.push(questionId);
      progress.completedQuestions = JSON.stringify(completedQuestions); // Save as JSON string
      await progress.save();
    }

    // Check if all questions in the lesson are completed
    const lessonQuestions = JSON.parse(lesson.questions || "[]");
    const allQuestionsCompleted = lessonQuestions.every((q) =>
      completedQuestions.includes(q)
    );

    if (allQuestionsCompleted) {
      // Update allowedLessons array
      const nextLesson = allowedLessons.length + 1;
      allowedLessons.push(nextLesson);
      progress.allowedLessons = JSON.stringify(allowedLessons); // Save as JSON string
      await progress.save();

      return res.status(200).json({ lessonCompleted: true, progress });
    }

    return res.status(200).json({ lessonCompleted: false, progress });
  } catch (error) {
    return res.status(400).json({ message: error.message });
  }
};

exports.GetUserProgress = async (req, res) => {
  try {
    const { userId } = req.params;
    if (!userId) {
      throw new Error("User ID is required");
    }

    const progress = await UserProgress.findOne({ where: { userId } });

    return res.status(200).json(progress);
  } catch (error) {
    return res.status(400).json({ message: error.message });
  }
};

exports.decreaseHearts = async (req, res) => {
  try {
    const { userId } = req.body;

    if (!userId) {
      throw new Error("User ID is required");
    }

    const user = await User.findOne({ where: { id: userId } });

    if (!user) {
      throw new Error("User not found");
    }

    user.lifePoint -= 1;
    await user.save();

    return res.status(200).json({
      id: user.id,
      username: user.username,
      email: user.email,
      isAdmin: user.isAdmin,
      gem: user.gem,
      lifePoint: user.lifePoint,
      point: user.point,
      createdAt: user.createdAt,
    });
  } catch (error) {
    return res.status(400).json({ message: error.message });
  }
};

exports.refillHearts = async (req, res) => {
  try {
    const { userId } = req.body;

    if (!userId) {
      throw new Error("User ID is required");
    }

    const user = await User.findOne({ where: { id: userId } });

    if (!user) {
      throw new Error("User not found");
    }

    user.gem -= 50;
    user.lifePoint = 5;
    await user.save();

    return res.status(200).json({
      id: user.id,
      username: user.username,
      email: user.email,
      isAdmin: user.isAdmin,
      gem: user.gem,
      lifePoint: user.lifePoint,
      point: user.point,
      createdAt: user.createdAt,
    });
  } catch (error) {
    return res.status(400).json({ message: error.message });
  }
};

exports.getLeaderboard = async (req, res) => {
  try {
    const usersByPoints = await User.findAll({
      order: [["point", "DESC"]],
    });

    return res.status(200).json(usersByPoints);
  } catch (error) {
    return res.status(400).json({ message: error.message });
  }
};
