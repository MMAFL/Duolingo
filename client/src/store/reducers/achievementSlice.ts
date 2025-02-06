// slices/achievementSlice.ts
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

// Define the initial state
const initialState = {
  allAchievements: [], // All available achievements
  userAchievements: [], // Achievements earned by the user
  loading: false, // Loading state
  error: '', // Error message
};

// Fetch all achievements (API call)
export const fetchAllAchievements = createAsyncThunk(
  'achievement/fetchAll',
  async () => {
    console.log('Fetching all achievements...');
    try {
      const response = await axios.get('http://localhost:5000/api/achievements');
      console.log('Fetched achievements:', response.data);
      return response.data; // Return the fetched achievements
    } catch (error) {
      console.log('Error fetching achievements:', error);
     throw error // Return the error message
    }
  }
);

// Fetch user achievements (API call)
export const fetchUserAchievements = createAsyncThunk(
  'achievement/fetchUser',
  async (userId: number) => {
    console.log('Fetching user achievements...');
    try {
      const response = await axios.get(`http://localhost:5000/api/users/achievements/${userId}`);
      console.log('Fetched user achievements:', response.data);
      return response.data; // Return the fetched user achievements
    } catch (error) {
      console.log('Error fetching user achievements:', error);
      throw error // Return the error message
    }
  }
);

// Assign an achievement to a user (API call)
export const assignAchievement = createAsyncThunk(
  'achievement/assign',
  async ({ userId, achievementId }: { userId: number; achievementId: number }) => {
    console.log('Assigning achievement...');
    try {
      const response = await axios.post('http://localhost:5000/api/achievements/users/assign', {
        userId,
        achievementId,
      });
      console.log('Assigned achievement:', response.data);
      return response.data; // Return the assigned achievement
    } catch (error) {
      console.log('Error assigning achievement:', error);
      throw error // Return the error message
    }
  }
);

// Create the slice
const achievementSlice = createSlice({
  name: 'achievement',
  initialState,
  reducers: {
    // Add any additional reducers here if needed
  },
  extraReducers: (builder) => {
    builder
      // Fetch all achievements
      .addCase(fetchAllAchievements.pending, (state) => {
        state.loading = true;
        state.error = '';
      })
      .addCase(fetchAllAchievements.fulfilled, (state, action) => {
        state.loading = false;
        state.allAchievements = action.payload;
      })
      .addCase(fetchAllAchievements.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload as string;
      })

      // Fetch user achievements
      .addCase(fetchUserAchievements.pending, (state) => {
        state.loading = true;
        state.error = '';
      })
      .addCase(fetchUserAchievements.fulfilled, (state, action) => {
        state.loading = false;
        state.userAchievements = action.payload;
      })
      .addCase(fetchUserAchievements.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload as string;
      })

      // Assign achievement
      .addCase(assignAchievement.pending, (state) => {
        state.loading = true;
        state.error = '';
      })
      .addCase(assignAchievement.fulfilled, (state, action) => {
        state.loading = false;
        //@ts-ignore
        state.userAchievements.push(action.payload); // Add the new achievement to the user's list
      })
      .addCase(assignAchievement.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload as string;
      });
  },
});

// Export the slice reducer
export default achievementSlice.reducer;