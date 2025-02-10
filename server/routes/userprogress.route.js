const express = require("express");
const {
  CreateUserProgress,
  decreaseHearts,
  getLeaderboard,
  GetUserProgress,
  refillHearts,
  UpdateUserProgress,
} = require("../controllers/userProgress.controller.js");

const router = express.Router();

router.post("/", CreateUserProgress);
router.put("/", UpdateUserProgress);
router.post("/hearts", decreaseHearts);
router.post("/refillHearts", refillHearts);
router.get("/leaderboard", getLeaderboard);
router.get("/:userId", GetUserProgress);

module.exports = router;
