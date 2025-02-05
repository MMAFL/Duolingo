module.exports = (sequelize, DataTypes) => {
  const UserAchievement = sequelize.define('UserAchievement', {
    user_id: { type: DataTypes.INTEGER, primaryKey: true },
    achievement_id: { type: DataTypes.INTEGER, primaryKey: true },
    earned_date: { type: DataTypes.DATE }
  }, { timestamps: false });

  // Relationships
  // UserAchievement.belongsTo(sequelize.models.User, { foreignKey: 'user_id' });
  // UserAchievement.belongsTo(sequelize.models.Achievement, { foreignKey: 'achievement_id' });

  return UserAchievement;
};
