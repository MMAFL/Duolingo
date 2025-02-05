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
};

// Import models and assign directly to db object
db.User = require("./models/users")(sequelize, DataTypes);
db.Streak = require("./models/streaks")(sequelize, DataTypes);
db.Achievement = require("./models/achievements")(sequelize, DataTypes);
db.UserAchievement = require("./models/userAchievements")(sequelize, DataTypes);
db.Language = require("./models/languages")(sequelize, DataTypes);
db.UserLanguage = require("./models/userlanguages")(sequelize, DataTypes);
db.Level = require("./models/levels")(sequelize, DataTypes);
db.Lesson = require("./models/lessons")(sequelize, DataTypes);
db.Quiz = require("./models/quizzes")(sequelize, DataTypes);
db.UserProgress = require("./models/userProgresses")(sequelize, DataTypes);

// Import new models
db.Exercise = require("./models/exercises")(sequelize, DataTypes);
db.Hearts = require("./models/hearts")(sequelize, DataTypes);
db.Gems = require("./models/gems")(sequelize, DataTypes);

// Define relationships

// User relationships
db.User.hasMany(db.UserProgress, { foreignKey: "user_id" });
db.User.hasOne(db.Hearts, { foreignKey: "user_id" });
db.User.hasOne(db.Streak, { foreignKey: "user_id" });
db.User.belongsToMany(db.Achievement, {
  through: db.UserAchievement,
  foreignKey: "user_id",
});
db.User.belongsToMany(db.Language, {
  through: db.UserLanguage, // Corrected this line
  foreignKey: "user_id",
});

// Language relationships
db.Language.hasMany(db.Level, { foreignKey: "language_id" });
db.Language.belongsToMany(db.User, {
  through: db.UserLanguage, // Corrected this line
  foreignKey: "language_id",
});

// UserLanguage relationships
db.UserLanguage.belongsTo(db.User, { foreignKey: "user_id" });
db.UserLanguage.belongsTo(db.Language, { foreignKey: "language_id" });

// Sync the database
// sequelize
//   .sync({ force: true })
//   .then(() => {
//     console.log("Database synced successfully.");
//   })
//   .catch((err) => {
//     console.error("Error syncing database:", err);
//   });

module.exports = db;
