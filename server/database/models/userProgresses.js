module.exports = (sequelize, DataTypes) => {
  const UserProgress = sequelize.define('UserProgress', {
    progress_id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
    user_id: { type: DataTypes.INTEGER },
    level_id: { type: DataTypes.INTEGER },
    lesson_id: { type: DataTypes.INTEGER, allowNull: true },
    quiz_completed: { type: DataTypes.BOOLEAN, defaultValue: false },
    score: { type: DataTypes.INTEGER },
    mistakes: { type: DataTypes.INTEGER },
    xp_earned: { type: DataTypes.INTEGER },
    completion_date: { type: DataTypes.DATE }
  }, { timestamps: false });

  return UserProgress;
};
