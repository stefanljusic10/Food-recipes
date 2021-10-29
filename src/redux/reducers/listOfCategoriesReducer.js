export const listOfCategoriesReducer = (state = [], action) => {
    switch (action.type) {
        case 'LIST_OF_CATEGORIES':
            return [...state, action.payload];

        default: return state;
    }
}