import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Lesson, DailyReward } from "../../types/gameTypes";

interface GameState {
  levels: {
    levelId: number;
    title: string;
    lessons: Lesson[];
  }[];
  dailyRewards: DailyReward[];
}

const initialState: GameState = {
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
      }
    },
    claimDailyReward(state, action: PayloadAction<{ rewardId: number }>) {
      const reward = state.dailyRewards.find(
        (reward) => reward.rewardId === action.payload.rewardId
      );
      if (reward) {
        reward.claimed = true;
      }
    },
    deductHeart(state, action: PayloadAction<{ heartId: number }>) {
      const heart = state.levels
        .flatMap((level) => level.lessons)
        .find((lesson) => lesson.lessonId === action.payload.heartId);
      if (heart) {
        heart.xpReward = 0;
      }
    },
  },
});

export const { completeLesson, claimDailyReward, deductHeart } =
  gameSlice.actions;
export default gameSlice.reducer;
