export const getMealByIdReducer = (state = null, action) => {
    switch (action.type) {
        case 'GET_MEAL_BY_ID':
            return action.payload;

        default: return state;
    }
}