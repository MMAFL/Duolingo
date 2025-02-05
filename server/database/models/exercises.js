const { DataTypes } = require("sequelize");
const { sequelize } = require("../index");

const Exercises = (sequelize, DataTypes) => {
  const Exercise = sequelize.define("exercises", {
    exercise_type: {
      type: DataTypes.ENUM("Multiple Choice", "Fill in the blank", "Speech"),
      allowNull: false,
    },
    exercise_title: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    exercise_description: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    exercise_image: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    exercise_points: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
  });

  return Exercise;
};

module.exports = Exercises;
