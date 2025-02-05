module.exports = (sequelize, DataTypes) => {
  const Level = sequelize.define('Level', {
    level_id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
    language_id: { type: DataTypes.INTEGER },
    level_title: { type: DataTypes.STRING },
    unlock_points_required: { type: DataTypes.INTEGER },
    xp_reward: { type: DataTypes.INTEGER },
    created_at: { type: DataTypes.DATE }
  }, { timestamps: false });

  // Relationships
  // Level.belongsTo(sequelize.models.Language, { foreignKey: 'language_id' });
  // Level.hasMany(sequelize.models.Lesson, { foreignKey: 'level_id' });
  // Level.hasOne(sequelize.models.Quiz, { foreignKey: 'level_id' });
  // Level.belongsToMany(sequelize.models.User, { through: sequelize.models.UserProgress, foreignKey: 'level_id' });

  return Level;
};
