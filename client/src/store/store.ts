import { configureStore } from "@reduxjs/toolkit";
import gameReducer from "./slices/gameSlice";
import authReducer from "./slices/authSlice";
import achievementReducer from './reducers/achievementSlice';
import userReducer from './reducers/userSlice';

const store = configureStore({
  reducer: {
    game: gameReducer,
    auth: authReducer,
    achievement: achievementReducer,
    user: userReducer
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
