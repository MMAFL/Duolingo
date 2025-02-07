import { createSlice } from '@reduxjs/toolkit';

interface UserState {
  xp: number;
}

const initialState: UserState = {
  xp: 0
};

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    updateXP: (state, action) => {
      state.xp = action.payload;
    }
  }
});

export const { updateXP } = userSlice.actions;
export default userSlice.reducer; 