module.exports = (sequelize, DataTypes) => {
  const Achievement = sequelize.define('Achievement', {
    achievement_id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
    title: { type: DataTypes.STRING },
    description: { type: DataTypes.TEXT },
    xp_reward: { type: DataTypes.INTEGER }
  }, { timestamps: false });

  // Relationships
  // Achievement.belongsToMany(sequelize.models.User, { through: sequelize.models.UserAchievement, foreignKey: 'achievement_id' });

  return Achievement;
};
