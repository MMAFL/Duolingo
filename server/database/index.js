const { Sequelize, DataTypes } = require("sequelize");
const dotenv = require("dotenv");
dotenv.config();
const sequelize = new Sequelize(
  process.env.DATABASE,
  process.env.USER,
  process.env.PASSWORD,
  {
    host: process.env.HOST,
    dialect: "mysql",
  }
);

let db = {};

db.User = require("./user.model.js")(sequelize, DataTypes);
db.UserProgress = require("./userProgress.model.js")(sequelize, DataTypes);
db.Unit = require("./unit.model.js")(sequelize, DataTypes);
db.Lesson = require("./lesson.model.js")(sequelize, DataTypes);
db.Question = require("./question.model.js")(sequelize, DataTypes);

// Define associations
Object.keys(db).forEach((modelName) => {
  if (db[modelName].associate) {
    db[modelName].associate(db);
  }
});

// Sync models with the database
// sequelize.sync({ force: true }).then(() => {
//   console.log("Database & tables created!");
// });

module.exports = db;
