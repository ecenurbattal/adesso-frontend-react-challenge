import React from 'react';
import { useSelector } from 'react-redux';
import { useHistory } from 'react-router';
import '../../styles/Table.styles.scss'

const Units = () => {

    const units = useSelector((state) => state.units.units);
    const history = useHistory()

    return (
        <table>
            <thead>
            <tr className='tabletitle'>
                <th>Id</th>
                <th>Name</th>
                <th>Age</th>
                <th>Costs</th>
            </tr>
            </thead>
            <tbody>
            {units.map(unit => (
                <tr key={unit.id} className='tableitem' onClick={() => history.push(`/units/${unit.id}`)}>
                    <th>{unit.id}</th>
                    <th>{unit.name}</th>
                    <th>{unit.age}</th>
                    <th>{JSON.stringify(unit.cost).replace(/{|}|"/gi,'')}</th>
                </tr>
            ))}
            </tbody>
        </table>
    )
}

export default Units
