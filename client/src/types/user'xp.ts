import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface UserState {
  xp: number;
}

const initialState: UserState = {
  xp: 0,
};

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    addXP: (state, action: PayloadAction<number>) => {
      state.xp += action.payload;
    },
  },
});

export const { addXP } = userSlice.actions;
export default userSlice.reducer;