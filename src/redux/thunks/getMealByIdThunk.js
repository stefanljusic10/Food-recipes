import { createAsyncThunk } from '@reduxjs/toolkit'
import axios from 'axios'

export const getMealByIdThunk = createAsyncThunk(
    'mealId/getMealByIdThunkStatus',
    async (mealId) => {
        const response = await axios.get(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${mealId}`)
        return response.data
    }
)