import { createSlice } from '@reduxjs/toolkit'
import { selectedCategoryThunk } from '../thunks/selectedCategoryThunk'

export const selectedCategorySlice = createSlice({
  name: 'user',
  initialState: {
    selectedCategory: null,
    status: null,
    loading: false,
  },
  reducers: {
    // Empty
  },
  extraReducers: {
    [selectedCategoryThunk.pending]: (state) => {
      state.status = 'Loading'
      state.loading = false
    },
    [selectedCategoryThunk.fulfilled]: (state, action) => {
      state.status = 'Success'
      state.loading = true
      state.selectedCategory = action.payload
    },
    [selectedCategoryThunk.rejected]: (state) => {
      state.status = 'Failed'
      state.loading = false
    },
  },
})

export default selectedCategorySlice.reducer
