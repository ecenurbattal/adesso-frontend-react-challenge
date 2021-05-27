import React from 'react';
import './Header.styles.scss';
import {routes} from '../../config/Router';
import { useSelector } from 'react-redux';

const Header = () => {
    
    const header = useSelector((state) => state.header.header)

    return (
        <div className='header'>
            <p className='title'>{header}</p>
            <div className='menu'>
                {routes.filter(route => !!route.isLink)
                .map(item => (
                    <li key={`route${item.title}`}>
                        <a href={item.path}>{item.title}</a>
                    </li>
                ))}
            </div>
        </div>
    )
}

export default Header
