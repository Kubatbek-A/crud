const initialState = {
    currentContact: null
};

const EditReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'OPEN_MODAL': return {
            currentContact: action.payload
        };
        case 'CLOSE_MODAL': return {
            currentContact: action.payload
        };
        default: return state;
    }
}

export default EditReducer;