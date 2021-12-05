import { createSlice } from '@reduxjs/toolkit'
import { searchDataThunk } from '../thunks/searchDataThunk'

export const searchDataSlice = createSlice({
  name: 'search',
  initialState: {
    searchData: [],
    status: null,
    loading: false,
  },
  reducers: {
    // Empty
  },
  extraReducers: {
    [searchDataThunk.pending]: (state) => {
      state.status = 'Loading'
      state.loading = false
    },
    [searchDataThunk.fulfilled]: (state, action) => {
      state.status = 'Success'
      state.loading = true
      state.searchData.push(action.payload)
    },
    [searchDataThunk.rejected]: (state) => {
      state.status = 'Failed'
      state.loading = false
    },
  },
})

export default searchDataSlice.reducer
