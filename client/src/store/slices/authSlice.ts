import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface User {
  userId: number;
  username: string;
  email: string;
  createdAt: string;
}

interface AuthState {
  user: User | null;
}

const initialState: AuthState = {
  user: {
    userId: 1,
    username: "JohnDoe",
    email: "john@example.com",
    createdAt: "2023-10-01",
  },
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    setUser(state, action: PayloadAction<User>) {
      state.user = action.payload;
    },
  },
});

export const { setUser } = authSlice.actions;
export default authSlice.reducer;
