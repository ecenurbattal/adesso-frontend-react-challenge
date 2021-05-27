import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import UnitDetail from '../../components/UnitDetail/UnitDetail';
import { setHeaderTitle } from '../../redux/actions/header';

const UnitDetailScreen = () => {

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(setHeaderTitle('Unit Detail Page'))
    },[dispatch])

    return (
        <div>
            <UnitDetail/>
        </div>
    )
}

export default UnitDetailScreen
