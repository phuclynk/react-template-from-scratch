import { combineReducers } from 'redux';
import { counterReducer } from './counter-reducer';
import { TypedUseSelectorHook, useSelector } from 'react-redux';

export const rootReducer = combineReducers({
    counter: counterReducer
});

export type RootState = ReturnType<typeof rootReducer>;

export const useTypedSelector: TypedUseSelectorHook<RootState> = useSelector;