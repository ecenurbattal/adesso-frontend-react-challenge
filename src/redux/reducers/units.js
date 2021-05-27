import {SET_UNITS, SET_UNIT_DETAIL} from '../actions/types';

const initialState = {
    units: [],
    currentUnit: null,
};


const unitsReducer = (state = initialState, action) => {
    switch(action.type) {
        case SET_UNITS:
            return {...state, units:action.payload}
        case SET_UNIT_DETAIL:
            return {...state, currentUnit:action.payload}
        default:
            return state
    }
};

export default unitsReducer;