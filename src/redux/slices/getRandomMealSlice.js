import { createSlice } from '@reduxjs/toolkit'
import { getRandomMealThunk } from '../thunks/getRandomMealThunk'

export const getRandomMealSlice = createSlice({
  name: 'user',
  initialState: {
    randomMeal: null,
    status: null,
    loading: false,
  },
  reducers: {
    // Empty
  },
  extraReducers: {
    [getRandomMealThunk.pending]: (state) => {
      state.status = 'Loading'
      state.loading = false
    },
    [getRandomMealThunk.fulfilled]: (state, action) => {
      state.status = 'Success'
      state.loading = true
      state.randomMeal = action.payload
    },
    [getRandomMealThunk.rejected]: (state) => {
      state.status = 'Failed'
      state.loading = false
    },
  },
})

export default getRandomMealSlice.reducer
