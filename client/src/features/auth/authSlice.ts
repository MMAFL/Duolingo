import { User } from "@/types";
import { createSlice } from "@reduxjs/toolkit";

interface AuthState {
  user: User | null;
}

const user = JSON.parse(localStorage.getItem("user")!);

const initialState: AuthState = {
  user: user || null,
};

export const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    setUser: (state, action) => {
      state.user = action.payload;
      localStorage.setItem("user", JSON.stringify(action.payload));
    },
    deleteUser: (state) => {
      state.user = null;
    },
    setHearts: (state, action) => {
      state.user = action.payload;
    },
  },
});

export const { setUser, deleteUser, setHearts } = authSlice.actions;
export default authSlice.reducer;
