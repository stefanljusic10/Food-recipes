import { createSlice } from '@reduxjs/toolkit'
import { listOfCategoriesThunk } from '../thunks/listOfCategoriesThunk'

export const listOfCategoriesSlice = createSlice({
  name: 'user',
  initialState: {
    list: [],
    status: null,
    loading: false,
  },
  reducers: {
    // Empty
  },
  extraReducers: {
    [listOfCategoriesThunk.pending]: (state) => {
      state.status = 'Loading'
      state.loading = false
    },
    [listOfCategoriesThunk.fulfilled]: (state, action) => {
      state.status = 'Success'
      state.loading = true
      state.list.push(action.payload)
    },
    [listOfCategoriesThunk.rejected]: (state) => {
      state.status = 'Failed'
      state.loading = false
    },
  },
})

export default listOfCategoriesSlice.reducer
