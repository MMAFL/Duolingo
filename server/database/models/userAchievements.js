module.exports = (sequelize, DataTypes) => {
  const UserAchievement = sequelize.define('UserAchievement', {
    user_id: { type: DataTypes.INTEGER, primaryKey: true },
    achievement_id: { type: DataTypes.INTEGER, primaryKey: true },
    earned_date: { type: DataTypes.DATE }
  }, { timestamps: false });

  return UserAchievement;
};
