import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import './index.scss';
import { NavigationLinks } from './data'; 

export const Menu = () => {
    const location = useLocation();

    return (
        <div className='Menu_container'>
            <div className='Menu_wrapper'>
                <div className='Menu_logo'>
                    Logo
                </div>
                <div className='Menu_item'>
                    {NavigationLinks.map((link) => (
                        <Link
                            key={link.id}
                            to={link.path}
                            className={`Menu_link ${location.pathname === link.path ? 'active' : ''}`}
                        >
                            {link.title}
                        </Link>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Menu;