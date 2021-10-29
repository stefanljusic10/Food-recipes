export const toggleCategoriesReducer = (state = { isOpen: true }, action) => {
    switch (action.type) {
        case 'TOGGLE_CATEGORIES':
            return { ...state, isOpen: !state.isOpen };
            
        default: return state;
    }
}