module.exports = (sequelize, DataTypes) => {
  const UserLanguages = sequelize.define('UserLanguages', {
    user_id: { type: DataTypes.INTEGER, primaryKey: true },
    language_id: { type: DataTypes.INTEGER, primaryKey: true },
    learning_progress: { type: DataTypes.INTEGER, defaultValue: 0 }
  }, { timestamps: false });

  // Relationships
  // UserLanguages.belongsTo(sequelize.models.User, { foreignKey: 'user_id' });
  // UserLanguages.belongsTo(sequelize.models.Language, { foreignKey: 'language_id' });

  return UserLanguages;
};
