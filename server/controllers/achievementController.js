const db = require("../database");
const { User, Achievement, UserAchievement } = db.models;

// Fetch all achievements
const getAllAchievements = async (req, res) => {
  try {
    const achievements = await Achievement.findAll();
    res.status(200).json(achievements);
  } catch (error) {
    res.status(500).json({ message: "Error fetching achievements", error });
  }
};

// Fetch achievements earned by a specific user
const getUserAchievements = async (req, res) => {
  try {
    const { userId } = req.params;
    const user = await User.findByPk(userId, {
      include: [{ model: Achievement, through: UserAchievement }],
    });

    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }

    res.status(200).json(user.Achievements);
  } catch (error) {
    res
      .status(500)
      .json({ message: "Error fetching user achievements", error });
  }
};

// Assign an achievement to a user
const assignAchievementToUser = async (req, res) => {
  try {
    const { userId, achievementId } = req.body;

    // Check if user and achievement exist
    const user = await User.findByPk(userId);
    const achievement = await Achievement.findByPk(achievementId);

    if (!user || !achievement) {
      return res.status(404).json({ message: "User or Achievement not found" });
    }

    // Check if the user already has the achievement
    const existingUserAchievement = await UserAchievement.findOne({
      where: { user_id: userId, achievement_id: achievementId },
    });

    if (existingUserAchievement) {
      return res
        .status(400)
        .json({ message: "User already has this achievement" });
    }

    // Assign the achievement to the user
    await UserAchievement.create({
      user_id: userId,
      achievement_id: achievementId,
    });

    res
      .status(201)
      .json({ message: "Achievement assigned to user successfully" });
  } catch (error) {
    res
      .status(500)
      .json({ message: "Error assigning achievement to user", error });
  }
};

// Remove an achievement from a user (optional)
const removeAchievementFromUser = async (req, res) => {
  try {
    const { userId, achievementId } = req.body;

    // Check if the user has the achievement
    const userAchievement = await UserAchievement.findOne({
      where: { user_id: userId, achievement_id: achievementId },
    });

    if (!userAchievement) {
      return res
        .status(404)
        .json({ message: "User does not have this achievement" });
    }

    // Remove the achievement from the user
    await userAchievement.destroy();

    res
      .status(200)
      .json({ message: "Achievement removed from user successfully" });
  } catch (error) {
    res
      .status(500)
      .json({ message: "Error removing achievement from user", error });
  }
};

module.exports = {
  getAllAchievements,
  getUserAchievements,
  assignAchievementToUser,
  removeAchievementFromUser,
};
