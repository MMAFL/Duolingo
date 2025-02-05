module.exports = (sequelize, DataTypes) => {
  const Quiz = sequelize.define('Quiz', {
    quiz_id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
    level_id: { type: DataTypes.INTEGER },
    questions: { type: DataTypes.JSON },
    created_at: { type: DataTypes.DATE }
  }, { timestamps: false });

  return Quiz;
};
