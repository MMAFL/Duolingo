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
  User: require("./models/users")(sequelize, DataTypes),
  Streak: require("./models/streaks")(sequelize, DataTypes),
  Achievement: require("./models/achievements")(sequelize, DataTypes),
  UserAchievement: require("./models/userAchievements")(sequelize, DataTypes),
  Language: require("./models/languages")(sequelize, DataTypes),
  UserLanguage: require("./models/userlanguages")(sequelize, DataTypes),
  Level: require("./models/levels")(sequelize, DataTypes),
  Lesson: require("./models/lessons")(sequelize, DataTypes),
  Quiz: require("./models/quizzes")(sequelize, DataTypes),
  UserProgress: require("./models/userProgresses")(sequelize, DataTypes),
  Exercise: require("./models/exercises")(sequelize, DataTypes),
  Hearts: require("./models/hearts")(sequelize, DataTypes),
  Gems: require("./models/gems")(sequelize, DataTypes),
};

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

// Sync the database (force: true will drop and recreate tables)
// sequelize.sync({ force: false })
//   .then(() => {
//     console.log("Database synced successfully.");
//   })
//   .catch((err) => {
//     console.error("Error syncing database:", err);
//   });

module.exports = db;
