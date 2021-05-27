export const getSingleUnit = (units,unitId) => {
    return units.filter(unit => unit.id === unitId)
}

export const getFilteredUnitsByCost = (units,filter) => {
    const filteredUnits = units.filter(item => {
        for (let key in filter) {
            if(!(item.cost)) return false
            if(item.cost[key] === undefined || item.cost[key] > filter[key].max || item.cost[key] < filter[key].min)
                return false
        }
        return true
    })
    return filteredUnits;
}

export const getFilteredUnitsByAge = (units,age) => {
    return age === 'All' ? units : 
    units.filter(unit => unit.age === age)
} 