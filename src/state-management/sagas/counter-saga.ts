import { put, takeEvery, all, delay } from 'redux-saga/effects';
import { ADD_ONE, MINUS_ONE, ADD_ONE_ASYNC, MINUS_ONE_ASYNC } from '../actions';
  
function* incrementAsync() {
    yield delay(500);
    yield put({ type: ADD_ONE });
}

function* decrementAsync() {
    yield delay(500);
    yield put({ type:  MINUS_ONE });
}
  
function* watchIncrementAsync() {
    yield takeEvery(ADD_ONE_ASYNC, incrementAsync);
}

function* watchDecrementAsync() {
    yield takeEvery(MINUS_ONE_ASYNC, decrementAsync);
}
  
export function* counterSaga() {
    yield all([
        watchIncrementAsync(),
        watchDecrementAsync()
    ]);
} 