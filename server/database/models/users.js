// models/User.js
const { DataTypes } = require('sequelize');
const { sequelize } = require('../index');
const bcrypt = require('bcrypt');

module.exports = (sequelize, DataTypes) => {
  const User = sequelize.define('User', {
    user_id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
    username: { type: DataTypes.STRING, unique: true },
    email: { type: DataTypes.STRING, unique: true },
    password_hash: { 
      type: DataTypes.STRING,
      validate: {
        isStrongPassword(value) {
          if (!/(?=.*[a-z])(?=.*[A-Z])(?=.*\d).{8,}/.test(value)) {
            throw new Error('Password must contain at least one uppercase letter, one lowercase letter, one number, and be at least 8 characters long.');
          }
        }
      }
    },
    profile_picture: { type: DataTypes.TEXT },
    xp_points: { type: DataTypes.INTEGER, defaultValue: 0 },
    unlock_points: { type: DataTypes.INTEGER, defaultValue: 0 },
    hearts: { type: DataTypes.INTEGER, defaultValue: 5 },
    gems: { type: DataTypes.INTEGER, defaultValue: 0 },
    streak_days: { type: DataTypes.INTEGER, defaultValue: 0 },
    created_at: { type: DataTypes.DATE },
    updated_at: { type: DataTypes.DATE }
  }, { timestamps: false,
    tableName: 'Users',
    hooks: {
      beforeCreate: async (user) => {
        if (user.password_hash) {
          const salt = await bcrypt.genSalt(10);
          user.password_hash = await bcrypt.hash(user.password_hash, salt);
        }
      },
      beforeUpdate: async (user) => {
        if (user.changed('password_hash')) {
          const salt = await bcrypt.genSalt(10);
          user.password_hash = await bcrypt.hash(user.password_hash, salt);
        }
      }
    }
  });

  // Add instance methods
  User.prototype.comparePassword = async function (password) {
    return await bcrypt.compare(password, this.password_hash);
  };

  return User;
}
