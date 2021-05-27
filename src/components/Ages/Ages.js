import React from 'react';
import './Ages.styles.scss';
import {ageFilters} from '../../redux/constants/filters';

const Ages = ({activeIndex = 0,onIndexChange}) => {
    return (
        <div className='ageswrapper'>
            <p className='agestitle'>
                Ages
            </p>
            <div className='ageboxwrapper'>
            {ageFilters.map((age,i) => (
                <p 
                className={activeIndex === i ? 'age active' : 'age'}
                key={`age${i}`}
                onClick={() => onIndexChange(i,age)}
                >
                    {age}
                </p>
            ))}
            </div>
        </div>
       
    )
}

export default Ages
