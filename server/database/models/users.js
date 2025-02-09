module.exports = (sequelize, DataTypes) => {
  const User = sequelize.define(
    "User",
    {
      username: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      email: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true,
      },
      password: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      isAdmin: {
        type: DataTypes.BOOLEAN,
        allowNull: false,
        defaultValue: false,
      },
      gem: {
        type: DataTypes.INTEGER,
        allowNull: false,
        defaultValue: 0,
      },
      lifePoint: {
        type: DataTypes.INTEGER,
        allowNull: false,
        defaultValue: 5,
      },
      point: {
        type: DataTypes.INTEGER,
        allowNull: false,
        defaultValue: 0,
      },
    },
    {
      timestamps: true,
    }
  );

  User.associate = (models) => {
    User.hasOne(models.UserProgress, { foreignKey: "userId" });
  };

  return User;
};
