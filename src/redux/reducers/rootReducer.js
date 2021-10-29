import { combineReducers } from 'redux'
import { randomMealReducer } from './randomMealReducer'
import { headerInfoReducer } from './headerInfoReducer'
import { categoriesReducer } from './categoriesReducer'
import { aboutUsReducer } from './aboutUsReducer'
import { toggleCategoriesReducer } from './toggleCategoriesReducer'
import { selectedCategoryReducer } from './selectedCategoryReducer'
import { getMealByIdReducer } from './getMealByIdReducer'
import { similarMealsReducer } from './similarMealsReducer'
import { searchReducer } from './searchReducer'
import { listOfCategoriesReducer } from './listOfCategoriesReducer'

export const rootReducer = combineReducers({
    randomMeal: randomMealReducer,
    headerInfo: headerInfoReducer,
    categories: categoriesReducer,
    aboutUs: aboutUsReducer,
    toggleCategories: toggleCategoriesReducer,
    selectedCategory: selectedCategoryReducer,
    getMealById: getMealByIdReducer,
    similarMeals: similarMealsReducer,
    search: searchReducer,
    listOfCategories: listOfCategoriesReducer
})