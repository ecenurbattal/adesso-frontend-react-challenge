import React, { useEffect, useState } from 'react';
import './Costs.styles.scss';
import {costFilters} from '../../redux/constants/filters';
import { useDispatch, useSelector } from 'react-redux';
import { setFilterValues } from '../../redux/actions/filters';

const Costs = () => {

    const dispatch = useDispatch();

    const [isCostChecked,setCostChecked] = useState({
        Wood:false,
        Food:false,
        Gold:false
    });

    const filters = useSelector((state) => state.filters.filters)

    const [costValues,setCostValues] = useState({})

    useEffect(() => {
        dispatch(setFilterValues({...filters,costFilters:costValues}))
    },[costValues,dispatch])

    return (
        <div className='costswrapper'>
            <p className='coststitle'>
                Costs
            </p>
            <div className='costtypeswrapper'>
                {costFilters.map((cost,i) => (
                    <div key={`cost${i}`} className='costlinewrapper'>
                        <input
                        type='checkbox'
                        defaultChecked={isCostChecked[cost] || false}
                        onChange={() => {
                            isCostChecked[cost] && delete costValues[cost]
                            setCostChecked((prevState) => {
                                return {...prevState,[cost]:!prevState[cost]}
                            })
                        }}
                        />
                        <label className='costname'>{cost}</label>
                        <div className='rangeselectorwrapper'>
                            <label className='minmax'>Min</label>
                            <input
                            className={!isCostChecked[cost] ? 'slider disable' : 'slider'}
                            type='range'
                            min={0}
                            max={200}
                            disabled={!isCostChecked[cost] || false}
                            value={costValues[cost] ? costValues[cost].min : 0}
                            onChange={(event) => {
                                setCostValues((prevState) => {
                                    return {
                                        ...prevState,
                                        [cost]:{...prevState[cost],min:event.target.value
                                    }}
                                })
                            }}
                            />
                            {isCostChecked[cost] && <label className='minmax'>{costValues[cost] ? costValues[cost].min : 0}</label>}
                        </div>
                        <div className='rangeselectorwrapper'>
                            <label className='minmax'>Max</label>
                            <input
                            className={!isCostChecked[cost] ? 'slider disable' : 'slider'}
                            type='range'
                            value={costValues[cost] ? costValues[cost].max : 200}
                            min={0}
                            max={200}
                            disabled={!isCostChecked[cost] || false}
                            onChange={(event) => {
                                setCostValues((prevState) => {
                                    return {
                                        ...prevState,
                                        [cost]:{...prevState[cost],max:event.target.value
                                    }}
                                })
                            }}
                            />
                            {isCostChecked[cost] && <label className='minmax'>{costValues[cost] ? costValues[cost].max : 200}</label>}
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Costs
