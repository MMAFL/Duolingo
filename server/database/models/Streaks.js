module.exports = (sequelize, DataTypes) => {
  const Streak = sequelize.define('Streak', {
    streak_id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
    user_id: { type: DataTypes.INTEGER },
    streak_count: { type: DataTypes.INTEGER },
    last_active_date: { type: DataTypes.DATE }
  }, { timestamps: false });

  return Streak;
};
