const  Sequelize = require("sequelize");

const Users = require("./models/users");
const Exercises = require("./models/exercises");
const Gems = require("./models/gems");
// const Lesson = require("./models/lessons");
// const Language = require("./models/languages");
// const Achievement = require("./models/achievements");


// const UserAchievement = require("./models/userAchievements");
// const Progress = require("./models/progresses");
// const Question = require("./models/questions");



// const Choice = require("./models/choices");
// const LessonsUsers = require("./models/lessonsUsers");
// const LanguageUsers = require("./models/languageUsers");

// User.belongsToMany(Lesson, { foreignKey: "userId", through: LessonsUsers });
// Lesson.belongsToMany(User, { foreignKey: "lessonId", through: LessonsUsers });




const sequelize = new Sequelize("duolingo", "root", "root", {
  host: "localhost",
  dialect: "mysql", 
});



// Sync all models with the database
sequelize
  .sync({ force: true , alter: true }) 
  .then(() => {
    console.log("Database synced successfully.");
  })

  .catch((err) => {
    console.error("Error syncing database:", err);
  });




module.exports = {
  Users,
  Exercises,
  Gems,
  // Language,
  // Achievement,
  // UserAchievement,
  // LessonsUsers,
  // Progress,


  // Question,

  // Choice,

};