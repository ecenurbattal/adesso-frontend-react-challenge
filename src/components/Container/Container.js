import React from 'react'
import {BrowserRouter as Router} from 'react-router-dom';
import './Container.styles.scss';

const Container = ({children}) => {
    return (
        <div className='container'>
            <Router>{children}</Router>
        </div>
    )
}

export default Container;
