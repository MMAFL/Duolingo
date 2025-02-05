const { DataTypes } = require('sequelize');
const { sequelize } = require('../index');

module.exports = (sequelize, DataTypes) => {
    const Language = sequelize.define('Language', {
      language_name: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true
      }
    }, {
      timestamps: false // Disable createdAt and updatedAt fields
    });
  
    return Language;
  };
  