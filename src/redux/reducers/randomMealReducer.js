export const randomMealReducer = (state = null, action) => {
  switch (action.type) {
    case "GET_RANDOM_MEAL":
      return action.payload

    default:
      return state
  }
}
