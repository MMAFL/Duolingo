const express = require("express");
const {
  getAllAchievements,
  getUserAchievements,
  assignAchievementToUser,
  removeAchievementFromUser,
} = require("../controllers/achievementController");

const router = express.Router();

// Fetch all achievements
router.get("/", getAllAchievements);
// Fetch achievements earned by a specific user
router.get("/users/:userId", getUserAchievements);
// Assign an achievement to a user
router.post("/users/assign", assignAchievementToUser);
// Remove an achievement from a user (optional)
router.delete("/users/remove", removeAchievementFromUser);

module.exports = router;
