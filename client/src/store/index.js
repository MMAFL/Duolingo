import { configureStore } from '@reduxjs/toolkit'
import achievementReducer from "./reducers/achievementSlice"
const store = configureStore({
  reducer: {
   
    achievement: achievementReducer

  }
})
export default store
// console.log("store",store)