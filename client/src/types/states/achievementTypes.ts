export interface Achievement {
    id: number;
    name: string;
    description: string;
    target: number; // Target value to complete the achievement (e.g., 10 lessons)
    reward: number; // XP reward for completing the achievement
  }
  
  export interface UserAchievement {
    userId: number;
    achievementId: number;
    progress: number; // Current progress toward the target
    completed: boolean; // Whether the achievement is completed
  }
  
  export interface AchievementState {
    achievements: Achievement[];
    userAchievements: UserAchievement[];
    loading: boolean;
    error: string | null;
  }
  