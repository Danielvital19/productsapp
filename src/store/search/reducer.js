const initialState = {
    text: 'hello'
};

const searchReducer = (state = initialState, action) => {
    console.log(action)
    if(action.type === 'CHANGE'){
        return {
            ...state,
            text: action.payload
        }
    }

    return state;

}

export default searchReducer;