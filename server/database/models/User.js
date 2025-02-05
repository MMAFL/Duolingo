module.exports = (sequelize, DataTypes) => {
  const User = sequelize.define(
    "User",
    {
      user_id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
      },
      username: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true,
      },
      email: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true,
        validate: {
          isEmail: true,
        },
      },
      password_hash: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      profile_picture: {
        type: DataTypes.TEXT,
        allowNull: true,
      },
      xp_points: {
        type: DataTypes.INTEGER,
        defaultValue: 0,
      },
      unlock_points: {
        type: DataTypes.INTEGER,
        defaultValue: 0,
      },
      hearts: {
        type: DataTypes.INTEGER,
        defaultValue: 5,
      },
      gems: {
        type: DataTypes.INTEGER,
        defaultValue: 0,
      },
      streak_days: {
        type: DataTypes.INTEGER,
        defaultValue: 0,
      },
      created_at: {
        type: DataTypes.DATE,
        defaultValue: DataTypes.NOW,
      },
      updated_at: {
        type: DataTypes.DATE,
        defaultValue: DataTypes.NOW,
      },
    },
    {
      tableName: "users",
      timestamps: false, // Disable Sequelize's automatic timestamps
    }
  );

  return User;
};
