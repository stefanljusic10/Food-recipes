import { createAsyncThunk } from '@reduxjs/toolkit'
import axios from 'axios'

export const getCategoriesThunk = createAsyncThunk(
  'getCategories/getCategoriesThunkStatus',
  async () => {
    const response = await axios.get('https://www.themealdb.com/api/json/v1/1/categories.php')
    return response.data
  },
)
