// models/quiz.model.js
const { DataTypes } = require('sequelize');
const sequelize = require('../config/config');
const Level = require('./levels.model'); // Import Level model to establish relationships

const Quiz = sequelize.define('Quiz', {
  quiz_id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  level_id: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  questions: {
    type: DataTypes.JSON,
    allowNull: false,
  },
  created_at: {
    type: DataTypes.DATE,
    defaultValue: DataTypes.NOW,
  },
}, {
  timestamps: false,
});

// // Relationships
// Quiz.belongsTo(Level, { foreignKey: 'level_id' });

module.exports = Quiz;
