import { configureStore } from '@reduxjs/toolkit'
import achievementReducer from "./reducers/achievementSlice"

const store = configureStore({
  reducer: {
   
    achievement: achievementReducer

  }
})
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export default store
// console.log("store",store)