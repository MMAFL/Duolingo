module.exports = (sequelize, DataTypes) => {
  const User = sequelize.define('User', {
    user_id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
    username: { type: DataTypes.STRING, unique: true },
    email: { type: DataTypes.STRING, unique: true },
    password_hash: { type: DataTypes.STRING },
    profile_picture: { type: DataTypes.TEXT },
    xp_points: { type: DataTypes.INTEGER, defaultValue: 0 },
    unlock_points: { type: DataTypes.INTEGER, defaultValue: 0 },
    hearts: { type: DataTypes.INTEGER, defaultValue: 5 },
    gems: { type: DataTypes.INTEGER, defaultValue: 0 },
    streak_days: { type: DataTypes.INTEGER, defaultValue: 0 },
    created_at: { type: DataTypes.DATE },
    updated_at: { type: DataTypes.DATE }
  }, { timestamps: false });

  // Relationships
  // User.hasMany(sequelize.models.UserProgress, { foreignKey: 'user_id' });
  // User.hasOne(sequelize.models.Hearts, { foreignKey: 'user_id' });
  // User.hasOne(sequelize.models.Streak, { foreignKey: 'user_id' });
  // User.belongsToMany(sequelize.models.Achievement, { through: sequelize.models.UserAchievement, foreignKey: 'user_id' });
  // User.belongsToMany(sequelize.models.Language, { through: sequelize.models.UserLanguages, foreignKey: 'user_id' });

  return User;
};
