import { createAsyncThunk } from '@reduxjs/toolkit'
import axios from 'axios'

export const getRandomMealThunk = createAsyncThunk(
    'getRandomMeal/getRandomMealThunkStatus',
    async () => {
        const response = await axios.get('https://www.themealdb.com/api/json/v1/1/random.php')
        return response.data
    }
)