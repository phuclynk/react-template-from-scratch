import { fork } from 'redux-saga/effects';
import { counterSaga } from './counter-saga';

export function* rootSaga() {
    yield fork(counterSaga);
}