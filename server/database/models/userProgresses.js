module.exports = (sequelize, DataTypes) => {
  const UserProgress = sequelize.define("UserProgress", {
    completedQuestions: {
      type: DataTypes.JSON,
      allowNull: false,
      defaultValue: [],
    },
    allowedLessons: {
      type: DataTypes.JSON,
      allowNull: false,
      defaultValue: [1],
    },
  });

  UserProgress.associate = (models) => {
    UserProgress.belongsTo(models.User, { foreignKey: "userId" });
  };

  return UserProgress;
};
