import { createSlice } from '@reduxjs/toolkit'
import { getMealByIdThunk } from '../thunks/getMealByIdThunk'

export const getMealByIdSlice = createSlice({
    name: 'user',
    initialState: {
        singleMeal: null,
        status: null,
        loading: false
    },
    reducers: {
        // Empty
    },
    extraReducers: {
        [getMealByIdThunk.pending]: (state) => {
            state.status = 'Loading'
            state.loading = false
        },
        [getMealByIdThunk.fulfilled]: (state, action) => {
            state.status = 'Success'
            state.loading = true
            state.singleMeal = action.payload
        },
        [getMealByIdThunk.rejected]: (state) => {
            state.status = 'Failed'
            state.loading = false
        }
    }
})

export default getMealByIdSlice.reducer