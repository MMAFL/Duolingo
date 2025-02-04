// const Sequelize = require("sequelize");
// const sequelize = require("../config/config");

// const User = require("./user.model");
// const Lesson = require("./lesson.model");
// const Language = require("./language.model");
// const Achievement = require("./achievement.model");
// const UserAchievement = require("./userAchievement.model");
// const Progress = require("./progress.model");
// const Question = require("./question.model");
// const Choice = require("./choice.model");
// const LessonsUsers = require("./lessonsUsers.model");
// const LanguageUsers = require("./languageUsers.model");
// const Hearts = require("./hearts.model");
// const Gems = require("./gems.model");
// const Leaderboard = require("./leaderboard.model");
// const Streak = require("./streak.model");
// const Levels = require("./levels.model");
// const Quiz = require("./quiz.model");

// // User relationships
// User.belongsToMany(Lesson, { foreignKey: "userId", through: LessonsUsers });
// Lesson.belongsToMany(User, { foreignKey: "lessonId", through: LessonsUsers });

// User.belongsToMany(Language, { foreignKey: "userId", through: LanguageUsers });
// Language.belongsToMany(User, { foreignKey: "languageId", through: LanguageUsers });

// // New relationships based on your schema
// User.hasMany(Hearts, { foreignKey: "userId" });
// Hearts.belongsTo(User, { foreignKey: "userId" });

// User.hasMany(Gems, { foreignKey: "userId" });
// Gems.belongsTo(User, { foreignKey: "userId" });

// User.hasOne(Leaderboard, { foreignKey: "userId" });
// Leaderboard.belongsTo(User, { foreignKey: "userId" });

// User.hasOne(Streak, { foreignKey: "userId" });
// Streak.belongsTo(User, { foreignKey: "userId" });

// User.hasMany(UserAchievement, { foreignKey: "userId" });
// UserAchievement.belongsTo(User, { foreignKey: "userId" });

// User.belongsToMany(Achievement, { through: UserAchievement });
// Achievement.belongsToMany(User, { through: UserAchievement });

// // Progress relationships
// User.hasMany(Progress, { foreignKey: "userId" });
// Progress.belongsTo(User, { foreignKey: "userId" });

// Lesson.hasMany(Progress, { foreignKey: "lessonId" });
// Progress.belongsTo(Lesson, { foreignKey: "lessonId" });

// Level.hasMany(Progress, { foreignKey: "levelId" });
// Progress.belongsTo(Level, { foreignKey: "levelId" });

// // Language relationships
// Language.hasMany(Levels, { foreignKey: "languageId" });
// Levels.belongsTo(Language, { foreignKey: "languageId" });

// // Lesson relationships
// Lesson.belongsTo(Levels, { foreignKey: "levelId" });
// Levels.hasMany(Lesson, { foreignKey: "levelId" });

// // Quiz relationships
// Level.hasOne(Quiz, { foreignKey: "levelId" });
// Quiz.belongsTo(Level, { foreignKey: "levelId" });

// // Streak relationships
// User.hasOne(Streak, { foreignKey: "userId" });
// Streak.belongsTo(User, { foreignKey: "userId" });

// // Achievement relationships
// User.belongsToMany(Achievement, { through: UserAchievement });
// Achievement.belongsToMany(User, { through: UserAchievement });

// // Exercise relationships
// Lesson.hasMany(Exercise, { foreignKey: "lessonId" });
// Exercise.belongsTo(Lesson, { foreignKey: "lessonId" });

// // Question and choice relationships
// Lesson.hasMany(Question, { foreignKey: "lessonId" });
// Question.belongsTo(Lesson, { foreignKey: "lessonId" });

// Question.hasMany(Choice, { foreignKey: "questionId" });
// Choice.belongsTo(Question, { foreignKey: "questionId" });

// module.exports = {
//   User,
//   Lesson,
//   Language,
//   Achievement,
//   UserAchievement,
//   LessonsUsers,
//   Progress,
//   Question,
//   Choice,
//   Hearts,
//   Gems,
//   Leaderboard,
//   Streak,
//   Levels,
//   Quiz,
//   sequelize,
// };
