const { Sequelize, DataTypes } = require("sequelize");
require("dotenv").config();

const sequelize = new Sequelize(
  process.env.DATABASE,
  process.env.USER,
  process.env.PASSWORD,
  {
    host: process.env.HOST,
    dialect: "mysql",
    define: {
      timestamps: false,
    },
  }
);

// Test the connection
sequelize
  .authenticate()
  .then(() => {
    console.log("Connection has been established successfully.");
  })
  .catch((err) => {
    console.error("Unable to connect to the database:", err);
  });

const db = {
  Sequelize,
  sequelize,
  models: {},
};

// Import models
db.models.User = require("./models/UserModel")(sequelize, DataTypes);
db.models.Streak = require("./models/StreakModel")(sequelize, DataTypes);
db.models.Achievement = require("./models/Achievement")(sequelize, DataTypes);
db.models.UserAchievement = require("./models/UserAchievement")(sequelize, DataTypes);
db.models.Language = require("./models/languages.model")(sequelize, DataTypes);
db.models.UserLanguages = require("./models/userlanguages.model")(sequelize, DataTypes);
db.models.Level = require("./models/levels")(sequelize, DataTypes);
db.models.Lesson = require("./models/lessons.mode")(sequelize, DataTypes);
db.models.Quiz = require("./models/quizz")(sequelize, DataTypes);
db.models.UserProgress = require("./models/userprogress")(sequelize, DataTypes);

// Import new models
db.models.Exercise = require("./models/exercises")(sequelize, DataTypes);
db.models.Hearts = require("./models/hearts")(sequelize, DataTypes);
db.models.Gems = require("./models/gems")(sequelize, DataTypes);

// Add associations
// User relationships
db.models.User.hasMany(db.models.Streak, { foreignKey: "user_id" });
db.models.User.hasMany(db.models.UserProgress, { foreignKey: "user_id" });
db.models.User.belongsToMany(db.models.Achievement, {
  through: db.models.UserAchievement,
  foreignKey: "user_id",
});
db.models.User.belongsToMany(db.models.Language, {
  through: db.models.UserLanguages,
  foreignKey: "user_id",
});
db.models.User.hasOne(db.models.Hearts, { foreignKey: "user_id" });
db.models.User.hasOne(db.models.Gems, { foreignKey: "user_id" });

// Language relationships
db.models.Language.hasMany(db.models.Level, { foreignKey: "language_id" });
db.models.Language.belongsToMany(db.models.User, {
  through: db.models.UserLanguages,
  foreignKey: "language_id",
});

// Level relationships
db.models.Level.belongsTo(db.models.Language, { foreignKey: "language_id" });
db.models.Level.hasMany(db.models.Lesson, { foreignKey: "level_id" });
db.models.Level.hasOne(db.models.Quiz, { foreignKey: "level_id" });
db.models.Level.belongsToMany(db.models.User, {
  through: db.models.UserProgress,
  foreignKey: "level_id",
});

// Lesson relationships
db.models.Lesson.belongsTo(db.models.Level, { foreignKey: "level_id" });
db.models.Lesson.belongsToMany(db.models.User, {
  through: db.models.UserProgress,
  foreignKey: "lesson_id",
});
db.models.Lesson.hasMany(db.models.Exercise, { foreignKey: "lesson_id" });

// Quiz relationships
db.models.Quiz.belongsTo(db.models.Level, { foreignKey: "level_id" });

// UserProgress relationships
db.models.UserProgress.belongsTo(db.models.User, { foreignKey: "user_id" });
db.models.UserProgress.belongsTo(db.models.Level, { foreignKey: "level_id" });
db.models.UserProgress.belongsTo(db.models.Lesson, { foreignKey: "lesson_id" });

// Streak relationships
db.models.Streak.belongsTo(db.models.User, { foreignKey: "user_id" });

// Achievement relationships
db.models.Achievement.belongsToMany(db.models.User, {
  through: db.models.UserAchievement,
  foreignKey: "achievement_id",
});

// UserLanguages relationships
db.models.UserLanguages.belongsTo(db.models.User, { foreignKey: "user_id" });
db.models.UserLanguages.belongsTo(db.models.Language, { foreignKey: "language_id" });

// Hearts relationships
db.models.Hearts.belongsTo(db.models.User, { foreignKey: "user_id" });

// Gems relationships
db.models.Gems.belongsTo(db.models.User, { foreignKey: "user_id" });

// Exercise relationships
db.models.Exercise.belongsTo(db.models.Lesson, { foreignKey: "lesson_id" });

// db.sequelize
//   .sync({ force: false, alter: false })
//   .then(() => {
//     console.log("Database synchronized");
//   })
//   .catch((err) => {
//     console.error("Error synchronizing database:", err);
//   });

module.exports = db;
