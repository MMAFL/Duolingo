module.exports = (sequelize, DataTypes) => {
    const UserLanguages = sequelize.define('UserLanguages', {
      learning_progress: {
        type: DataTypes.INTEGER,
        defaultValue: 0
      }
    }, {
      timestamps: true,
    });


    return UserLanguages;
};