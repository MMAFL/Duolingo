// types/states/achievementTypes.ts
export interface Achievement {
  id: string;
  name: string;
  description: string;
  reward: number;
}

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