import {put,takeLatest} from 'redux-saga/effects';
import {changeHeaderTitle} from '../actions/header';
import {SET_HEADER_TITLE} from '../actions/types';

function* handleSetTitle(action) {
    yield put(changeHeaderTitle(action.payload))
}

export function* watchSetHeader() {
    yield takeLatest(SET_HEADER_TITLE,handleSetTitle)
}