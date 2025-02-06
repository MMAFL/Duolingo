// src/types/achievementTypes.ts

export interface Achievement {
  id: number;
  name: string;
  description: string;
  reward: number;  // Assuming reward is a number (XP)
}

export interface AchievementState {
  allAchievements: Achievement[];
  loading: boolean;
  error: string | null;
}
