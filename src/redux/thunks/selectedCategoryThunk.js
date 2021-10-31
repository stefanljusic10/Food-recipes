import { createAsyncThunk } from '@reduxjs/toolkit'
import axios from 'axios'

export const selectedCategoryThunk = createAsyncThunk(
    'selectedCategory/selectedCategoryThunkStatus',
    async (categoryName) => {
        const response = await axios.get(`https://www.themealdb.com/api/json/v1/1/filter.php?c=${categoryName}`)
        return response.data
    }
)