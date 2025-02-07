// store/reducers/achievementSlice.ts
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { RootState } from '../store';

interface Achievement {
  achievement_id: number;
  title: string;
  description?: string;
  xp_reward?: number;
  completed: boolean;
}

interface AchievementState {
  achievements: Achievement[];
  loading: boolean;
  error: string | null;
}

const initialState: AchievementState = {
  achievements: [],
  loading: false,
  error: null,
};

const initialAchievements = [
  {
    achievement_id: 1,
    title: "Lesson 1 Complete",
    description: "Complete your first lesson",
    xp_reward: 10,
    completed: false
  },
  {
    achievement_id: 2,
    title: "Daily XP Goal",
    description: "Earn 30 XP in one day",
    xp_reward: 30,
    completed: false
  },
  // ... other achievements
];

export const fetchAllAchievements = createAsyncThunk(
  'achievements/fetchAll',
  async () => {
    const response = await fetch('http://localhost:5000/api/achievements/');
    return await response.json();
  }
);

const achievementSlice = createSlice({
  name: 'achievement',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchAllAchievements.pending, (state) => {
        state.loading = true;
      })
      .addCase(fetchAllAchievements.fulfilled, (state, action) => {
        state.loading = false;
        state.achievements = action.payload;
      })
      .addCase(fetchAllAchievements.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message || 'Failed to fetch achievements';
      });
  },
});

export const selectAchievements = (state: RootState) => state.achievement;

export default achievementSlice.reducer;