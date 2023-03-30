import { configureStore } from '@reduxjs/toolkit'
import lengthReducer from './dimensions'
import radiusReducer from './radius'
import squareftReducer from './squareft'
import locationReducer from "./location"

export const store = configureStore({
  reducer: {
    length: lengthReducer,
    radius: radiusReducer,
    squareft: squareftReducer,
    locationer: locationReducer,
  },
})