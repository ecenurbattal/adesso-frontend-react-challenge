import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector} from 'react-redux'
import Ages from '../../components/Ages/Ages';
import Costs from '../../components/Costs/Costs';
import Units from '../../components/Units/Units';
import { setHeaderTitle } from '../../redux/actions/header';
import { getUnits} from '../../redux/actions/units';
import {filterBoth, filterByAge, filterByCost, setFilterValues} from '../../redux/actions/filters';

const UnitsScreen = () => {

    const dispatch = useDispatch();
    const [activeAgeIndex,setActiveAgeIndex] = useState();

    const filters = useSelector((state) => state.filters.filters)

    //const units = useSelector((state) => state.units.units)

    useEffect(() => {
        dispatch(setHeaderTitle('Units Page'))
        dispatch(getUnits())
    },[dispatch])

    // const selectFilterMode = () => {
    //     if(!(filters.costFilters)){
    //         dispatch(filterByAge(age))
    //     } else {
    //         dispatch(filterBoth({ageFilters:age,costFilters:filters.costFilters}))
    //     }
    // }

    useEffect(() => {
        if(!(filters.costFilters)){
            dispatch(filterByAge(filters.ageFilters))
        } else if(!(filters.ageFilters)) {
            dispatch(filterByCost(filters.costFilters))
        } else {
            dispatch(filterBoth(filters))
        }
    },[filters,dispatch])

    const handleAgeFilter = (index,age) => {
        setActiveAgeIndex(index)
        dispatch(setFilterValues({ageFilters:age}))
    }

    return (
        <div>
            <Ages
                activeIndex={activeAgeIndex}
                onIndexChange={(index,age) => handleAgeFilter(index,age)}
            />
            <Costs/>
            <Units/>
        </div>
    )
}

export default UnitsScreen
