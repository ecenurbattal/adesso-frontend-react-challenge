import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router';
import { getUnitDetail } from '../../redux/actions/units';
import '../../styles/Table.styles.scss';

const UnitDetail = () => {

    const {unitId} = useParams();
    const dispatch = useDispatch();
    const currentUnit = useSelector((state) => state.units.currentUnit ? state.units.currentUnit : '')

    useEffect(() => {
        dispatch(getUnitDetail(Number(unitId)))
    },[dispatch,unitId])

    return (
        <>
            {currentUnit&&
                <table>
                    <tbody>
                        <tr>
                            <th className='tabletitle'>Id</th>
                            <th>{currentUnit[0].id}</th>
                        </tr>
                        <tr>
                            <th className='tabletitle'>Name</th>
                            <th>{currentUnit[0].name}</th>
                        </tr>
                        <tr>
                            <th className='tabletitle'>Description</th>
                            <th>{currentUnit[0].description}</th>
                        </tr>
                        <tr>
                            <th className='tabletitle'>Min. Required Age</th>
                            <th>{currentUnit[0].age}</th>
                        </tr>
                        <tr>
                            <th className='tabletitle'>Wood Cost</th>
                            <th>{currentUnit[0].cost?.Wood}</th>
                        </tr>
                        <tr>
                            <th className='tabletitle'>Food Cost</th>
                            <th>{currentUnit[0].cost?.Food}</th>
                        </tr>
                        <tr>
                            <th className='tabletitle'>Gold Cost</th>
                            <th>{currentUnit[0].cost?.Gold}</th>
                        </tr>
                        <tr>
                            <th className='tabletitle'>Build Time</th>
                            <th>{currentUnit[0].build_time}</th>
                        </tr>
                        <tr>
                            <th className='tabletitle'>Reload Time</th>
                            <th>{currentUnit[0].reload_time}</th>
                        </tr>
                        <tr>
                            <th className='tabletitle'>Hit Points</th>
                            <th>{currentUnit[0].hit_points}</th>
                        </tr>
                        <tr>
                            <th className='tabletitle'>Attack</th>
                            <th>{currentUnit[0].attack}</th>
                        </tr>
                        <tr>
                            <th className='tabletitle'>Accuracy</th>
                            <th>{currentUnit[0].accuracy}</th>
                        </tr>
                    </tbody>
                </table>
            }
        </>
    )
}

export default UnitDetail
