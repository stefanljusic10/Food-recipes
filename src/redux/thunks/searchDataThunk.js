import { createAsyncThunk } from '@reduxjs/toolkit'
import axios from 'axios'

export const searchDataThunk = createAsyncThunk(
    'searchData/searchDataThunkStatus',
    async (mealName) => {
        const response = await axios.get(`https://www.themealdb.com/api/json/v1/1/search.php?s=${mealName}`)
        return response.data
    }
)