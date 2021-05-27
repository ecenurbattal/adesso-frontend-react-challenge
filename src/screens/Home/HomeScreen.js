import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import image from '../../images/age-of-empires.jpg';
import { setHeaderTitle } from '../../redux/actions/header';
import './HomeScreen.styles.scss';

const HomeScreen = () => {
    
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(setHeaderTitle('Home Page'))
    },[dispatch])

    return (
        <div className='wrapper'>
            <img
            className='homebg' 
            src={image} 
            alt='homeBg'
            />
        </div>
    )
}

export default HomeScreen
