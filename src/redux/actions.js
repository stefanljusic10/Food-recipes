import axios from "axios"

export const getRandomMealAction = () => async (dispatch) => {
  const response = await axios.get(
    "https://www.themealdb.com/api/json/v1/1/random.php"
  )

  dispatch({
    type: "GET_RANDOM_MEAL",
    payload: response.data,
  })
}

export const getCategoriesAction = () => async (dispatch) => {
  const response = await axios.get(
    "https://www.themealdb.com/api/json/v1/1/categories.php"
  )

  dispatch({
    type: "GET_CATEGORIES",
    payload: response.data,
  })
}

export const toggleCategoriesAction = () => ({
  type: "TOGGLE_CATEGORIES",
})

export const selectedCategoryAction = (categoryName) => async (dispatch) => {
  const response = await axios.get(
    "https://www.themealdb.com/api/json/v1/1/filter.php",
    {
      params: {
        c: categoryName,
      },
    }
  )

  dispatch({
    type: "SELECTED_CATEGORY",
    payload: response.data,
  })
}

export const getMealByIdAction = (id) => async (dispatch) => {
  const response = await axios.get(
    "https://www.themealdb.com/api/json/v1/1/lookup.php",
    {
      params: {
        i: id,
      },
    }
  )

  dispatch({
    type: "GET_MEAL_BY_ID",
    payload: response.data,
  })
}

export const searchNameAction = (mealName) => async (dispatch) => {
  const response = await axios.get(
    "https://www.themealdb.com/api/json/v1/1/search.php",
    {
      params: {
        s: mealName,
      },
    }
  )

  dispatch({
    type: "SEARCH_NAME",
    payload: response.data,
  })
}

export const listOfCategoriesAction = () => async (dispatch) => {
  const response = await axios.get(
    "https://www.themealdb.com/api/json/v1/1/list.php?c=list"
  )

  dispatch({
    type: "LIST_OF_CATEGORIES",
    payload: response.data,
  })
}
