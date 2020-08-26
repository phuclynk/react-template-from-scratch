import createSagaMiddleware from 'redux-saga';
import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit';

import { rootSaga } from '../sagas';
import { rootReducer } from '../reducer';


// export const store = createStore(
//     rootReducer, 
//     composeWithDevTools(applyMiddleware(sagaMiddleware))
// );

const configureAppStore = (preloadedState?) => {
    const reduxSagaMonitorOptions = {};
    const sagaMiddleware = createSagaMiddleware(reduxSagaMonitorOptions);

    const middlewares = [sagaMiddleware];

    const store = configureStore({
        reducer: rootReducer,
        devTools: process.env.NODE_ENV !== 'production',
        middleware: [...getDefaultMiddleware(), ...middlewares],
    });

    if (process.env.NODE_ENV !== 'production' && module.hot) {
        module.hot.accept('../reducer', () => store.replaceReducer(rootReducer));
    }

    return store;
};

export type AppDispatch = typeof store.dispatch

export const store = configureAppStore();