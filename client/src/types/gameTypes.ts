export interface UserProgress {
    userId: number;
    xp: number;
    unlockPoints: number;
    hearts: number;
    streakDays: number;
    lastActiveDate: string; // ISO date string
  }
  
  export interface Lesson {
    lessonId: number;
    title: string;
    description: string;
    xpReward: number;
    unlockPointsRequired: number;
    completed: boolean;
  }
  
  export interface Level {
    levelId: number;
    title: string;
    lessons: Lesson[];
    unlocked: boolean;
  }
  
  export interface DailyReward {
    rewardId: number;
    unlockPoints: number;
    claimed: boolean;
  }

  interface GameState {
    userProgress: {
      userId: number;
      xp: number;
      unlockPoints: number;
      hearts: number;
      streakDays: number;
      lastActiveDate: string; // ISO date string
    };
    levels: {
      levelId: number;
      title: string;
      lessons: Lesson[];
    }[];
    dailyRewards: DailyReward[];
  }