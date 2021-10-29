export const searchReducer = (state = [], action) => {
    switch (action.type) {
        case 'SEARCH_NAME':
            return [...state, action.payload];

        default: return state;
    }
}