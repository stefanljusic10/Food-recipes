import { createSlice } from '@reduxjs/toolkit'
import { getCategoriesThunk } from '../thunks/getCategoriesThunk'

export const getCategoriesSlice = createSlice({
    name: 'user',
    initialState: {
        categories: [],
        status: null,
        loading: false
    },
    reducers: {
        // Empty
    },
    extraReducers: {
        [getCategoriesThunk.pending]: (state) => {
            state.status = 'Loading'
            state.loading = false
        },
        [getCategoriesThunk.fulfilled]: (state, action) => {
            state.status = 'Success'
            state.loading = true
            state.categories = action.payload
        },
        [getCategoriesThunk.rejected]: (state) => {
            state.status = 'Failed'
            state.loading = false
        }
    }
})

export default getCategoriesSlice.reducer