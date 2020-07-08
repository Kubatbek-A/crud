const initialState = {
    data: []
};

const SearchReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'FOUND_ITEM': return {
            ...state,
            data: action.payload
        }
        case 'CLOSE_SEARCH_MODAL': return {
            ...state,
            data: action.payload
        }
        default: return state
    }
};

export default SearchReducer;