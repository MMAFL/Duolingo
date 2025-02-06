import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Lesson, DailyReward } from "../../types/gameTypes";

interface GameState {
  userProgress: {
    xp: number;
    hearts: number;
    unlockPoints: number; // Added unlockPoints
    streakDays: number; // Added streakDays
  };
  levels: {
    levelId: number;
    title: string;
    lessons: Lesson[];
  }[];
  dailyRewards: DailyReward[];
}

const initialState: GameState = {
  userProgress: {
    xp: 0,
    hearts: 3,
    unlockPoints: 0, // Initialize with 0 unlockPoints
    streakDays: 0, // Initialize with 0 streakDays
  },
  levels: [
    {
      levelId: 1,
      title: "Beginner",
      lessons: [
        {
          lessonId: 1,
          title: "Greetings",
          description: "Learn basic greetings in the language.",
          xpReward: 50,
          unlockPointsRequired: 0,
          completed: false,
        },
        {
          lessonId: 2,
          title: "Numbers",
          description: "Learn numbers from 1 to 10.",
          xpReward: 50,
          unlockPointsRequired: 10,
          completed: false,
        },
      ],
    },
  ],
  dailyRewards: [
    {
      rewardId: 1,
      unlockPoints: 20,
      claimed: false,
    },
    {
      rewardId: 2,
      unlockPoints: 30,
      claimed: false,
    },
  ],
};

const gameSlice = createSlice({
  name: "game",
  initialState,
  reducers: {
    completeLesson(state, action: PayloadAction<{ lessonId: number }>) {
      const lesson = state.levels
        .flatMap((level) => level.lessons)
        .find((lesson) => lesson.lessonId === action.payload.lessonId);

      if (lesson) {
        lesson.completed = true;
        // Increase XP when the lesson is completed
        state.userProgress.xp += lesson.xpReward;

        // Increase unlockPoints if the lesson requires it
        if (lesson.unlockPointsRequired <= state.userProgress.unlockPoints) {
          state.userProgress.unlockPoints += lesson.unlockPointsRequired;
        }
      }
    },
    claimDailyReward(state, action: PayloadAction<{ rewardId: number }>) {
      const reward = state.dailyRewards.find(
        (reward) => reward.rewardId === action.payload.rewardId
      );
      if (reward && !reward.claimed) {
        reward.claimed = true;
        // Add unlockPoints to userProgress when daily reward is claimed
        state.userProgress.unlockPoints += reward.unlockPoints;
      }
    },
    deductHeart(state) {
      if (state.userProgress.hearts > 0) {
        state.userProgress.hearts -= 1; // Deduct a heart
      }
    },
    incrementStreakDays(state) {
      state.userProgress.streakDays += 1; // Increment streakDays when the user is active
    },
    resetStreakDays(state) {
      state.userProgress.streakDays = 0; // Reset streakDays if the user misses a day
    },
  },
});

export const {
  completeLesson,
  claimDailyReward,
  deductHeart,
  incrementStreakDays,
  resetStreakDays,
} = gameSlice.actions;

export default gameSlice.reducer;
