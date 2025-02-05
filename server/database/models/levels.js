module.exports = (sequelize, DataTypes) => {
  const Level = sequelize.define('Level', {
    level_id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
    language_id: { type: DataTypes.INTEGER },
    level_title: { type: DataTypes.STRING },
    unlock_points_required: { type: DataTypes.INTEGER },
    xp_reward: { type: DataTypes.INTEGER },
    created_at: { type: DataTypes.DATE }
  }, { timestamps: false });

  return Level;
};
