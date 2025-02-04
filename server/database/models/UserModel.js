// models/User.js
const { DataTypes } = require('sequelize');
const { sequelize } = require('../index');

const User = sequelize.define('User', {
  user_id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true
  },
  username: { 
    type: DataTypes.STRING, 
    unique: true, 
    allowNull: false 
  },
  email: { 
    type: DataTypes.STRING, 
    unique: true, 
    allowNull: false 
  },
  password_hash: { 
    type: DataTypes.STRING, 
    allowNull: false 
  },
  profile_picture: { 
    type: DataTypes.TEXT 
  },
  xp_points: { 
    type: DataTypes.INTEGER, 
    defaultValue: 0 
  },
  unlock_points: { 
    type: DataTypes.INTEGER, 
    defaultValue: 0 
  },
  hearts: { 
    type: DataTypes.INTEGER, 
    defaultValue: 5 
  },
  gems: { 
    type: DataTypes.INTEGER, 
    defaultValue: 0 
  },
  streak_days: { 
    type: DataTypes.INTEGER, 
    defaultValue: 0 
  },
  created_at: { 
    type: DataTypes.DATE, 
    defaultValue: DataTypes.NOW 
  },
  updated_at: { 
    type: DataTypes.DATE, 
    defaultValue: DataTypes.NOW 
  }
}, {
  timestamps: false,
  tableName: 'Users'
});

module.exports = User;
