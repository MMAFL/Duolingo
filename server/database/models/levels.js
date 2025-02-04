const Levels = (sequelize, DataTypes) => {
  const Levels = sequelize.define("levels", {
    level_title: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    unclock_points_required: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    xp_reward: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
  });
    

  return Levels;
};

module.exports = Levels;
