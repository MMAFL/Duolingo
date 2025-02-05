const { DataTypes } = require("sequelize");

const Exercises = (sequelize, DataTypes) => {
  const Exercise = sequelize.define("exercises", {
    exercise_id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    lesson_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    exercise_type: {
      type: DataTypes.ENUM("Multiple Choice", "Fill in the Blank", "Speech"),
      allowNull: false,
    },
    question_text: {
      type: DataTypes.TEXT,
      allowNull: false,
    },
    correct_answer: {
      type: DataTypes.TEXT,
      allowNull: false,
    },
    options: {
      type: DataTypes.JSON,
      allowNull: true,
    },
    created_at: {
      type: DataTypes.DATE,
      defaultValue: DataTypes.NOW,
    }
  });

  return Exercise;
};

module.exports = Exercises;
