module.exports = (sequelize, DataTypes) => {
    const Unit = sequelize.define("Unit", {
      title: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      description: {
        type: DataTypes.STRING,
        allowNull: false,
      },
    }, {
      timestamps: true,
    });
  
    Unit.associate = (models) => {
      Unit.hasMany(models.Lesson, { foreignKey: "unitId" });
    };
  
    return Unit;
  };