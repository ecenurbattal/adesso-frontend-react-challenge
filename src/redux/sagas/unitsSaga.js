import {units} from '../../age-of-empires-units.json';
import {put, takeEvery} from 'redux-saga/effects';
import {setUnits, setUnitDetail} from '../actions/units';
import {GET_UNITS, GET_UNIT_DETAIL} from '../actions/types';
import {getSingleUnit} from './utils/unitsUtils';

function* handleGetUnits() {
    yield put(setUnits(units));
}

function* handleGetUnitDetail(action) {
    const unit = getSingleUnit(units,action.payload)
    yield put(setUnitDetail(unit))
}



export function* watchUnits() {
    yield takeEvery(GET_UNITS,handleGetUnits)
}

export function* watchUnitDetail() {
    yield takeEvery(GET_UNIT_DETAIL,handleGetUnitDetail)
}

