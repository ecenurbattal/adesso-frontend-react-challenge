import {GET_UNITS,GET_UNIT_DETAIL,SET_UNITS, SET_UNIT_DETAIL} from './types';

export const getUnits = () => ({
    type:GET_UNITS,
});

export const setUnits = (units) => ({
    type:SET_UNITS,
    payload:units
})

export const getUnitDetail = (unitId) => ({
    type:GET_UNIT_DETAIL,
    payload:unitId
});

export const setUnitDetail = (currentUnit) => ({
    type:SET_UNIT_DETAIL,
    payload:currentUnit
});


