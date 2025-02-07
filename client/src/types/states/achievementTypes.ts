// types/states/achievementTypes.ts
interface Achievement {
  achievement_id: number;
  title: string;
  description?: string;
  xp_reward?: number;
  completed: boolean; // Add this field to track completion
};

export interface AchievementState {
  allAchievements: Achievement[];
  loading: boolean;
  error: string | null;
}

export const FETCH_ALL_ACHIEVEMENTS = 'FETCH_ALL_ACHIEVEMENTS';

interface FetchAllAchievementsAction {
  type: typeof FETCH_ALL_ACHIEVEMENTS;
  payload: Achievement[];
  
}

export type AchievementActionTypes = FetchAllAchievementsAction;