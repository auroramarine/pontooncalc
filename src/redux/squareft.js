import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  value: '',
}

export const squareftSlice = createSlice({
  name: 'squareft',
  initialState,
  reducers: {
    newSquareft: (state, action) => {
      state.value = action.payload
    },
  },
})

// Action creators are generated for each case reducer function
export const { newSquareft} = squareftSlice.actions

export default squareftSlice.reducer