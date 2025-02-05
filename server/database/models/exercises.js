module.exports = (sequelize, DataTypes) => {
  const Exercise = sequelize.define('Exercise', {
    exercise_id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
    lesson_id: { type: DataTypes.INTEGER },
    exercise_type: { type: DataTypes.ENUM('Multiple Choice', 'Fill in the Blank', 'Speech') },
    question_text: { type: DataTypes.TEXT },
    correct_answer: { type: DataTypes.TEXT },
    options: { type: DataTypes.JSON },
    created_at: { type: DataTypes.DATE }
  }, { timestamps: false });

  // Relationships
  // Exercise.belongsTo(sequelize.models.Lesson, { foreignKey: 'lesson_id' });

  return Exercise;
};
