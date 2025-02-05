const { DataTypes } = require("sequelize");

module.exports = (sequelize, DataTypes) => {
  const Level = sequelize.define("Level", {
    level_id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    level_name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    level_description: {
      type: DataTypes.TEXT,
    },
    level_points_required: {
      type: DataTypes.INTEGER,
      defaultValue: 0,
    },
  });

  return Level;
};
