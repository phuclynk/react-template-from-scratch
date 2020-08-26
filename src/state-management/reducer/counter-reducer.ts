import { ADD_ONE, MINUS_ONE } from '../../state-management/actions';

const initialState = {
    number: 0
};

export const counterReducer = (state = initialState, action : any) => {
    switch(action.type) {
    case ADD_ONE:
        return {
            number: state.number + 1
        };
    case MINUS_ONE:
        return {
            number: state.number - 1
        };
    default:
        return state;
    }
};