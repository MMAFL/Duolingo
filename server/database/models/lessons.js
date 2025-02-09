module.exports = (sequelize, DataTypes) => {
  const Lesson = sequelize.define(
    "Lesson",
    {
      title: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      order: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
    },
    {
      timestamps: true,
    }
  );

  Lesson.associate = (models) => {
    Lesson.belongsTo(models.Unit, { foreignKey: "unitId" });
    Lesson.hasMany(models.Question, { foreignKey: "lessonId" });
  };

  return Lesson;
};
