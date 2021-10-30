export const similarMealsReducer = (state = [], action) => {
  switch (action.type) {
    case "GET_MEAL_BY_ID":
      return [...state, action.payload]

    default:
      return state
  }
}
