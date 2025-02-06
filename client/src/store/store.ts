import { configureStore } from "@reduxjs/toolkit";
import gameReducer from "./slices/gameSlice";
import authReducer from "./slices/authSlice";

const store = configureStore({
  reducer: {
    game: gameReducer,
    auth: authReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
