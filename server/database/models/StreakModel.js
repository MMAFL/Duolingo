// models/Streak.js
const { DataTypes } = require('sequelize');
const { sequelize } = require('../index');

const Streak = sequelize.define('Streak', {
  streak_id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true
  },
  user_id: {
    type: DataTypes.INTEGER,
    allowNull: false
  },
  streak_count: {
    type: DataTypes.INTEGER,
    allowNull: false
  },
  last_active_date: {
    type: DataTypes.DATE,
    defaultValue: DataTypes.NOW
  }
}, {
  timestamps: false,
  tableName: 'Streaks'
});

module.exports = Streak;
