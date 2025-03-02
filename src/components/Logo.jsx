import React from 'react';
import logo from '../assets/gauntlet-logo.png'

function Logo({ width = '100px' }) {
    return (
        <img
            src={logo}
            alt=" " 
            style={{ width }} 
            className="h-auto" 
        />
    );
}

export default Logo;