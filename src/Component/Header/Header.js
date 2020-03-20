import React from 'react';
import image from '../../image/fwitter.jpg'
import './Header.css'


const Header = () => {
    return (
        <div className="header">
            <img src={image} alt=""/>
        </div>
    );
};

export default Header;