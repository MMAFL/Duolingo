import { configureStore } from '@reduxjs/toolkit';
import storeReducer from './reducers/store';
import userReducer from "../types/user'xp"

const store = configureStore({
    reducer: {
        store: storeReducer,
        user: userReducer,
    }
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
