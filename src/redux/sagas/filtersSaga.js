import {units} from '../../age-of-empires-units.json';
import {put,takeEvery} from 'redux-saga/effects';
import {setUnits} from '../actions/units';
import {changeFilterValues} from '../actions/filters';
import {FILTER_BOTH, FILTER_BY_AGE,FILTER_BY_COST,SET_FILTER_VALUES} from '../actions/types';
import { getFilteredUnitsByAge, getFilteredUnitsByCost } from './utils/unitsUtils';


function* handleSetFilterValues(action) {
    yield put(changeFilterValues(action.payload))
}

function* handleAgeFilter(action) {
    const filteredUnits = getFilteredUnitsByAge(units,action.payload)
    yield put(setUnits(filteredUnits))
}

function* handleCostFilter(action) {
    const filteredUnits = getFilteredUnitsByCost(units,action.payload)
    yield put(setUnits(filteredUnits))
}

function* handleBothFilter(action) {
    const ageFilteredUnits = getFilteredUnitsByAge(units,action.payload.ageFilters)
    const bothFilteredUnits = getFilteredUnitsByCost(ageFilteredUnits,action.payload.costFilters)
    yield put(setUnits(bothFilteredUnits))
}

export function* watchFilterValues() {
    yield takeEvery(SET_FILTER_VALUES,handleSetFilterValues)
}


export function* watchAgeFilter() {
    yield takeEvery(FILTER_BY_AGE,handleAgeFilter)
}

export function* watchCostFilter() {
    yield takeEvery(FILTER_BY_COST,handleCostFilter)
}

export function* watchBothFilter() {
    yield takeEvery(FILTER_BOTH,handleBothFilter)
}