import * as actionTypes from '../actions/actions';

const initialState = {
    counter: 0,
    lastClickDate: ""

};

const reducer = ( state = initialState, action ) => {
    const currentDate=(new Date()).toString()
    switch ( action.type ) {
        case actionTypes.INCREMENT:
            const newState = Object.assign({}, state);
            newState.counter = state.counter + 1;
            return newState;
        case actionTypes.DECREMENT:
            return {
                ...state,
                counter: state.counter - 1,
                lastClickDate:currentDate
            }
        case actionTypes.ADD:
            return {
                ...state,
                counter: state.counter + action.val,
                lastClickDate:currentDate
            }
        case actionTypes.SUBTRACT:
            return {
                ...state,
                counter: state.counter - action.val,
                lastClickDate:currentDate
            }
    }
    return state;
};

export default reducer;