// actions/achievementActions.ts
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';


// Define the initial state
const initialState = {
  achievements: [], // Array of achievements
  loading: false, // Loading state
  error: '', // Error message
};

// Fetch all achievements (API call)
export const fetchAllAchievements = createAsyncThunk(
  'achievements/fetchAll',
  async () => {
    console.log("Fetching achievements...");
    try {
      const response = await axios.get('/api/achievements');
      console.log("Fetched achievements:", response.data); // Log the response data
      return response.data; // Return the fetched achievements
    } catch (error) {
      console.log("Error fetching achievements:", error);
      throw error // Return the error message
    }
  }
);

// Create the slice
const achievementSlice = createSlice({
  name: 'achievements',
  initialState,
  reducers: {
    // You can add additional reducers here if needed
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchAllAchievements.pending, (state) => {
        state.loading = true; // Set loading to true when the request is pending
      })
      .addCase(fetchAllAchievements.fulfilled, (state, action) => {
        state.loading = false; // Set loading to false when the request is fulfilled
        state.achievements = action.payload; // Update the achievements array with the fetched data
      })
      .addCase(fetchAllAchievements.rejected, (state, action) => {
        state.loading = false; // Set loading to false when the request is rejected
        state.error = action.payload as string; // Set the error message
      });
  },
});

// Export the slice reducer
export default achievementSlice.reducer;