module.exports = (sequelize, DataTypes) => {
  const UserLanguages = sequelize.define('UserLanguages', {
    user_id: { type: DataTypes.INTEGER, primaryKey: true },
    language_id: { type: DataTypes.INTEGER, primaryKey: true },
    learning_progress: { type: DataTypes.INTEGER, defaultValue: 0 }
  }, { timestamps: false });

  return UserLanguages;
};
