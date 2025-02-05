module.exports = (sequelize, DataTypes) => {
  const Language = sequelize.define('Language', {
    language_id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
    language_name: { type: DataTypes.STRING }
  }, { timestamps: false });

  // Relationships
  // Language.hasMany(sequelize.models.Level, { foreignKey: 'language_id' });
  // Language.belongsToMany(sequelize.models.User, { through: sequelize.models.UserLanguages, foreignKey: 'language_id' });

  return Language;
};
