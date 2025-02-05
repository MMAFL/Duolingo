const { Sequelize, DataTypes } = require("sequelize");
require('dotenv').config();

const sequelize = new Sequelize(
  process.env.DATABASE,
  process.env.USER,
  process.env.PASSWORD,
  {
    host: process.env.HOST,
    dialect: "mysql",
    define: {
      timestamps: false
    }
  }
);

// Test the connection
sequelize.authenticate()
  .then(() => {
    console.log('Connection has been established successfully.');
  })
  .catch(err => {
    console.error('Unable to connect to the database:', err);
  });

const db = {
  Sequelize,
  sequelize,
  models: {}
};

// Import models
db.models.User = require('./models/UserModel')(sequelize, DataTypes);
db.models.Streak = require('./models/StreakModel')(sequelize, DataTypes);

// Add associations
db.models.User.hasMany(db.models.Streak, { foreignKey: 'user_id' });
db.models.Streak.belongsTo(db.models.User, { foreignKey: 'user_id' });

// db.sequelize.sync({ force: false, alter: false })
//   .then(() => {
//     console.log('Database synchronized');
//   })
//   .catch((err) => {
//     console.error('Error synchronizing database:', err);
//   });

module.exports = db;