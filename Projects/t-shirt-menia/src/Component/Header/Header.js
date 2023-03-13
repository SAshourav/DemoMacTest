import React from 'react';
import './Header.css'
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <nav>
            <Link to='/home'>Home</Link>
            <Link to='/orders'>Orders</Link>
            <Link to='/about'>About</Link>
            <Link to='/grandpa'>Grandpa</Link>
        </nav>
    );
};

export default Header;