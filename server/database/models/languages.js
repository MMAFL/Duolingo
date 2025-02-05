module.exports = (sequelize, DataTypes) => {
  const Language = sequelize.define('Language', {
    language_id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
    language_name: { type: DataTypes.STRING }
  }, { timestamps: false });

  return Language;
};
