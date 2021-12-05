import { createAsyncThunk } from '@reduxjs/toolkit'
import axios from 'axios'

export const listOfCategoriesThunk = createAsyncThunk(
  'listOfCategories/getListOfCategoriesThunkStatus',
  async () => {
    const response = await axios.get('https://www.themealdb.com/api/json/v1/1/list.php?c=list')
    return response.data
  },
)
