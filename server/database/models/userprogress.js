const { DataTypes } = require('sequelize');
const sequelize = require('../config/config');
const User = require('./user.model');
const Level = require('./level.model');
const Lesson = require('./lesson.model');  // Assuming you have a lesson model.

const UserProgress = sequelize.define('UserProgress', {
  progress_id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  user_id: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  level_id: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  lesson_id: {
    type: DataTypes.INTEGER,
    allowNull: true,
  },
  quiz_completed: {
    type: DataTypes.BOOLEAN,
    defaultValue: false,
  },
  score: {
    type: DataTypes.INTEGER,
    allowNull: true,  // Nullable, since score may be undefined if quiz isn't completed
  },
  mistakes: {
    type: DataTypes.INTEGER,
    allowNull: true,  // Nullable as well
  },
  xp_earned: {
    type: DataTypes.INTEGER,
    defaultValue: 0,
  },
  completion_date: {
    type: DataTypes.DATE,
    allowNull: true,
  },
}, {
  timestamps: true,
  createdAt: 'created_at',
  updatedAt: 'updated_at',
});

// Relationships
UserProgress.belongsTo(User, { foreignKey: 'user_id' });
UserProgress.belongsTo(Level, { foreignKey: 'level_id' });
UserProgress.belongsTo(Lesson, { foreignKey: 'lesson_id' });  // Nullable lesson_id

module.exports = UserProgress;
