import { FILTER_BY_AGE, FILTER_BY_COST,FILTER_BOTH,CHANGE_FILTER_VALUES,SET_FILTER_VALUES } from "./types";

export const filterByAge = (age) => ({
    type:FILTER_BY_AGE,
    payload:age
});

export const filterByCost = (costsObject) => ({
    type:FILTER_BY_COST,
    payload:costsObject
})

export const setFilterValues = (filter) => ({
    type:SET_FILTER_VALUES,
    payload:filter
});

export const changeFilterValues = (filterObject) => ({
    type:CHANGE_FILTER_VALUES,
    payload:filterObject
});

export const filterBoth = (filtersObject) => ({
    type:FILTER_BOTH,
    payload:filtersObject
})