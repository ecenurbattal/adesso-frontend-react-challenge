import {all} from 'redux-saga/effects';
import { watchBothFilter, watchFilterValues,watchAgeFilter, watchCostFilter } from './filtersSaga';
import { watchSetHeader } from './headerSaga';
import {watchUnits, watchUnitDetail} from './unitsSaga';


export function* watcherSaga() {
    yield all([
        watchUnits(),
        watchUnitDetail(),
        watchAgeFilter(),
        watchCostFilter(),
        watchSetHeader(),
        watchFilterValues(),
        watchBothFilter()
    ])
}