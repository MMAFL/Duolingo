module.exports = (sequelize, DataTypes) => {
  const Lesson = sequelize.define('Lesson', {
    lesson_id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
    level_id: { type: DataTypes.INTEGER },
    lesson_title: { type: DataTypes.STRING },
    lesson_description: { type: DataTypes.TEXT },
    created_at: { type: DataTypes.DATE }
  }, { timestamps: false });

  // Relationships
  // Lesson.belongsTo(sequelize.models.Level, { foreignKey: 'level_id' });
  // Lesson.hasMany(sequelize.models.Exercise, { foreignKey: 'lesson_id' });
  // Lesson.belongsToMany(sequelize.models.User, { through: sequelize.models.UserProgress, foreignKey: 'lesson_id' });

  return Lesson;
};
