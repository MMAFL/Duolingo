module.exports = (sequelize, DataTypes) => {
  const Hearts = sequelize.define('Hearts', {
    heart_id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
    user_id: { type: DataTypes.INTEGER },
    remaining_hearts: { type: DataTypes.INTEGER, defaultValue: 5 },
    last_recharge: { type: DataTypes.DATE }
  }, { timestamps: false });

  // Relationships
  // Hearts.belongsTo(sequelize.models.User, { foreignKey: 'user_id' });

  return Hearts;
};
