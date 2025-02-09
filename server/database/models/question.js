module.exports = (sequelize, DataTypes) => {
  const Question = sequelize.define(
    "Question",
    {
      type: {
        type: DataTypes.ENUM("SELECT", "ASSIST"),
        allowNull: false,
      },
      data: {
        type: DataTypes.JSON,
        allowNull: false,
      },
    },
    {
      timestamps: true,
    }
  );

  Question.associate = (models) => {
    Question.belongsTo(models.Lesson, { foreignKey: "lessonId" });
  };

  return Question;
};
