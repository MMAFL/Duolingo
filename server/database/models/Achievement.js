module.exports = (sequelize, DataTypes) => {
  const Achievement = sequelize.define(
    "Achievement",
    {
      achievement_id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
      },
      title: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      description: {
        type: DataTypes.TEXT,
        allowNull: false,
      },
      xp_reward: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
    },
    {
      tableName: "achievements",
      timestamps: false,
    }
  );
  return Achievement;
};
