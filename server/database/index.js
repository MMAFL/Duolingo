const { Sequelize } = require("sequelize");

const sequelize = new Sequelize("duolingo", "root", "root", {
  host: "localhost",
  dialect: "mysql",
});

const levels = require("./models/levels");

sequelize.sync({ alter: true });    

sequelize.authenticate().then(() => {
  console.log("Connected to the database");
}).catch((err) => {
  console.log("Error connecting to the database", err);
});

module.exports = {
  sequelize,
  levels,
};
