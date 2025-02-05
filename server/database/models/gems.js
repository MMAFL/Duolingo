module.exports = (sequelize, DataTypes) => {
  const Gems = sequelize.define('Gems', {
    gem_id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
    user_id: { type: DataTypes.INTEGER },
    gem_balance: { type: DataTypes.INTEGER, defaultValue: 0 }
  }, { timestamps: false });

  // Relationships
  // Gems.belongsTo(sequelize.models.User, { foreignKey: 'user_id' });

  return Gems;
};
