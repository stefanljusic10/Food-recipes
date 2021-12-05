import { configureStore } from '@reduxjs/toolkit'
import getCategoriesReducer from './slices/getCategoriesSlice'
import toggleCategoriesReducer from './slices/toggleCategoriesSlice'
import selectedCategoryReducer from './slices/selectedCategorySlice'
import getMealByIdReducer from './slices/getMealByIdSlice'
import searchDataReducer from './slices/searchDataSlice'
import listOfCategoriesReducer from './slices/listOfCategoriesSlice'
import getRandomMealReducer from './slices/getRandomMealSlice'

export const store = configureStore({
  reducer: {
    getCategories: getCategoriesReducer,
    toggleCategories: toggleCategoriesReducer,
    selectedCategory: selectedCategoryReducer,
    getMealById: getMealByIdReducer,
    searchData: searchDataReducer,
    listOfCategories: listOfCategoriesReducer,
    getRandomMeal: getRandomMealReducer,
  },
})
