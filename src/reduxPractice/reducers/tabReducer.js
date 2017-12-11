const tabReducer = (state = { focused: 0 }, action) => {
    switch(action.type) {
    case 'CHANGE_TAB':
        return {
            focused: action.focused
        };
    default: return state;
    }
};
export default tabReducer;
