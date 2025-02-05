const { DataTypes } = require("sequelize");
const { sequelize } = require("../index");

const Gems = (sequelize, DataTypes) => {
  const Gems = sequelize.define("gems", {
    gem_id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    user_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    gem_balance: {
      type: DataTypes.INTEGER,
      defaultValue: 0,
      allowNull: false,
    },
  });

  return Gems;
};

module.exports = Gems;
