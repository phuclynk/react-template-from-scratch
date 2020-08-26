export const ADD_ONE = 'ADD_ONE';
export const MINUS_ONE = 'MINUS_ONE';
export const ADD_ONE_ASYNC = 'ADD_ONE_ASYNC';
export const MINUS_ONE_ASYNC = 'MINUS_ONE_ASYNC';

type action = () => { type: string }

export const increase : action = () => {
    return {
        type: ADD_ONE
    };
};
  
export const decrease : action = () => {
    return {
        type: MINUS_ONE
    };
};

export const increase_async : action = () => {
    return {
        type: ADD_ONE_ASYNC
    };
};

export const decrease_async : action = () => {
    return {
        type: MINUS_ONE_ASYNC
    };
};