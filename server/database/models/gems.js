const { DataTypes } = require("sequelize");
const { sequelize } = require("../index");

const Gems = (sequelize, DataTypes) => {
  const Gems = sequelize.define("gems", {

    gem_id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,

    },
    gem_balance: {
        type: DataTypes.INTEGER,
        defaultValue: 0,
      allowNull: false,
    },
  });

  return Gems;
};
