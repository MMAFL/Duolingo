const { DataTypes } = require('sequelize');
const { sequelize } = require('../index');

module.exports = function(sequelize, DataTypes) {
    const Lesson = sequelize.define('Lesson', {
      lesson_title: {
        type: DataTypes.STRING, // VARCHAR equivalent in Sequelize
        allowNull: false
      },
      lesson_description: {
        type: DataTypes.TEXT, // TEXT type for longer descriptions
        allowNull: true // Optional field
      },
      created_at: {
        type: DataTypes.DATE, // DATETIME equivalent in Sequelize
        defaultValue: DataTypes.NOW // Default to the current timestamp
      }
    }, {
      timestamps: false // Disable Sequelize's default createdAt and updatedAt fields
    });
  
    return Lesson;
  };