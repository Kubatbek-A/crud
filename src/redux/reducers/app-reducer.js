const initialState = {
    data: [],
    quantity: null,
    currentPage: 1,
    maxPage: 1
};

const AppReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'SET_DATA': return {
            ...state,
            data: action.payload,
            maxPage: action.maxPage,
            quantity: action.quantity
        }
        case 'NEW_PAGE': return {
            ...state,
            currentPage: action.payload
        }
        default: return state;
    }
}

export default AppReducer;