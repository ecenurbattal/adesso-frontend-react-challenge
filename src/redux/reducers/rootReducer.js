import {combineReducers} from 'redux';
import unitsReducer from '../reducers/units';
import filtersReducer from './filters';
import headerReducer from './header';

const rootReducer = combineReducers({
    units:unitsReducer,
    header:headerReducer,
    filters:filtersReducer
});

export default rootReducer;