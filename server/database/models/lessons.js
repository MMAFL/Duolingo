module.exports = (sequelize, DataTypes) => {
  const Lesson = sequelize.define('Lesson', {
    lesson_id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
    level_id: { type: DataTypes.INTEGER },
    lesson_title: { type: DataTypes.STRING },
    lesson_description: { type: DataTypes.TEXT },
    created_at: { type: DataTypes.DATE }
  }, { timestamps: false });

  return Lesson;
};
